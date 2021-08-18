import React from "react"
import Image from "gatsby-image"

export default function AboutImageOne({ data }) {
  return (
    <div className="wrap">
      <div className="about-image-one">
        {data.items.map((item, index) => {
          return <Image fluid={item.image.localFile.childImageSharp.fluid} />
        })}
      </div>
    </div>
  )
}
