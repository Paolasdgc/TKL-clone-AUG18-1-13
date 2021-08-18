import React from "react"
import { StyledMenu } from "./menu.styled"
import { Link } from "gatsby"

import Logo from "../../../assets/svgs/global/logo"

import CadFlag from "../../../images/flags/canada-flag.png"

import UsFlag from "../../../images/flags/usa-flag.png"

const Menu = ({ open, setOpen, links }) => {
  return (
    <StyledMenu open={open}>
      <div className="social-media-container wrap">
        <div className="mobile-menu-link-container">
          {links.map((item, index) => {
            return (
              <li onClick={() => setOpen(!open)} key={item.pages.id}>
                <Link to={item.pages.uid}>{item.pages.uid}</Link>
              </li>
            )
          })}

          <li onClick={() => setOpen(!open)}>
            <Link to="/technical-brochures"> Technical Brochures</Link>
          </li>
          <li onClick={() => setOpen(!open)}>
            <Link to="/sustainability"> Sustainability</Link>
          </li>
        </div>
        <div className="number-contact">
          <span>
            <img alt="canadian flag" src={CadFlag} />
            <img alt="american-flag" src={UsFlag} />
            1-866-333-0334
          </span>
        </div>

        <Link
          onClick={() => setOpen(!open)}
          to="/design-consultation"
          className="design-consultation-redirect"
        >
          Book A consultation
        </Link>
      </div>
    </StyledMenu>
  )
}

export default Menu

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
      id="Layer_1"
      x="0"
      y="0"
      height="2em"
      width="2em"
      enableBackground="new 0 0 17 17"
      version="1.1"
      viewBox="0 0 17 17"
      xmlSpace="preserve"
    >
      <g transform="translate(-764 -234) translate(603 234)">
        <path
          id="LinkedIn"
          d="M175.5 14.5H173v-3.9c0-.9 0-2.2-1.3-2.2s-1.5 1-1.5 2.1v4h-2.5V6.4h2.4v1.1c.3-.6 1.2-1.3 2.4-1.3 2.6 0 3 1.7 3 3.9v4.4zm-10.7-9.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5c-.1.8-.7 1.5-1.5 1.5zm-1.3 9.2h2.5V6.4h-2.5v8.1zM176.7 0h-14.5c-.7 0-1.3.5-1.3 1.2v14.5c0 .7.6 1.2 1.3 1.2h14.5c.7 0 1.3-.5 1.3-1.2V1.2c0-.7-.6-1.2-1.3-1.2z"
          className="st0"
        ></path>
      </g>
    </svg>
  )
}
