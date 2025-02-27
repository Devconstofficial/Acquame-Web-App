import React from "react";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const data = [
    { id: 1, date: "2025-11-03", score: 28, }
];

const AddJournalModal = ({ show, handleClose, onSubmit }) => {
    return (
        <Modal show={show} onHide={handleClose} centered className="p-3" dialogClassName="borderless-modal">
            <Modal.Header closeButton className="border-0">
                <Modal.Title></Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="d-flex justify-content-end">
                    <div className="rounded-circle bg-white d-flex justify-content-center align-items-center border" style={{ width: "35px", height: "35px" }}>
                        <FaPlus size={21} className="text-primary" />
                    </div>
                </div>
                <Form onSubmit={onSubmit}>

                    <Row className="mb-3 mt-3">
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>From</Form.Label>
                                <Form.Control type="date" required />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>To</Form.Label>
                                <Form.Control type="date" required />
                            </Form.Group>
                        </Col>
                        <Col md={4} className="d-flex align-items-end">
                            <Button variant="primary" type="submit" className="w-100 text-white">
                                Search
                            </Button>
                        </Col>
                    </Row>

                    <Row className="mb-3 mt-3">
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label>Search </Form.Label>
                                <Form.Control type="text" placeholder="Keyword" required />
                            </Form.Group>
                        </Col>
                        
                        <Col md={4} className="d-flex align-items-end">
                            <Button variant="primary" type="submit" className="w-100 text-white">
                                Search
                            </Button>
                        </Col>
                    </Row>
                </Form>

                <Container className="mt-5">
                    <div className="table-responsive">
                        <table className="custom-table table table-striped table-hover">

                            <tr>
                                <th className="rounded-start">#</th> {/* First column rounded */}
                                <th>Date</th>
                                <th className="rounded-end">Score</th>

                            </tr>

                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{new Date(item.date).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}</td>
                                        <td>{item.score}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>

                <div className="d-flex justify-content-between align-items-center mt-3 mb-2 px-5">
                    <Button variant="" className="btn btn-outline-primary rounded-2">
                        <FaArrowLeft />
                    </Button>
                    <span className="fw-bold">Page 1 of 10</span>
                    <Button variant="" className="btn btn-outline-primary   rounded-2">
                        <FaArrowRight />
                    </Button>
                </div>
                <div className="d-flex justify-content-center mt-4 mb-4">
                    <button className="btn btn-primary text-white ">What your total score means</button>
                </div>

                <Row className="mb-3 mt-3">
                    <Col md={6}>
                        <strong>Date </strong>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Control type="text" required />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>Journal</Form.Label>
                    <Form.Control as="textarea" value={"Journal Journal.."} rows={3} placeholder="Additional details..." />
                </Form.Group>

            </Modal.Body>
        </Modal>
    );
};

export default AddJournalModal;

