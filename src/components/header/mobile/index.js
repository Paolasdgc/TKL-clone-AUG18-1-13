import React from "react"
import Burger from "../hamburger/index"
import Menu from "../menu/index"

function Header({ open, setOpen, buttonColor = "white", links }) {
  return (
    <div className="mobile-hamburger-container">
      <Burger buttonColor={buttonColor} open={open} setOpen={setOpen} />
      <Menu links={links} open={open} setOpen={setOpen} />
    </div>
  )
}

export default Header
