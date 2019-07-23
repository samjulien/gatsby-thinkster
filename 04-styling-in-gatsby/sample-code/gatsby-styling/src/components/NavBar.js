import React from "react"
import { Link } from "gatsby"
import navBarStyles from "./navbar.module.css"

export default () => (
  <div>
    <Link className={navBarStyles.navLink} to="/">
      Home
    </Link>{" "}
    |{" "}
    <Link className={navBarStyles.navLink} to="/about">
      About
    </Link>
  </div>
)
