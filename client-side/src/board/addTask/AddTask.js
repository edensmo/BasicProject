import Axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import "./AddTask.css";

const myServerBaseURL = "http://localhost:3000";

export default function AddTask() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [memberId, setMemberId] = useState("");
  const [members, setMembers] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const nameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const descChange = useCallback((event) => {
    setDescription(event.target.value);
  }, []);

  const statusChange = useCallback((event) => {
    setStatus(event.target.value);
  }, []);

  const memberIdChange = useCallback((event) => {
    setMemberId(event.target.value);
  }, []);

  //Get all members
  const GetAllMembers = useCallback(async () => {
    const res = await Axios.get(`${myServerBaseURL}/members`);
    console.log(res);
    setMembers(res.data);
  }, []);

  useEffect(() => {
    GetAllMembers();
  }, []);

  const addTask = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      description: description,
      status: status,
      memberId: memberId,
    };
    console.log(data);

    await Axios.post(`${myServerBaseURL}/tasks`, data)
      .then((result) => {
        console.log("result", result);
      })
      .catch((err) => {
        console.log(err);
      });

    setStatus("");
    setName("");
    setDescription("");
    handleClose();
    window.location.reload();
  };

  return (
    <>
      <h1 className="addTask" onClick={handleShow}>
        הוסף משימה &#43;
      </h1>

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header className="modal-header">
          <Modal.Title>משימה חדשה</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-task">
            <Form.Group className="form-group">
              <Form.Label>נושא</Form.Label>
              <Form.Control
                className="input-text"
                placeholder="נושא"
                onChange={nameChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>תיאור</Form.Label>
              <Form.Control
                className="input-text"
                as="textarea"
                placeholder="תיאור"
                onChange={descChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>סטטוס</Form.Label>
              <Form.Control
                className="input-text"
                placeholder="סטטוס"
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
                value={memberId}
                onChange={memberIdChange}
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
        <Modal.Footer className="modal-flooter">
          <Button className="btn" variant="secondary" onClick={handleClose}>
            ביטול
          </Button>
          <Button className="btn" variant="primary" onClick={addTask}>
            שמור
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//   render(<Example />);
