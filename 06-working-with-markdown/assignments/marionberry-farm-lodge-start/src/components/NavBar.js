import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = styled(props => <Link {...props} />)`
  font-family: Verdana, Helvetica, sans-serif;
  font-size: 1.2rem;
  padding: 0.2rem;
  text-decoration: none;
`

export default () => (
  <div>
    <NavLink to="/">Home</NavLink> | <NavLink to="/about">About</NavLink>
  </div>
)
