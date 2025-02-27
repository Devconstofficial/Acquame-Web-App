import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import AddAssetsModal from "../components/AddAssetModal";
import { LiaCoinsSolid } from "react-icons/lia";
import { BiSolidDollarCircle } from "react-icons/bi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { Link } from "react-router-dom";


const items = [
  { title: "Anxiety Check", bgClass: "aqua-bg-lightpurple", imgLogo: "Anxietycheck.png" },
  { title: "Relaxation Exercises", bgClass: "aqua-bg-pink", imgLogo: "RelaxationExersice.png" },
  { title: "Journal", bgClass: "aqua-bg-purple", imgLogo: "Journal.png" },
  { title: "Therapy Note", bgClass: "aqua-bg-green", imgLogo: "TheropyNote.png" },
  { title: "Mood Tracker", bgClass: "aqua-bg-lightgreen", imgLogo: "Moodtracker.png" },
];


function Financial() {
  const [modalShow, setModalShow] = useState(false);

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    handleClose();

  };

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Container className="mt-4">

        <Card className="mb-4 shadow rounded-4 bg-primary text-white position-relative aqua-financial-card border-0" >
          <Card.Body className="p-1 d-flex">
            <div className="d-flex flex-row align-items-center justify-content-between auqa-financial">
              <div className="text-section text-start p-2 auqa-financial-text">
                <Card.Text className="ps-1">A clear and complete view of your overall well-being, would empower you to make informed decisions and achieve balance in your life.</Card.Text>
              </div>

              <img
                src="assets/images/financialCardimg.png"
                alt="Logo"
                className="financialImg " />
            </div>
          </Card.Body>
        </Card>

        <Row className="g-3">
          <Col xs={6} sm={4}>
            <Link to="/currenttotalasset" className="text-decoration-none" >
              <Card className="shadow rounded-4 bg-primary text-white py-2 border-0">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <LiaCoinsSolid size={30} className="mb-2" />
                  <Card.Text className="auqa-financial-text">Total Asset</Card.Text>
                  <Card.Text className="fw-bold">$1,464,000</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col xs={6} sm={4}>
            <Link to="/financialtotal" className="text-decoration-none" >
              <Card className="shadow rounded-4 aqua-bg-pink text-white py-2 border-0">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <FaHandHoldingUsd size={30} className="mb-2" />
                  <Card.Text className="auqa-financial-text">Total Debt</Card.Text>
                  <Card.Text className="fw-bold">$1,464,000</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={12} sm={4}>
            <Link to="/expensemanagement" className="text-decoration-none" >
              <Card className="shadow rounded-4 aqua-bg-purple text-white py-2 border-0">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <BiSolidDollarCircle size={30} className="mb-2" />
                  <Card.Text className="auqa-financial-text">Fixed Expense (Monthly)</Card.Text>
                  <Card.Text className="fw-bold">$1,464,000</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

      </Container>

      <div className="d-flex justify-content-center mt-auto mb-4">
        <button className="btn btn-primary px-5 py-2 text-white improve-btn" onClick={handleShow}>
          Improve your financial health
        </button>
      </div>

      <AddAssetsModal show={modalShow} handleClose={handleClose} onSubmit={handleSubmit} />
    </div>
  );
}

export default Financial;
