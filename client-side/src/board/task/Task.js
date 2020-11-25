import React from "react";
import { Card } from "react-bootstrap";
import "./Task.css";

export default function Task(props) {
  return (
    <div className="box-tasks">
      <Card bg="gray" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
