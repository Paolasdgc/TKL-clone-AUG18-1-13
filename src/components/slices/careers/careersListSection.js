import React from "react"

export default function CareersListSection({ data }) {
  return (
    <div className="careers-list-section">
      <div className="wrap">
        <div className="container">
          {data.items.map((item, index) => {
            return (
              <article key={index}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.description.html,
                  }}
                />
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
