import React from "react"
import styled from "styled-components"
import Header from "../components/Header"

const Container = styled.div`
  margin: 3rem auto;
  max-width: 650px;
  padding: 0 1rem;
`

export default ({ children, noHeader }) => (
  <Container>
    {!noHeader && <Header />}
    {children}
  </Container>
)
