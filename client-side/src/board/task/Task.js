import Axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import "./Task.css";

export default function Task(task) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState(task.name);
  const [desc, setDesc] = useState(task.desc);
  const [status, setStatus] = useState(task.status);
  const [memberId, setMemberId] = useState(task.memberId);
  const [members, setMembers] = useState([]);
  const myServerURL = "http://localhost:3000";

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const descChange = useCallback((event) => {
    setDesc(event.target.value);
  }, []);

  const statusChange = useCallback((event) => {
    setStatus(event.target.value);
  }, []);

  const memberIdChange = useCallback((event) => {
    setMemberId(event.target.value);
  }, []);

  //Get all members
  const GetAllMembers = useCallback(async () => {
    const res = await Axios.get(`${myServerURL}/members`);
    // console.log(res);
    setMembers(res.data);
  }, []);

  useEffect(() => {
    GetAllMembers();
  }, []);

  const update = async () => {
    const data = {
      id: task.id,
      name: name,
      description: desc,
      status: status,
      memberId: memberId,
    };

    await Axios.post(`${myServerURL}/tasks/update`, data)
      .then()
      .catch((err) => {
        console.log(err);
      });
    handleClose();
    window.location.reload();
  };

  return (
    <div className="box-tasks">
      <Card
        className="card-task"
        bg="gray"
        style={{ width: "18rem" }}
        onClick={handleShow}
      >
        <Card.Body>
          <Card.Text>{task.name}</Card.Text>
        </Card.Body>
      </Card>
      {/* <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button> */}

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>{task.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-task">
            <Form.Group className="form-group">
              <Form.Label>נושא</Form.Label>
              <Form.Control
                className="input-text"
                value={name}
                onChange={nameChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>תיאור</Form.Label>
              <Form.Control
                className="input-text"
                as="textarea"
                value={desc}
                onChange={descChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>סטטוס</Form.Label>
              <Form.Control
                className="input-text"
                value={status}
                onChange={statusChange}
                as="select"
              >
                <option>בחר</option>
                <option>ToDo</option>
                <option>Doing</option>
                <option>DONE</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>באחריות:</Form.Label>
              <Form.Control
                className="input-text"
                onChange={memberIdChange}
                value={memberId}
                as="select"
              >
                <option>בחר</option>
                {members.map((member) => {
                  return <option key={member._id}>{member._id}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            סגור
          </Button>
          <Button variant="primary" onClick={update}>
            שמור שינויים
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
