const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const QuerySlices = ` {
  allPrismicPage(limit:1000) {
    edges {
      node {
        prismicId
        uid
      }
    }
  }
}`

const ProjectPages = `{
  allPrismicProject {
    edges {
    node {
      uid
      id
    }
    }
  }
}`

const ProjectsByCategory = `{
  allPrismicProjectCategory {
    edges {
      node {
        uid
        
      }
    }
  }
}
`

const NewsPosts = `
{
  allPrismicNewsPost {
    edges {
      node {
        uid
      }
    }
  }
}
`

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  await graphql(QuerySlices).then(result => {
    result.data.allPrismicPage.edges.map(({ node }) => {
      createPage({
        path: LinkResolver(node.uid),
        component: path.resolve("src/templates/page.js"),
        context: {
          slug: node.uid,
        },
      })
    })
  })

  await graphql(ProjectPages).then(result => {
    result.data.allPrismicProject.edges.map(({ node }) => {
      // console.log(node)
      createPage({
        path: `/project/${node.uid}`,
        component: path.resolve("src/templates/project.js"),
        context: {
          slug: node.uid,
        },
      })
    })
  })
  await graphql(ProjectsByCategory).then(result => {
    result.data.allPrismicProjectCategory.edges.map(({ node }) => {
      console.log(node)
      // console.log(node)
      createPage({
        path: ProjectsLinkResolver(node.uid),
        component: path.resolve("src/templates/projects.js"),
        context: {
          slug: node.uid,
        },
      })
    })
  })

  await graphql(NewsPosts).then(result => {
    result.data.allPrismicNewsPost.edges.map(({ node }) => {
      console.log(node)
      createPage({
        path: NewsLinkResolver(node.uid),
        component: path.resolve("src/templates/newsPost.js"),
        context: {
          slug: node.uid,
        },
      })
    })
  })
}

function NewsLinkResolver(link) {
  switch (link) {
    case "news":
      return "/news"
    default:
      return `/news/${link}`
  }
}

function ProjectsLinkResolver(link) {
  switch (link) {
    case "projects":
      return "/projects"
    default:
      return `/projects/${link}`
  }
}

function LinkResolver(link) {
  switch (link) {
    case "home":
      return "/"
    default:
      return `/${link}`
  }
}
