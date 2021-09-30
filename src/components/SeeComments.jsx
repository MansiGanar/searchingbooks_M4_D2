import React from "react";
import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class SeeComments extends Component {
  state = {
    comments: [],
  };
  fetchSeeComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMmEwMDRiYjUzZDAwMTViMTlmODkiLCJpYXQiOjE2MzMwMTE1NjAsImV4cCI6MTYzNDIyMTE2MH0.YF3QHSIOjykHiDm4roIgSxRW6rvkW83ZFp6UfTVzMlo",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          comments: data,
        });
      } else {
        console.log("An error happened while fetching the data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount = async () => {
    console.log("This is the componentdidMount");
    this.fetchSeeComments();
  };

  render() {
    return (
      <div>
        <h2> Comments </h2>
        <ListGroup>
          {this.state.comments.length === 0 ? (
            <ListGroup.Item>No Comments Saved!</ListGroup.Item>
          ) : (
            this.state.comments.map((c) => (
              <ListGroup.Item key={c._id}>{c.title} </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </div>
    );
  }
}

export default SeeComments;
