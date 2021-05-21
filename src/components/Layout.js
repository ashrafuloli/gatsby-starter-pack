import * as React from "react"
import "../sass/layout.scss"
import Navbar from "./Header/Navbar"
import Footer from "./Footer/Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
