import React from "react";
import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddComments extends Component {
  state = {
    addComments: {
      comment: " ",
      rate: "",
      elementId: "",
    },
  };
  handleInput = (propertyName, value) => {
    this.setState({
      addComments: {
        ...this.state.addComments,
        [propertyName]: value,
      },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.addComments);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.addComments),
          Headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("Reservation successfully saved!");
        this.setState({
          comment: " ",
          rate: "",
          elementId: "",
        });
      } else {
        alert("Something Went Wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };
  isFormComplete = () => {
    return (
      this.state.addComments.name.length > 0 &&
      this.state.addComments.phone.length > 0 &&
      this.state.addComments.dateTime.length > 0
    );
  };
  render() {
    return (
      <>
        <h2>Comment here</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Your name</Form.Label>
            <Form.Control
              // onChange={
              //     // this will happen every time I input a keystroke
              //     e => this.setState({
              //         reservation: {
              //             ...this.state.reservation,
              //             // with the ... your making a copy of all the properties
              //             // already existing into this.state.reservation
              //             name: e.target.value
              //             // and then you're just overwriting ONE property
              //         }
              //     })}
              onChange={(e) => this.handleInput("name", e.target.value)}
              value={this.state.reservation.name}
              type="text"
              placeholder="Enter your name here"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone here"
              value={this.state.reservation.phone}
              onChange={(e) => this.handleInput("phone", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>How many people?</Form.Label>
            <Form.Control
              as="select"
              value={this.state.reservation.numberOfPeople}
              onChange={(e) =>
                this.handleInput("numberOfPeople", e.target.value)
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check
              checked={this.state.reservation.smoking}
              type="checkbox"
              onChange={(e) => this.handleInput("smoking", e.target.checked)}
              label="Do you smoke?"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date and Time</Form.Label>
            <Form.Control
              value={this.state.reservation.dateTime}
              onChange={(e) => this.handleInput("dateTime", e.target.value)}
              type="datetime-local"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Any special request?</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              onChange={(e) =>
                this.handleInput("specialRequests", e.target.value)
              }
              value={this.state.reservation.specialRequests}
              type="text"
              placeholder="Enter your special requests here"
            />
          </Form.Group>
          <Button
            disabled={!this.isFormComplete()}
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComments;
