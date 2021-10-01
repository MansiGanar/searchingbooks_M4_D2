import React from "react";
import { Component } from "react";

import { Card, Button, Row, Col } from "react-bootstrap";
import book from "../data/fantasy.json";
import SeeComments from "./SeeComments";

class SeeBooks extends Component {
  state = {
    selectedBook: null,
  };
  render() {
    return (
      <Row>
        <Col className="">
          <Card style={{ width: "18rem" }}>
            {book.map((bk) => (
              <Card.Body key={bk.asin}>
                <Card.Img variant="top" src={bk.img} />
                <Card.Title>{bk.title}</Card.Title>
                <Card.Text>Price: {bk.price}$</Card.Text>
                <Card.Text>ID: {bk.asin}</Card.Text>
                <Button variant="primary">Comments </Button>
              </Card.Body>
            ))}
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SeeBooks;
