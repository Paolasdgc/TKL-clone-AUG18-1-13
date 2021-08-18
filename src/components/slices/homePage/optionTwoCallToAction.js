import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const doesImageExist = embed => {
  try {
    return embed.localFile.childImageSharp.fluid
  } catch (e) {
    return false
  }
}

export default function OptionTwoCallToAction({
  data,
  backgroundColor,
  color,
  greenTextOnGreen,
}) {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className="call-to-action-two"
    >
      <div className="wrap ">
        <article>
          <div style={{ color: color }} className="description">
            <div
              className="copy"
              dangerouslySetInnerHTML={{
                __html: data.primary.card_description.html,
              }}
            />
            {data.primary.navigation_link ? (
              <div className="nav-wrapper">
                <Link
                  className={`${
                    greenTextOnGreen ? "normal-green" : "normal-color"
                  }`}
                  to={`/${data.primary.page_link &&
                    data.primary.page_link.uid}`}
                >
                  {data.primary.navigation_link} <ArrowRight />
                </Link>
              </div>
            ) : null}
          </div>
          <div
            style={{ display: data.items.length === 1 ? "block" : "grid" }}
            className="image-grid"
          >
            {data.items.map((item, index) => {
              if (doesImageExist(item.image)) {
                return <Image key={index} fluid={doesImageExist(item.image)} />
              }
              return null
            })}
          </div>
        </article>
      </div>
    </div>
  )
}

function ArrowRight({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      fill={color}
      height="1.5em"
      width="1.5em"
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

function Arrow() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 64 64">
      <path d="M37.379 12.552a2 2 0 10-2.758 2.897L49.963 30H10a2 2 0 000 4h39.899L34.621 48.552a2 2 0 102.758 2.896l17.449-16.62C55.584 34.073 56 33.069 56 32s-.416-2.073-1.207-2.862z"></path>
    </svg>
  )
}
