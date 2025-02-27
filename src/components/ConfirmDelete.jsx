import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const DeleteConfirmationModal = ({ show, handleClose, onDelete }) => {
  return (
    <Modal show={show} onHide={handleClose} centered dialogClassName="borderless-modal p-5" contentClassName="p-2">
      <Modal.Header closeButton className="border-0">
        <Modal.Title></Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-center p-3">
        {/* Delete Icon */}
        <div className="text-primary mb-3">
          <FaTrashAlt size={50} />
        </div>

        <p className="fw-medium fs-3">
            Confirm Delete?
        </p>
        <p className="text-muted">
          This action is irreversible and will permanently remove the selected record from the system.
        </p>

        <Row>
            <Col className="text-start">
              <Button variant="btn btn-outline-dark py-2" onClick={handleClose}>
                Cancel
              </Button>
            </Col>
            <Col className="text-end">
              <Button type="submit" variant="primary" className="text-white px-2 text-wrap py-2" onClick={onDelete}>
                Confirm Delete
              </Button>
            </Col>
          </Row>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteConfirmationModal;
