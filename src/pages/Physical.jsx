import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import AddAssetsModal from "../components/AddAssetModal";
import DeleteConfirmationModal from "../components/ConfirmDelete";
import { Link } from "react-router-dom";
import { FaPills } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default calendar styles


const items = [
  { title: "Financial" },
  { title: "Health" },
  { title: "Investment" },
  { title: "Savings" },
  { title: "Insurance" },
];


function Physical() {
  const [date, setDate] = useState(new Date());
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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
      <Container className="mt-4 flex-grow-1 mb-3">

        <Card className="mb-4 shadow rounded-4 bg-primary text-white position-relative aqua-mental-card" >
          <Card.Body className="p-1 d-flex">
            <div className="d-flex flex-row align-items-center justify-content-between auqa-mental">
              <div className="text-section text-start p-2 auqa-mental-text">
                <Card.Text className="ps-3">Your physical health is the cornerstone of a vibrant life. Track and manage key aspects to stay active, energized, and in control of your well-being.</Card.Text>
              </div>

              <img
                src="assets/images/mentalCardImg.png"
                alt="Logo"
                className="mentalImg " />
            </div>
          </Card.Body>
        </Card>

        <div className="d-flex justify-content-start mt-4 mb-3 px-2">
          <strong>Know my body</strong>
        </div>

        <Row className="g-3">
          <Col xs={6} sm={3}>
            <Link to="/physical" className="text-decoration-none" >
              <Card className="shadow rounded-4 aqua-bg-lightpurple text-white py-2 border-0">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Text className="auqa-financial-text">Weight</Card.Text>
                  <Card.Text className="fw-bold">150 Lbs</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={6} sm={3}>
            <Link to="/physical" className="text-decoration-none" >
              <Card className="shadow rounded-4 aqua-bg-blue text-white py-2 border-0">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Text className="auqa-financial-text">BMI</Card.Text>
                  <Card.Text className="fw-bold">33.33</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={6} sm={3}>
            <Link to="/physical" className="text-decoration-none" >
              <Card className="shadow rounded-4 aqua-bg-pink text-white py-2 border-0">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Text className="auqa-financial-text">Height</Card.Text>
                  <Card.Text className="fw-bold">180 CM</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={6} sm={3}>
            <Link to="/physical" className="text-decoration-none" >
              <Card className="shadow rounded-4 aqua-bg-lightpink text-white py-2 border-0">
                <Card.Body className="d-flex flex-column justify-content-center">
                  <Card.Text className="auqa-financial-text">Fat Percentage</Card.Text>
                  <Card.Text className="fw-bold">12%</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

        <div className="d-flex justify-content-start mt-3 mb-2 px-2">
          <strong>Medication</strong>
        </div>
        <Row>
          <Col xs={12} sm={12}>
            <Link to="/physical" className="text-decoration-none" >
              <Card className="shadow rounded-4 aqua-bg-pink text-white py-2 border-0">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  {/* Left Text Content */}
                  <Card.Text className="auqa-financial-text mb-0">
                    Aspirin: 50 mg - Twice a day <br /> Next dose: 10:00 AM
                  </Card.Text>

                  {/* Right Icon in Circle */}
                  <div className="rounded-circle bg-white d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                    <FaPills className="text-primary" />
                  </div>
                </Card.Body>
              </Card>

            </Link>
          </Col>
        </Row>

        <div className="d-flex justify-content-start mt-3 mb-2 px-2">
          <strong>Allergy</strong>
        </div>
        <Row>
          <Col xs={12} sm={12}>
            <Link to="/physical" className="text-decoration-none" >
              <Card className="shadow rounded-4 aqua-bg-blue text-white py-2 border-0">
                <Card.Body className="d-flex justify-content-between align-items-center">
                  {/* Left Text Content */}
                  <Card.Text className="auqa-financial-text mb-0">
                    Aspirin: 50 mg - Twice a day <br /> Next dose: 10:00 AM
                  </Card.Text>

                  {/* Right Icon in Circle */}
                  <div className="rounded-circle bg-white d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }}>
                    <FaPills className="text-primary" />
                  </div>
                </Card.Body>
              </Card>

            </Link>
          </Col>
        </Row>

        <div className="d-flex flex-row justify-content-between align-items-center mt-4 mb-2 px-2">
          <div className="d-flex align-items-center">
            <strong>Activity Logs</strong>
          </div>
          <div>
            <button className="btn btn-sm bg- btn-outline-info rounded-pill auqa-bg-lightprimary"><FaPlus size={13} className="" /> Add</button>
          </div>
        </div>

        <Row>
          <Col xs={12} sm={12} className="mt-3">
            <Card className="shadow rounded-4 border-0">
              <Card.Body>
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="w-100 border-0"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </Container>

      <div className="d-flex justify-content-center mt-auto mb-4 mt-3">
        <button className="btn btn-primary px-5 py-2 text-white improve-btn" onClick={handleShow}>
          Improve your financial health
        </button>
      </div>

      {/* Modal */}
      <AddAssetsModal show={modalShow} handleClose={handleClose} onSubmit={handleSubmit} />
    </div>
  );
}

export default Physical;
