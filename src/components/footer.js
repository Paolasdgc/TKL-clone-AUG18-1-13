import React from "react"
import Logo from "../assets/svgs/global/logo"

import LogoNoSlogan from "../assets/svgs/global/noSloganLogo"
import { Link } from "gatsby"

export default function({ data }) {
  return (
    <footer>
      <div className="wrap">
        <div className="row">
          <LogoNoSlogan passClass="fill-green" />
          <div className="social-media-container">
            <a href="https://www.instagram.com/tklgroupinc/">
              <Instagram />
            </a>
            <a href="https://www.facebook.com/tklgroupinc">
              <Facebook />
            </a>

            <a href="https://www.linkedin.com/company/10940066">
              <Linkdin />
            </a>
          </div>
        </div>
        <div className="row">
          <ul>
            {data.map((item, index) => {
              return (
                <Link key={item.pages.id} to={item.pages.uid}>
                  {item.pages.uid}
                </Link>
              )
            })}

            <Link to="/careers">Careers</Link>

            <Link to="/privacy-policy">Privacy Act</Link>
          </ul>
        </div>
        <div className="row copy-write">Copyright © 2019 TKL Group</div>
      </div>
    </footer>
  )
}

function Instagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      x="0"
      y="0"
      height="2em"
      width="2em"
      enableBackground="new 0 0 20 19"
      version="1.1"
      viewBox="0 0 20 19"
      xmlSpace="preserve"
    >
      <style>.st0 {}</style>
      <path
        d="M9.5 0c2.6 0 2.9 0 3.9.1 1 0 1.7.2 2.3.4.6.2 1.2.5 1.7 1s.9 1 1.1 1.6c.2.6.4 1.2.4 2.2 0 1 .1 1.3.1 3.8s0 2.8-.1 3.8c0 1-.2 1.6-.4 2.2-.2.6-.6 1.1-1.1 1.6-.5.5-1.1.8-1.7 1-.6.2-1.3.4-2.3.4-1 0-1.3.1-3.9.1s-2.9 0-3.9-.1c-1 0-1.7-.2-2.3-.4-.6-.2-1.2-.5-1.7-1s-.9-1-1.1-1.6c-.2-.6-.4-1.2-.4-2.2 0-1-.1-1.3-.1-3.8s0-2.8.1-3.8c0-1 .2-1.6.4-2.2.2-.6.6-1.1 1.1-1.6.5-.5 1.1-.8 1.7-1C3.9.3 4.6.1 5.6.1 6.6 0 6.9 0 9.5 0zm0 1.6c-2.5 0-2.8 0-3.8.1-1 0-1.5.2-1.8.3-.4.2-.8.4-1.1.7s-.5.6-.7 1c-.1.4-.3.8-.3 1.7 0 1-.1 1.2-.1 3.7s0 2.7.1 3.7c0 .9.2 1.4.3 1.7.2.4.4.7.7 1s.7.5 1.1.7c.3.1.8.3 1.8.3s1.3.1 3.8.1 2.8 0 3.8-.1c.9 0 1.4-.2 1.8-.3.4-.2.8-.4 1.1-.7.3-.3.5-.6.7-1 .1-.3.3-.8.3-1.7 0-1 .1-1.2.1-3.7s0-2.7-.1-3.7c0-.9-.2-1.4-.3-1.7-.2-.4-.4-.7-.7-1s-.6-.5-1.1-.7c-.3-.1-.8-.3-1.8-.3-.9-.1-1.2-.1-3.8-.1zm0 2.8c2.7 0 4.9 2.1 4.9 4.7s-2.2 4.7-4.9 4.7-4.9-2.1-4.9-4.7 2.2-4.7 4.9-4.7zm0 7.7c1.8 0 3.2-1.4 3.2-3s-1.4-3-3.2-3c-1.8 0-3.2 1.4-3.2 3s1.5 3 3.2 3zm6.2-7.9c0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6.1 1.1.5 1.1 1.1z"
        className="st0"
      ></path>
    </svg>
  )
}

function Facebook() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      x="0"
      y="0"
      height="2em"
      width="2em"
      enableBackground="new 0 0 18 17"
      version="1.1"
      viewBox="0 0 18 17"
      xmlSpace="preserve"
    >
      <path
        d="M1 16.9c-.5 0-1-.4-1-.9V1c0-.6.4-1 1-1h15.7c.5 0 1 .4 1 .9v15c0 .5-.4.9-1 .9h-4.5v-6.6h2.3l.3-2.6h-2.6V6.2c0-.7.2-1.2 1.3-1.2h1.4V2.7c-.2 0-1.1-.1-2.1-.1-2 0-3.4 1.2-3.4 3.4v1.9H7.1v2.6h2.3v6.6c0-.2-8.4-.2-8.4-.2z"
        className="st0"
      ></path>
    </svg>
  )
}

function Linkdin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 512 512"
    >
      <path d="M475.074 0H36.926C16.53 0 0 16.531 0 36.926v438.148C0 495.47 16.531 512 36.926 512h438.148C495.47 512 512 495.469 512 475.074V36.926C512 16.53 495.469 0 475.074 0zM181.61 387h-62.347V199.426h62.347zm-31.172-213.188h-.406c-20.922 0-34.453-14.402-34.453-32.402 0-18.406 13.945-32.41 35.274-32.41 21.328 0 34.453 14.004 34.859 32.41 0 18-13.531 32.403-35.274 32.403zM406.423 387h-62.34V286.652c0-25.218-9.027-42.418-31.586-42.418-17.223 0-27.48 11.602-31.988 22.801-1.649 4.008-2.051 9.61-2.051 15.215V387h-62.344s.817-169.977 0-187.574h62.344v26.558c8.285-12.78 23.11-30.96 56.188-30.96 41.02 0 71.777 26.808 71.777 84.421zm0 0"></path>
    </svg>
  )
}

function LinkResolver(link) {
  switch (link) {
    case "home":
      return
  }
}
