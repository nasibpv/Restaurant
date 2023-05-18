import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function OperatingTime({TimeData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>operating_hours</Modal.Title>
        </Modal.Header>
        <Modal.Body><ListGroup>
      <ListGroup.Item>Monday : {TimeData.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {TimeData.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday : {TimeData.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday : {TimeData.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday : {TimeData.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday : {TimeData.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday : {TimeData.Sunday}</ListGroup.Item>

    </ListGroup></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default OperatingTime