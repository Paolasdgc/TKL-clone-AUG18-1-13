import React from "react"

export default function HomePageFeatured({ video, description }) {
  return (
    <div className="video-wrapper">
      <div className="carousel ">
        <div className=" wrap text-center">
          <h3>
            <span>Sustainable </span>Precast Concrete
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        </div>
      </div>

      <video src={video} autoPlay playsInline loop muted />
    </div>
  )
}
