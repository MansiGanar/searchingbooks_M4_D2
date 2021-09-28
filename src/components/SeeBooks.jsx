import React from "react";
import { Component } from "react";

import { Card, Button, Container, Row, Col } from "react-bootstrap";
import book from "../data/fantasy.json";

class SeeBooks extends Component {
  state = {
    selectedBook: null,
  };
  render() {
    return (
      <Container>
        <Row>
          <Col xs={1} md={2} className="g-4">
            <Card style={{ width: "18rem" }}>
              {book.map((bk) => (
                <Card.Body key={bk.asin}>
                  <Card.Img variant="top" src={bk.img} />
                  <Card.Title>{bk.title}</Card.Title>
                  <Card.Text>Price: {bk.price}$</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SeeBooks;
