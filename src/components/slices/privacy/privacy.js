import React from "react"

export default function Privacy({ data }) {
  return (
    <div className="wrap privacy-container">
      <div
        className="markdown"
        dangerouslySetInnerHTML={{
          __html: data.primary.privacy_mark_down.html,
        }}
      />
    </div>
  )
}
