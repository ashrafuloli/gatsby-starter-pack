import React from "react"
import { Col, Container, Row } from "react-bootstrap-v5"

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="footer_bottom">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl={6} lg={6} md={6}>
              <div className="copyright">
                <p>© {new Date().getFullYear()} All Copyright Reserved. Design by <span>Theme Iconic</span></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Footer