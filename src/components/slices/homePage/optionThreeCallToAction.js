import React from "react"
import { Link } from "gatsby"

/// Write tests for this component

/// This component is unstable

export default function OptionThreeCallToAction({ data }) {
  let topics = data.items
  topics.length = 2
  return (
    <div className="topic-second">
      <div className="container ">
        {topics.map((item, index) => {
          if (index === 0) {
            return (
              <div key={index} className="first-column">
                <div>
                  <article>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.call_to_action_description.html,
                      }}
                    />

                    <a
                      className="call-to-action-nav-link"
                      style={{
                        textDecoration: "none",
                      }}
                      href={item.navigation_link}
                    >
                      {item.navigation_link_title}
                      <ArrowRight />
                    </a>
                  </article>
                </div>
              </div>
            )
          } else if (index === 1) {
            return (
              <div className="second-column">
                <div>
                  <article>
                    <div
                      style={{ color: "white" }}
                      dangerouslySetInnerHTML={{
                        __html: item.call_to_action_description.html,
                      }}
                    />

                    <a
                      href={item.navigation_link}
                      className="call-to-action-nav-link"
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      {item.navigation_link_title}
                      <ArrowRight />
                    </a>
                  </article>
                </div>
              </div>
            )
          }
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
