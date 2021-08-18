import React from "react"
import DesignForm from "../../forms/contactForm"

export default function DesignConsultationForm({ data }) {
  const { title, description } = data.primary
  return (
    <div className="contact-wrapper">
      <div className="container contact-wrap">
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
        <DesignForm />
      </div>
    </div>
  )
}
