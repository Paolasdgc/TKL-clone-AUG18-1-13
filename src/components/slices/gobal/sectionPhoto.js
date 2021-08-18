import React from "react"
import Image from "gatsby-image"

export default function SectionPhoto({ data }) {
  return (
    <div className="section-photo-container">
      <div>
        <Image
          fluid={
            data.primary.image &&
            data.primary.image.localFile.childImageSharp.fluid
          }
        />
      </div>
    </div>
  )
}
