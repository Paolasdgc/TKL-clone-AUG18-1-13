import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

export default function({ data }) {
  return (
    <div className="all-news-featured-header">
      <BackgroundImage
        style={{
          backgroundColor: "black",
          width: "100%",
          maxHeight: "60vh",
          minHeight: "60vh",
        }}
        fluid={
          data.primary.featured_news_post.document[0].data.news_featured_image
            .localFile.childImageSharp.fluid
        }
      >
        <div className="carousel-container">
          <div className=" all-news-background-carousel wrap">
            <h3>
              {
                data.primary.featured_news_post.document[0].data.title_of_page
                  .text
              }
            </h3>
            <p>
              {data.primary.featured_news_post.document[0].data.news_post_description.text.substring(
                0,
                100
              )}{" "}
              ...
            </p>

            <Link to={`/news/${data.primary.featured_news_post.uid}`}>
              READ POST <ArrowRight />
            </Link>
          </div>
        </div>
      </BackgroundImage>
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
