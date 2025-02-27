import React, { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import AddAssetsModal from "../components/AddAssetModal";
import AddAnxietyModal from "../components/AddAnxietyModal";
import AnxietyScreenTool from "../components/AnxietyScreentool";
import RelaxationExercise from "../components/RelaxationExercise";
import AddJournalModal from "../components/AddJournal";


const items = [
  { id:"anxiety", title: "Anxiety Check", bgClass: "aqua-bg-lightpurple", imgLogo: "Anxietycheck.png"  },
  { id:"relaxation", title: "Relaxation Exercises", bgClass: "aqua-bg-pink", imgLogo: "RelaxationExersice.png" },
  { id:"journal", title: "Journal", bgClass: "aqua-bg-purple", imgLogo: "Journal.png" },
  { id:"journal", title: "Therapy Note", bgClass: "aqua-bg-green", imgLogo: "TheropyNote.png" },
  { id:"anxiety", title: "Mood Tracker", bgClass: "aqua-bg-lightgreen", imgLogo: "Moodtracker.png" },
];


function Mental() {
  const [selectedModal, setSelectedModal] = useState(null);

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

        <Card className="mb-4 shadow rounded-4 bg-primary text-white position-relative aqua-mental-card" >
          <Card.Body className="p-1 d-flex">
            <div className="d-flex flex-row align-items-center justify-content-between auqa-mental">
              <div className="text-section text-start p-2 auqa-mental-text">
                <Card.Text className="ps-3">Mental health is essential to your overall well-being. Reflect on your emotions, stress levels, and goals to nurture a balanced and resilient mind. Track your progress and prioritize self-care here.
                </Card.Text>
              </div>

              <img
                src="assets/images/mentalCardImg.png"
                alt="Logo"
                className="mentalImg " />
            </div>
          </Card.Body>
        </Card>

        <div className="card-grid mb-3">
          {items.map((item, index) => (
            <Card key={index} className={`shadow rounded-4 text-white border-0 py-2 ${item.bgClass}`} onClick={() => setSelectedModal(item.id)}
            style={{ cursor: "pointer" }} >
              <Card.Body className="d-flex flex-column justify-content-center align-items-center text-center">
                <img src={`assets/icons/${item.imgLogo}`} width={35} height={45} alt="Logo" className="img-fluid mb-2" />
                <Card.Text className="fw-medium">{item.title}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>

      </Container>

      <div className="d-flex justify-content-center mt-auto mb-4">
        <button className="btn btn-primary px-5 py-2 text-white improve-btn" onClick={handleShow}>
        Improve your financial health
        </button>
      </div>

      {selectedModal === "anxiety" && <AddAnxietyModal show={true} handleClose={() => setSelectedModal(null)}  />}
      {selectedModal === "relaxation" && <RelaxationExercise show={true} handleClose={() => setSelectedModal(null)} />}
      {selectedModal === "journal" && <AddJournalModal show={true} handleClose={() => setSelectedModal(null)}  />}

      <AddJournalModal show={modalShow} handleClose={handleClose} onSubmit={handleSubmit} />
    </div>
  );
}

export default Mental;
