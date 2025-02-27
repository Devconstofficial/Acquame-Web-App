import React from "react";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const data = [
    { id: 1, date: "2025-11-03", score: 28, }
];

const AddAnxietyModal = ({ show, handleClose, onSubmit }) => {
    return (
        <Modal show={show} onHide={handleClose} centered className="p-3" dialogClassName="borderless-modal">
            <Modal.Header closeButton className="border-0">
                <Modal.Title></Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Button variant="primary" className="text-white">Add self assessment</Button>
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
                </Form>

                <Container className="mt-4">
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

                <div className="bg-light p-3 rounded-4">
                    <strong>Your total score is a guide to how severe your anxiety disorder may be: <br />
                        0 to 4 = mild anxiety <br />
                        5 to 9 = moderate anxiety <br />
                        10 to 14 = moderately severe anxiety <br />
                        15 to 21 = severe anxiety <br />
                        If your score is 10 or higher, or if you feel that anxiety is affecting your daily life, call your doctor.</strong>
                </div>





            </Modal.Body>
        </Modal>
    );
};

export default AddAnxietyModal;

