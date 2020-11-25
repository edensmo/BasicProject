import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "./Member.css";

export default function Member(member) {
  console.log(member);
  return (
    <div>
      <Card style={{ width: "18rem", marginRight: "1" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>{member.name}</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>server</ListGroupItem>
          <ListGroupItem>DB</ListGroupItem>
          <ListGroupItem>install boostrap</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
