import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import AddAssetsModal from "../components/AddAssetModal";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaPlus, FaRegCircleUser } from "react-icons/fa6";
import { FaTrashAlt } from 'react-icons/fa';
import DeleteConfirmationModal from "../components/ConfirmDelete";
import DebtChart from "../components/DebtChart";

const details = [
    { key: "utilitybill", label: "Utility Bill", value: "Utility Bill", icon: <FaRegCircleUser size={24} /> },
    
];

function ExpenseManage() {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const handleShow = () => setModalShow(true);
    const handleClose = () => setModalShow(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted!");
        handleClose();

    };

    const handleDelete = () => {
        console.log("Item deleted!"); // Replace with your delete logic
        handleClose();
    };

    return (
        <div className="min-vh-100 d-flex flex-column">
            <Container className="mt-4">

                <Row className="g-3">
                    <Col xs={6} sm={3}>
                        <Card className="shadow rounded-4 aqua-bg-primary-2 text-white py-2 border-0">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                
                                <Card.Text className="auqa-financial-text">Quarterly Expense</Card.Text>
                                <Card.Text className="fw-bold">$1,464,000</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={6} sm={3}>
                        <Card className="shadow rounded-4 aqua-bg-pink text-white py-2 border-0">
                            <Card.Body className="d-flex flex-column justify-content-center">
                              
                                <Card.Text className="auqa-financial-text">Monthly Expense</Card.Text>
                                <Card.Text className="fw-bold">$1,464,000</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={6} sm={3}>
                        <Card className="shadow rounded-4 aqua-bg-purple text-white py-2 border-0">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                
                                <Card.Text className="auqa-financial-text">Yearly Expense</Card.Text>
                                <Card.Text className="fw-bold">$1,464,000</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="d-flex flex-row justify-content-between align-items-center mt-4 mb-3 px-2">
                    <div className="d-flex align-items-center">
                        <strong>Assets</strong>
                    </div>
                    <div>
                        <button className="btn btn-sm bg- btn-outline-info rounded-pill auqa-bg-lightprimary"><FaPlus size={13} className="" /> Add</button>
                    </div>
                </div>

                <Card className="mb-4 shadow-sm rounded-4">
                    <Card.Body>
                        <DebtChart />
                    </Card.Body>
                </Card>


                <div className="mt-4">
                    {details.map((item, index) => (
                        <Card key={index} className="mb-3 py-2 px-4 rounded-2 shadow-sm d-flex flex-row justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <div className="bg-primary text-white rounded-4 d-flex justify-content-center align-items-center me-3" style={{ width: '50px', height: '50px' }}>
                                    {item.icon}
                                </div>
                                <div className="d-flex align-items-start flex-column">
                                    <h5 className="mb-0">{item.value}  </h5>
                                    <span className='text-secondary' style={{ fontSize: "12px" }}>{item.label}</span>
                                </div>
                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                                <strong className="text-primary fw-semibold me-2">$681,000</strong>
                                <span className="bg-primary text-white rounded-circle shadow-sm d-flex justify-content-center align-items-center" style={{ width: '26px', height: '26px', cursor: "pointer" }}>
                                    <MdOutlineModeEditOutline size={18} />
                                </span>
                                <span className="aqua-bg-lightpink text-white rounded-circle shadow-sm d-flex justify-content-center align-items-center" onClick={() => setShowDeleteModal(true)} style={{ width: '26px', height: '26px', cursor: "pointer" }}>
                                    <FaTrashAlt size={15} className="aqua-pink" />
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>

            </Container>

            <DeleteConfirmationModal
                show={showDeleteModal}
                handleClose={() => setShowDeleteModal(false)}
                onDelete={handleDelete}
            />

            <AddAssetsModal show={modalShow} handleClose={handleClose} onSubmit={handleSubmit} />
        </div>
    );
}

export default ExpenseManage;
