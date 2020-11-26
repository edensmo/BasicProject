import React, { useState } from "react";
import { Button, Form, FormControl, InputGroup, Modal } from "react-bootstrap";
import "./AddTask.css";

export default function AddTask() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h1 className="addTask" onClick={handleShow}>
        הוסף משימה &#43;
      </h1>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>משימה חדשה</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="form-task">
            <Form.Group className="form-group">
              <Form.Label>נושא</Form.Label>
              <Form.Control className="input-text" placeholder="נושא" />
            </Form.Group>

            <Form.Group>
              <Form.Label>תיאור</Form.Label>
              <Form.Control
                className="input-text"
                as="textarea"
                placeholder="תיאור"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>סטטוס</Form.Label>
              <Form.Control className="input-text" placeholder="סטטוס" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//   render(<Example />);
