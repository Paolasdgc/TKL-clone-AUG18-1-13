import React from "react"
import Lunch from "../../forms/lunchAndLearn"

export default function LunchAndLearn({ data }) {
  const { title, description } = data.primary
  return (
    <div className="contact-wrapper contact-wrap">
      <div className="container ">
        <div className="contact-information  ">
          <div
            className="title"
            dangerouslySetInnerHTML={{ __html: title.html }}
          />
          <div
            className="contact-markdown"
            dangerouslySetInnerHTML={{ __html: description.html }}
          />
        </div>
        <Lunch />
      </div>
    </div>
  )
}
