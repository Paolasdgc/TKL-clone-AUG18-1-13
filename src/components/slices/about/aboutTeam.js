import React from "react"
import Image from "gatsby-image"

export default function AboutTeam({ data }) {
  return (
    <div className="about-team-container">
      <div className="wrap">
        <h3 className="title">Executive Team</h3>
        <div className="team-list">
          {data.items.map((item, index) => {
            return (
              <div key={index} className="member">
                <div className="image-team">
                  <Image fluid={item.image.localFile.childImageSharp.fluid} />
                  <span className="name">{item.name}</span>
                  <span className="position">{item.position}</span>
                </div>
                <div className="description">
                  <div
                    dangerouslySetInnerHTML={{ __html: item.biography.html }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
