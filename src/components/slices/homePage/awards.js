import React from "react"
import Image from "gatsby-image"

export default function Awards({ data }) {
  return (
    <div className="home-awards">
      <div className="wrap">
        <h3>Awards & Certificates</h3>
        <div>
          <Image fluid={data.primary.image.localFile.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}
