import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, Container } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Define text content for each exercise
const content = {
    controlled: {
        image: "assets/images/relaxationExercise.png",
        beginning: "This is the beginning text for Controlled Breathing.",
        middle: "This is the middle text for Controlled Breathing.",
    },
    muscular: {
        image: "assets/images/relaxationExerciseMale.png",
        beginning: "Find somewhere comfortable and quiet where you won't be interrupted. You can either sit or lie down to practice this exercise. Begin by focusing on your breathing. Try to have a slow and comfortable pace. You could use the controlled breathing technique described earlier. Do this for a few minutes to prepare for the muscular relaxation exercise.",
        middle: "This is the middle text for Muscular Relaxation.",
    },
};

const RelaxationExercise = ({ show, handleClose, onSubmit }) => {
    const [selectedExercise, setSelectedExercise] = useState("controlled");
    return (
        <Modal show={show} onHide={handleClose} centered className="p-3" dialogClassName="borderless-modal">
            <Modal.Header closeButton className="border-0">
                <Modal.Title></Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="d-flex justify-content-center mt-4 mb-4">
                    <Button
                        variant="primary"
                        className="text-white me-2"
                        onClick={() => setSelectedExercise("controlled")}
                    >
                        Controlled Breathing
                    </Button>

                    <Button
                        variant="primary"
                        className="text-white"
                        onClick={() => setSelectedExercise("muscular")}
                    >
                        Muscular Relaxation
                    </Button>
                </div>

                {/* Image */}
                <img
                    src={content[selectedExercise].image}
                    className="img-fluid"
                    style={{ width: "100%" }}
                    alt={selectedExercise}
                />

                {/* Dynamic Text */}
                <div className="p-3 mt-3">
                    <strong>Beginning:</strong>
                    <p> {content[selectedExercise].beginning}</p>
                    
                    <strong>Middle:</strong> <p>{content[selectedExercise].middle}</p>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default RelaxationExercise;

