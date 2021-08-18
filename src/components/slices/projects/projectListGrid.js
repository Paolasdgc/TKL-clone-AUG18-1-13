import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

function ProjectListGrid2X2({ data }) {
  return (
    <div className="about-image-one project-list-wrap-custom">
      {data.items.map((item, index) => {
        return (
          <Link to={`/project/${item.project.uid}`}>
            <Image
              fadeIn
              imgStyle={{
                width: "100%",
              }}
              height="100%"
              fluid={
                item.project.document[0].data.body.filter(
                  x => x.__typename === "PrismicProjectBodyHeaderPhoto"
                )[0].primary.image.localFile.childImageSharp.fluid
              }
            />
            <p>{item.project.document[0].data.title_of_page.text}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default ProjectListGrid2X2
