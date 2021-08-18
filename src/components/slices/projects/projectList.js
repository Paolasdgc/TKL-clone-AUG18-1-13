import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

export default function ProjectList({ data, right }) {
  const featuredImage = data.primary.featured_project.document[0].data.body.filter(
    x => x.__typename === "PrismicProjectBodyHeaderPhoto"
  )[0]
  return (
    <div className="project-list-container project-list-wrap-custom  ">
      <article>
        <Link
          style={{
            order: right ? "" : "1",
            paddingRight: right ? "1em" : "",
          }}
          className="featured-image"
          to={`/project/${data.primary.featured_project.document[0].uid}`}
        >
          <Image
            fluid={featuredImage.primary.image.localFile.childImageSharp.fluid}
          />
          <p style={{ fontSize: "1em" }}>
            {data.primary.featured_project.document[0].data.title_of_page.text}
          </p>
        </Link>

        <div
          style={{
            paddingRight: right ? "0" : "1em",
          }}
          className="projects-image-grid"
        >
          {data.items.map((item, index) => {
            if (
              item.project_list_link &&
              item.project_list_link.document[0].uid
            ) {
              return (
                <Link
                  key={index}
                  className="link-container"
                  to={`/project/${item.project_list_link.document[0].uid}`}
                >
                  <Image
                    width="100%"
                    imgStyle={{
                      width: "100%",
                    }}
                    height="100%"
                    fluid={
                      item.project_list_link.document[0].data.body.filter(
                        x => x.__typename === "PrismicProjectBodyHeaderPhoto"
                      )[0].primary.image.localFile.childImageSharp.fluid
                    }
                  />
                  <p>
                    {item.project_list_link.document[0].data.title_of_page.text}
                  </p>
                </Link>
              )
            } else {
              return null
            }
            console.log(item.project_list_link.document[0])
          })}
        </div>
      </article>
    </div>
  )
}
