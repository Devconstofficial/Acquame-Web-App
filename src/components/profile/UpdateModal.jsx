import React from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const UpdateModal = ({ show, handleClose, field, value, onUpdate }) => {
    const [updatedValue, setUpdatedValue] = React.useState(value);

    // Define different input types based on the field
  const renderInputField = () => {
    if (field === "gender") {
      return (
        <Form.Select value={updatedValue} onChange={(e) => setUpdatedValue(e.target.value)} required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Select>
      );
    } else if (field === "dob") {
      return (
        <Form.Control
          type="date"
          value={updatedValue}
          onChange={(e) => setUpdatedValue(e.target.value)}
          required
        />
      );
    } else {
      return (
        <Form.Control
          type="text"
          value={updatedValue}
          onChange={(e) => setUpdatedValue(e.target.value)}
          required
        />
      );
    }
  };


    return (
        <Modal show={show} onHide={handleClose} centered dialogClassName="px-4" contentClassName="p-2">
            <Modal.Header closeButton className="border-0 ">
                <Modal.Title></Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form >
                    <Form.Group className="mb-4">
                        <Form.Label>{field && field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                        {renderInputField()}
                    </Form.Group>
                    
                    <Row className="mt-2">
                        <Col className="text-start">
                            <Button variant="btn btn-outline-dark" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Col>
                        <Col className="text-end">
                            <Button type="submit" variant="primary" className="text-white px-3" onClick={() => onUpdate(field, updatedValue)}>
                                Update
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateModal;
