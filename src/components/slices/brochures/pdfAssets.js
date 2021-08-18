import React from "react"
import Image from "gatsby-image"

export default function PdfAssets({ data }) {
  return (
    <div className="brochure-container wrap">
      {data.items.map((item, index) => {
        return (
          <a key={index} href={item.pdf_asset.url} className="brochure-link">
            <Image fluid={item.pdf_thumbnail.localFile.childImageSharp.fluid} />
            <p>{item.title_of_pdf}</p>
            <button>Download PDF</button>
          </a>
        )
      })}
    </div>
  )
}
