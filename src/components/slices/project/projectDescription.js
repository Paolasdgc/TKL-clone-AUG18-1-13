import React from "react"

export default function ProjectDescription({ data }) {
  const {
    project,
    developer_owner,
    archtiect,
    contractor,
    precast_finish,
  } = data.primary
  return (
    <div className="project-description">
      <div className="wrap">
        <div className="container">
          <h3>{project}</h3>

          <div className="description-grid">
            {developer_owner && (
              <div>
                <p className="bold">{"Developer / Owner"}</p>
                <p>{developer_owner}</p>
              </div>
            )}
            {archtiect && (
              <div>
                <p className="bold">{"Architect"}</p>
                <p>{archtiect}</p>
              </div>
            )}
            {contractor && (
              <div>
                <p className="bold">{"Contractor"}</p>
                <p>{contractor}</p>
              </div>
            )}
            {precast_finish && (
              <div>
                <p className="bold">{"Precast Finish"}</p>
                <p>{precast_finish}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
