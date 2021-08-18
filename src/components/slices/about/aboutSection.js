import React from "react"

export default function AboutSection({ data }) {
  const { title, description, secondary_description } = data.primary
  return (
    <div className="about-section-container">
      <div className="wrap">
        <div
          dangerouslySetInnerHTML={{ __html: title.text }}
          className="title-mark-down"
        />
        <span></span>
        <div className="description-grid">
          <div
            dangerouslySetInnerHTML={{ __html: description.html }}
            className="description-markdown"
          />
          <div>
            <div
              className="secondary-description"
              dangerouslySetInnerHTML={{ __html: secondary_description.html }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
