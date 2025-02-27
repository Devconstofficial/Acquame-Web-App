import React, { useState } from "react";
import { Accordion, Modal, Button, Form, Row, Col } from "react-bootstrap";
import {
    FaBell,
    FaLock,
    FaHeadset,
    FaFileAlt,
    FaQuestionCircle,
    FaDollarSign
} from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

// Settings Options
const settingsOptions = [
    { name: "Notifications", icon: <FaBell size={24} />, key: "notifications" },
    { name: "Change Password", icon: <FaLock size={24} />, key: "changePassword" },
    { name: "Support", icon: <FaHeadset size={24} />, key: "support" },
    { name: "Terms of Service", icon: <FaFileAlt size={24} />, key: "terms" },
    { name: "FAQ", icon: <FaQuestionCircle size={24} />, key: "faq" },
    { name: "Currency", icon: <FaDollarSign size={24} />, key: "currency" },
];

// Notification Options
const notificationsList = [
    { name: "Financial Health Notifications", key: "financialHealth" },
    { name: "Security Alerts", key: "securityAlerts" },
    { name: "Marketing Updates", key: "marketingUpdates" },
    { name: "New Feature Announcements", key: "featureUpdates" },
];

// FAQ Content
const faqList = [
    { question: "How does Aquame work?", answer: "Aquame provides seamless water delivery services with real-time tracking and multiple subscription plans." },
    { question: "How can I contact customer support?", answer: "You can reach out via our support page, email, or call our 24/7 helpline." },
    { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, and digital wallets for easy transactions." },
];

// Terms & Conditions
const termsList = [
    { title: "Clause 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in." },
    { title: "Clause 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra condimentum eget purus in." },
];

// Currency Options
const currencies = ["USD $", "EURO €", "GBP £", "CAD $"];

const SettingsModal = ({ show, onClose }) => {
    const [activeModal, setActiveModal] = useState(null);
    const [notificationSettings, setNotificationSettings] = useState({
        financialHealth: true,
        securityAlerts: false,
        marketingUpdates: true,
        featureUpdates: false,
    });
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    // Toggle Notification Settings
    const handleToggle = (key) => {
        setNotificationSettings((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    // Change Password State
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Handle Password Change
    const handlePasswordChange = (e) => {
        e.preventDefault();

        if (!currentPassword || !newPassword || !confirmPassword) {
            setPasswordError("All fields are required.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setPasswordError("New passwords do not match.");
            return;
        }

        setPasswordError("");
        alert("Password successfully changed!");
        setActiveModal(null);
    };

    // Render Modals Based on Active Selection
    const renderModalContent = () => {
        switch (activeModal) {
            case "notifications":
                return (
                    notificationsList.map((notification) => (
                        <div key={notification.key} className="d-flex justify-content-between align-items-center mb-3">
                            <h5>{notification.name}</h5>
                            <Form.Check
                                type="switch"
                                id={`switch-${notification.key}`}
                                checked={notificationSettings[notification.key]}
                                onChange={() => handleToggle(notification.key)}
                            />
                        </div>
                    ))
                );
            case "faq":
                return (
                    <>
                        <h4 className="text-center mb-3">We’re here to help you with anything and everything</h4>
                        <Form.Group className="mb-4">
                            <Form.Control type="text" className="py-3" placeholder="Search for questions..." />
                        </Form.Group>
                        <h5 className="mb-3 fw-semibold px-3">Top Questions</h5>
                        <Accordion>
                            {faqList.map((faq, index) => (
                                <Accordion.Item key={index} eventKey={index.toString()}>
                                    <Accordion.Header>{faq.question}</Accordion.Header>
                                    <Accordion.Body className="text-muted">{faq.answer}</Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </>
                );
            case "terms":
                return (
                    <ul className="list-unstyled">
                        {termsList.map((clause, index) => (
                            <li key={index} className="mb-3">
                                <strong>{index + 1}. {clause.title}</strong>
                                <p className="text-muted mb-0">{clause.description}</p>
                            </li>
                        ))}
                    </ul>
                );
            case "support":
                return (
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter query title" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Additional Details</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Enter query details" required />
                        </Form.Group>
                        <Row className="mt-2">
                            <Col className="text-start">
                                <Button variant="outline-dark" onClick={() => setActiveModal(null)}>Cancel</Button>
                            </Col>
                            <Col className="text-end">
                                <Button type="submit" variant="primary" className="text-white px-3">Send</Button>
                            </Col>
                        </Row>
                    </Form>
                );
            case "currency":
                return (
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Currency</Form.Label>
                            <Form.Select value={selectedCurrency} onChange={(e) => setSelectedCurrency(e.target.value)}>
                                {currencies.map((currency, index) => (
                                    <option key={index} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Row className="mt-2">
                            <Col className="text-start">
                                <Button variant="outline-dark" onClick={() => setActiveModal(null)}>Cancel</Button>
                            </Col>
                            <Col className="text-end">
                                <Button type="submit" variant="primary" className="text-white px-3">Save</Button>
                            </Col>
                        </Row>
                    </Form>
                );
            case "changePassword":
                return (
                    <Form onSubmit={handlePasswordChange}>
                        <Form.Group className="mb-3">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter current password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm new password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        {passwordError && <p className="text-danger">{passwordError}</p>}

                        <Row className="mt-2">
                            <Col className="text-start">
                                <Button variant="outline-dark" onClick={() => setActiveModal(null)}>Cancel</Button>
                            </Col>
                            <Col className="text-end">
                                <Button type="submit" variant="primary" className="text-white px-3">Save</Button>
                            </Col>
                        </Row>
                    </Form>
                );

            default:
                return <p>This is the {activeModal} settings page.</p>;
        }
    };

    return (
        <>
            {/* Main Settings Modal */}
            <Modal show={show} onHide={onClose} centered contentClassName="p-3">
                <Modal.Header closeButton className="border-0" />
                <Modal.Body>
                    {settingsOptions.map((option) => (
                        <div
                            key={option.key}
                            className="d-flex flex-row justify-content-between align-items-center mb-3 px-1"
                            onClick={() => setActiveModal(option.key)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="d-flex align-items-center">
                                <div className="bg-primary text-white rounded-4 d-flex justify-content-center align-items-center me-3" style={{ width: "50px", height: "50px" }}>
                                    {option.icon}
                                </div>
                                <h5 className="mb-0">{option.name}</h5>
                            </div>
                            <FaAngleRight size={18} className="fw-normal" />
                        </div>
                    ))}
                </Modal.Body>
            </Modal>

            {/* Individual Modals */}
            <Modal show={!!activeModal} onHide={() => setActiveModal(null)} centered contentClassName="p-3">
                <Modal.Header className="border-0" closeButton>

                </Modal.Header>
                <Modal.Body>{renderModalContent()}</Modal.Body>
            </Modal>
        </>
    );
};

export default SettingsModal;
