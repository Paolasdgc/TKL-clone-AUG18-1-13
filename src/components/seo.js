/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, metaImage }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: "keywords",
          content: site.siteMetadata.keywords.join(","),
        },

        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: metaImage.url,
                },
                {
                  property: "og:image:width",
                  content: metaImage.dimensions.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.dimensions.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

// const david = (
//   <Helmet
//     htmlAttributes={{
//       lang,
//     }}
//     title={title}
//     titleTemplate={`%s | ${site.siteMetadata.title}`}
//     meta={[
//       {
//         name: `description`,
//         content: metaDescription,
//       },
//       {
//         name: "keywords",
//         content: data.site.siteMetadata.keywords.join(","),
//       },
//       {
//         property: `og:title`,
//         content: title,
//       },
//       {
//         property: `og:description`,
//         content: metaDescription,
//       },
//       {
//         property: `og:type`,
//         content: `website`,
//       },
//       {
//         name: `twitter:creator`,
//         content: site.siteMetadata.author,
//       },
//       {
//         name: `twitter:title`,
//         content: title,
//       },
//       {
//         name: `twitter:description`,
//         content: metaDescription,
//       },
//     ]
//       .concat(
//         metaImage
//           ? [
//               {
//                 property: "og:image",
//                 content: image,
//               },
//               {
//                 property: "og:image:width",
//                 content: metaImage.width,
//               },
//               {
//                 property: "og:image:height",
//                 content: metaImage.height,
//               },
//               {
//                 name: "twitter:card",
//                 content: "summary_large_image",
//               },
//             ]
//           : [
//               {
//                 name: "twitter:card",
//                 content: "summary",
//               },
//             ]
//       )
//       .concat(meta)}
//   />
// )
