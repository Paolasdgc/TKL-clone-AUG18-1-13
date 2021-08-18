import React from "react"
import Image from "gatsby-image"

export default function Location({ data }) {
  return (
    <div className="location-wrapper">
      <h3 className="wrap location-title ">Location</h3>
      <div className="container wrap">
        {data.items.map((item, index) => {
          console.log(item)
          return (
            <div key={index} className="image-column">
              <Image fluid={item.image.localFile.childImageSharp.fluid} />
              <div
                className="image-markdown"
                dangerouslySetInnerHTML={{ __html: item.description.html }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
