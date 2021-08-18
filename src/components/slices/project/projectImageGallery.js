import React from "react"
import Image from "gatsby-image"

export default function ProjectImageGallery({ data }) {
  return (
    <div className="project-image-gallery">
      <div className="wrap">
        <div
          className={`${data.items.length % 2 == 0 ? "container" : "flex-odd"}`}
        >
          {data.items.map((item, index) => {
            return (
              <div key={index} className="image-wrapper">
                <Image
                  imgStyle={{
                    objectFit: "cover",
                  }}
                  fluid={item.image.localFile.childImageSharp.fluid}
                  key={index}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
