import React from "react"

export default function GoogleMap() {
  return (
    <div className="googlemap-container wrap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11526.784206725877!2d-79.5548631!3d43.7584082!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe3521986e0f2575b!2sTri-Krete%20Limited!5e0!3m2!1sen!2sca!4v1587328125449!5m2!1sen!2sca"
        width="100%"
        height="450px"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  )
}
