import React from "react"
import Header from "../components/Header"

export default ({ children, noHeader }) => (
  <div>
    {!noHeader && <Header />}
    {children}
  </div>
)
