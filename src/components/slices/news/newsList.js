import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

export default function NewsList({ data }) {
  return (
    <div className="all-blog-list-container wrap">
      {data.items.map(item => {
        console.log(item)
        const title = item.news_post.document[0].data.title_of_page.text
        const description =
          item.news_post.document[0].data.news_post_description.text
        return (
          <div className="blog-post">
            <div className="image-container">
              {item.news_post.document[0].data.news_featured_image.localFile ? (
                <Image
                  fluid={
                    item.news_post.document[0].data.news_featured_image
                      .localFile.childImageSharp.fluid
                  }
                />
              ) : null}
            </div>
            <div className="blog-post-description">
              <h3>{title}</h3>
              <p>{description.substring(0, 100)}...</p>

              <Link
                to={`/news/${item.news_post.uid}`}
                className="nav-news-link"
              >
                Read Post <ArrowRight />
              </Link>
            </div>
          </div>
        )
      })}
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
      height="1em"
      width="1em"
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
