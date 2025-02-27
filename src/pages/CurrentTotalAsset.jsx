import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import AddAssetsModal from "../components/AddAssetModal";
import { LiaCoinsSolid } from "react-icons/lia";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { FaPlus, FaRegCircleUser } from "react-icons/fa6";
import {  FaTrashAlt } from 'react-icons/fa';
import DeleteConfirmationModal from "../components/ConfirmDelete";

import { FaHome, FaUniversity, FaCreditCard, FaPassport } from "react-icons/fa";
import CurrentAssetChart from "../components/CurrentAssetChart";

const details = [
    { key: "mortgage", label: "Property 1", value: "Mortgage", icon: <FaHome size={24} /> },   
    { key: "loan", label: "Property 1", value: "Loan", icon: <FaUniversity size={24} /> },    
    { key: "creditcard", label: "Property 1", value: "Credit Card", icon: <FaCreditCard size={24} /> },
    { key: "visa", label: "Visa", value: "Others", icon: <FaPassport size={24} /> },
];

function CurrentTotalAsset() {
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
                        <Card className="shadow rounded-4 bg-primary text-white py-2 border-0">
                            <Card.Body className="d-flex flex-column justify-content-center">
                                <LiaCoinsSolid size={30} className="mb-2" />
                                <Card.Text className="auqa-financial-text">Total Asset</Card.Text>
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
                        <CurrentAssetChart />
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

export default CurrentTotalAsset;
