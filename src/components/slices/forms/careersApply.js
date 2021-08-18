import React from "react"
import Careers from "../../forms/careersApply"

export default function CareersApply({ data }) {
  return (
    <div className="careers-apply-container">
      <div className="container wrap">
        <div className="apply-description">
          <div className="apply-description-title">
            <h3>Apply Today</h3>
          </div>
          <div className="apply-description-copy">
            <p>
              If you're a hard worker who's looking for an oppurtunity to build
              the sustatinable construction industry of the future, we want ot
              hear from you!
            </p>
          </div>
        </div>
        <Careers />
      </div>
    </div>
  )
}
