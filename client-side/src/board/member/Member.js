import Axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function Member(member) {
  const myServerBaseURL = "http://localhost:3000";
  const [tasksMember, setTasksMember] = useState([]);

  const loadTAsks = useCallback(async () => {
    const res = await Axios.get(`${myServerBaseURL}/tasks/Doing/${member.id}`);

    setTasksMember(res.data);
    console.log("res.data", res.data);

    console.log("taskMember", tasksMember);
  }, []);

  useEffect(() => {
    loadTAsks();
  }, [loadTAsks]);

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
          {tasksMember.map((task) => {
            <ListGroupItem key={task._id}>{task.name}a</ListGroupItem>;
          })}
          {/* <ListGroupItem>server</ListGroupItem>
          <ListGroupItem>DB</ListGroupItem>
          <ListGroupItem>install boostrap</ListGroupItem> */}
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">הוסף משימה &#43;</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
