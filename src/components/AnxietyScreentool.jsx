import React from "react";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const data = [
    { id: 1, text: "Feeling Nervous, anxious or on edge", val1: 0, val2: 0, val3: 0, val4: 0 },
    { id: 2, text: "Not being able to stop or different things", val1: 0, val2: 0, val3: 0, val4: 0 },
    { id: 3, text: "Worrying too much about different things", val1: 0, val2: 0, val3: 0, val4: 0 },
    { id: 4, text: "Trouble relaxing", val1: 0, val2: 0, val3: 0, val4: 0 },
    { id: 5, text: "Being so restless that it’s hard to sit still", val1: 0, val2: 0, val3: 0, val4: 0 },
    { id: 6, text: "Total score (add column total together)" }
];

const AnxietyScreenTool = ({ show, handleClose }) => {
    return (
        <Modal show={show} size="lg" onHide={handleClose} centered className="p-3" dialogClassName="borderless-modal">
            <Modal.Header closeButton className="border-0">
                <Modal.Title></Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="d-flex justify-content-center mt-4 mb-4">
                    <strong >Anxiety Assessment GAD-7 screening tool </strong>
                </div>

                <Container className="mt-4">
                    <div className="table-responsive">
                        <table className="custom-table table table-striped table-hover fs-6">

                            <tr>
                                <th className="rounded-start">#</th> {/* First column rounded */}
                                <th>Over the last 2 week, how often have you been bothered by the following problems</th>
                                <th>Not at all </th>
                                <th>Several days </th>
                                <th>More than half the days </th>
                                <th className="rounded-end">Nearly every day</th>

                            </tr>

                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id} className="cols-border">
                                        <td>{index + 1}</td>
                                        <td>{item.text}</td>
                                        <td>{item.val1}</td>
                                        <td>{item.val2}</td>
                                        <td>{item.val3}</td>
                                        <td>{item.val4}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>

                <Row className="mb-3 mt-3">
                    <Col md={6}>
                        <strong>Total Score </strong>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Control type="text" required />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col className="text-start">
                        <Button variant="btn btn-outline-dark" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Col>
                    <Col className="text-end">
                        <Button type="submit" variant="primary" className="text-white">
                            Save
                        </Button>
                    </Col>
                </Row>

            </Modal.Body>
        </Modal>
    );
};

export default AnxietyScreenTool;

