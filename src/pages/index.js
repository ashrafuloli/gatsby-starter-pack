import * as React from "react"
import Layout from "../components/Layout"
import HeadMeta from "../components/Header/HeadMeta"
import { Accordion, Card } from "react-bootstrap-v5"

const IndexPage = () => (
  <Layout>
    <HeadMeta title="Home" />
    <h1>Hi people</h1>
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
            Click me!
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  </Layout>
)

export default IndexPage
