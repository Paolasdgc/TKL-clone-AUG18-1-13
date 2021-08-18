import React from "react"
import ContactForm from "../../../components/forms/contactForm"

export default function ContactFormCall({ data }) {
  const { html } = data.primary.description
  return (
    <div className="general-contact-page-wrapper">
      <div className="container wrap">
        <div className="questions-information-container">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <ContactForm copy={html} />
      </div>
    </div>
  )
}
