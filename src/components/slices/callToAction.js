import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

export default function CallToAction({ actions, backgroundColor }) {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="call-to-action-container"
    >
      <div className="wrap">
        {actions.map((item, index) => {
          return (
            <div className="call-to-action-home">
              <div
                className={`description ${
                  index === 1 ? "reverse-description" : ""
                }`}
              >
                <div
                  className="home-page-highlight-tkl"
                  dangerouslySetInnerHTML={{
                    __html:
                      index === 0
                        ? item.description.text
                        : item.description.text,
                  }}
                />

                {item.page_link ? (
                  <Link
                    className="button-link"
                    to={`/${item.page_link && item.page_link.uid}`}
                  >
                    {item.nav_title && item.nav_title}
                    <ArrowRight />
                  </Link>
                ) : null}
              </div>

              <div
                className={`grid-container ${
                  index === 1 ? "grid-row-reverse" : ""
                }`}
              >
                {item.image1 && (
                  <Image fluid={item.image1.localFile.childImageSharp.fluid} />
                )}

                {item.image_2 && (
                  <Image fluid={item.image_2.localFile.childImageSharp.fluid} />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      fill="white"
      height="2em"
      width="2em"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <path
        d="M508.875 248.458l-160-160c-4.167-4.167-10.917-4.167-15.083 0-4.167 4.167-4.167 10.917 0 15.083l141.792 141.792H10.667C4.771 245.333 0 250.104 0 256s4.771 10.667 10.667 10.667h464.917L333.792 408.458c-4.167 4.167-4.167 10.917 0 15.083a10.634 10.634 0 007.542 3.125c2.729 0 5.458-1.042 7.542-3.125l160-160c4.166-4.166 4.166-10.916-.001-15.083z"
        className="active-path"
        data-original="#000000"
      ></path>
    </svg>
  )
}
