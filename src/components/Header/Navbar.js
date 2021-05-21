import React from "react"
import { Col, Container, Row } from "react-bootstrap-v5"
import logo from "../../images/logo/logo.png"
import { Link } from "gatsby"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/pro-regular-svg-icons/faUser"

const Navbar = () => {
  return (
    <div className="header-area">
      <Container>
        <Row className="align-items-center">
          <Col xl="2">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </Col>
          <Col xl="10" className="d-flex align-items-center justify-content-between">
            <div className="main-menu">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="header-btn">
              <Link to="" className="btn btn-theme">
                Sign In <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbar