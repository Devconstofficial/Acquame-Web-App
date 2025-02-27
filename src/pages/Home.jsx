import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import AddAssetsModal from "../components/AddAssetModal";
import AddAssetsVehicles from "../components/AddAssetVehicles";
import { Link } from "react-router-dom";

function Home() {
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

        <Card className="mb-4 shadow rounded-4 p-2 bg-primary text-white border-0">
          <Card.Body className="p-1">
            <div className="d-flex flex-row align-items-center justify-content-between gap-3">
              <div className="text-section text-start text-sm-start order-1 order-sm-2">
                <Card.Text className="auqa-card-text ">A clear and complete view of your overall well-being, would empower you to make informed decisions and achieve balance in your life.
                </Card.Text>
              </div>
              <img
                src="assets/images/homeCardImg.png"
                alt="Logo"
                className="auqa-home-img order-2 order-sm-1"
              />
            </div>
          </Card.Body>
        </Card>

        {/* <Card className="mb-4 shadow rounded-4">
          <Card.Body>
            <Card.Title className="fw-bold">Full Width Card</Card.Title>
            <Card.Text>This card takes the full width.</Card.Text>
            <Button variant="primary" onClick={handleShow}>
              Open Modal
            </Button>
          </Card.Body>
        </Card> */}

        <Row className="g-3">
          <Col xs={4} sm={4}>
            <Link to="/financial" className="text-decoration-none" >
              <Card className="shadow rounded-4 aqua-bg-lightpink text-white py-3 border-0">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                  <img src="assets/icons/financial_home.png" alt="Logo" className=" mb-2" />
                  <Card.Text className="fw-bold">Financial</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col xs={4} sm={4}>
            <Link to="/physical" className="text-decoration-none" >
              <Card className="shadow rounded-4 aqua-bg-lightyellow text-white py-3 border-0">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                  <img src="assets/icons/physical_home.png" alt="Logo" className=" mb-2" />
                  <Card.Text className="fw-bold">Physical</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col xs={4} sm={4}>

            <Link to="/mental" className="text-decoration-none" >
              <Card className="shadow rounded-4 bg-primary text-white py-3 border-0">
                <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                  <img src="assets/icons/brain_home.png" alt="Logo" className=" mb-2" />
                  <Card.Text className="fw-bold">Mental</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>

      {/* Modal */}
      <AddAssetsVehicles show={modalShow} handleClose={handleClose} onSubmit={handleSubmit} />
    </div>
  );
}

export default Home;
