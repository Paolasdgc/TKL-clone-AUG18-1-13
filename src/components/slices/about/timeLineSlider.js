import React, { Component } from "react"
import Image from "gatsby-image"
import Slider from "react-slick"
import MediaQuery from "react-responsive"

import BackgroundImage from "gatsby-background-image"

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    const settings = {
      dots: false,
      infinite: false,
      autoplay: false,
      speed: 500,
      slidesToShow: 2,
      arrows: false,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
      ],
    }
    return (
      <div className="timeline">
        <div className="slider-wrap">
          <div className="container">
            <div className="slider-container">
              <Slider ref={c => (this.slider = c)} {...settings}>
                <div className="slider-topic-copy">
                  <h1>our history </h1>
                  <p>
                    Since 1977, we’ve been growing from a small family-owned
                    business to a recognized leader in the precast concrete
                    industry.
                  </p>
                </div>
                {this.props.data.items.map((item, index) => {
                  return (
                    <MediaQuery maxWidth={900}>
                      {matches =>
                        matches ? (
                          <div
                            style={{ marginRight: "1em" }}
                            key={index}
                            className="image-grid"
                          >
                            <p className="image-slider-dateline">
                              {item.timeline_date}
                            </p>
                            <div
                              className="mobile-grid-slider"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <div
                                style={{
                                  minHeight: "150px",
                                  order: "2",
                                  maxHeight: "150px",
                                }}
                                className="slider-copy"
                              >
                                {item.timeline_description}
                              </div>
                              <div
                                style={{
                                  height: "100%",
                                  maxHeight: "100%",
                                }}
                              >
                                {" "}
                                <BackgroundImage
                                  style={{
                                    maxHeight: "200px",
                                    minHeight: "200px",
                                  }}
                                  className="background-image-slider"
                                  fluid={
                                    item.timeline_image.localFile
                                      .childImageSharp.fluid
                                  }
                                ></BackgroundImage>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div key={index} className="image-grid">
                            <p className="image-slider-dateline">
                              {item.timeline_date}
                            </p>
                            <div
                              className="mobile-grid-slider"
                              style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                              }}
                            >
                              <div className="slider-copy">
                                {item.timeline_description}
                              </div>
                              <BackgroundImage
                                className="background-image-slider"
                                style={{
                                  maxHeight: "250px",
                                  minHeight: "250px",
                                }}
                                fluid={
                                  item.timeline_image.localFile.childImageSharp
                                    .fluid
                                }
                              ></BackgroundImage>
                            </div>
                          </div>
                        )
                      }
                    </MediaQuery>

                    // <div key={index} className="image-grid">
                    //   {/* <p className="image-slider-dateline">
                    //     {item.timeline_date}
                    //   </p> */}
                    //   <div
                    //     className="mobile-grid-slider"
                    //     style={{
                    //       display: "grid",
                    //       gridTemplateColumns: "1fr 1fr",
                    //     }}
                    //   >
                    //     <div className="slider-copy">
                    //       {item.timeline_description}
                    //     </div>
                    //     <BackgroundImage
                    //       className="background-image-slider"
                    //       style={{
                    //         maxHeight: "250px",
                    //         minHeight: "250px",
                    //       }}
                    //       fluid={
                    //         item.timeline_image.localFile.childImageSharp.fluid
                    //       }
                    //     ></BackgroundImage>
                    //   </div>
                    // </div>
                  )
                })}
              </Slider>
            </div>
            <div className="arrow-wrapper">
              <div onClick={e => this.previous()}>
                <ArrowLeft />
              </div>
              <div onClick={e => this.next()}>
                <ArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function ArrowLeft() {
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
        transform="rotate(180 256 256)"
      ></path>
    </svg>
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

{
  /* <div className="layer">
                          <span>{item.timeline_date}</span>
                        </div> */
}
