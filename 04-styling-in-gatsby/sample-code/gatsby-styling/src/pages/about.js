import React from "react"
import styled, { css } from "styled-components"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"

const Button = styled.button`
  margin-top: 10px;
  background: white;
  color: black;
  font-family: Verdana, Helvetica, sans-serif;
  border-radius: 5px;
  font-size: 1.2rem;

  ${props =>
    props.primary &&
    css`
      background: purple;
      color: white;
    `}
`

export default () => (
  <Layout noHeader>
    <h1>About Gatsby</h1>
    <NavBar />
    <Button>Hi!</Button>
    <Button primary>Hi!</Button>
  </Layout>
)
