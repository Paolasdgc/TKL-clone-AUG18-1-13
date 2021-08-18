import React from "react"

export default function VideoSection({ data }) {
  const { video_section_markdown, video_section_file } = data.primary
  return (
    <div className="video-section-wrapper ">
      <div className="video-section-container wrap">
        <video
          autoPlay
          playsInline
          loop
          muted
          src={video_section_file.url}
          className="services-video-component"
        />
        <div
          dangerouslySetInnerHTML={{
            __html: video_section_markdown.html,
          }}
          className="video-section-copy"
        />
      </div>
    </div>
  )
}
