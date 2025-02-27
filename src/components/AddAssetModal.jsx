import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

const AddAssetsModal = ({ show, handleClose, onSubmit }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="p-3" dialogClassName="borderless-modal">
    <Modal.Header closeButton className="border-0">
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={onSubmit}>
        
          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select required>
              <option value="Financial" >Financial</option>
              <option value="Personal">Personal</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Vehicles">Vehicles</option>
              
            </Form.Select>
          </Form.Group>

        
          <Form.Group className="mb-3">
            <Form.Label>Asset Value</Form.Label>
            <Form.Control type="number" placeholder="Enter asset value" required />
          </Form.Group>

          
          <Form.Group className="mb-3">
            <Form.Label>Asset Type</Form.Label>
            <Form.Select required>
              <option value="">Select Type</option>
              <option value="Liquid">Liquid</option>
              <option value="Fixed">Fixed</option>
            </Form.Select>
          </Form.Group>

         
          <Form.Group className="mb-3">
            <Form.Label>Institution Name</Form.Label>
            <Form.Control type="text" placeholder="Enter institution name" required />
          </Form.Group>

 
          <Form.Group className="mb-3">
            <Form.Label>Additional Notes (Optional)</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Additional details..." />
          </Form.Group>

         
          <Row>
            <Col className="text-start">
              <Button variant="btn btn-outline-dark" onClick={handleClose}>
                Cancel
              </Button>
            </Col>
            <Col className="text-end">
              <Button type="submit" variant="primary" className="text-white">
                Add Asset
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddAssetsModal;

