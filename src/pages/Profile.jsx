import React, { useState } from "react";
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap';

import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineModeEditOutline } from "react-icons/md";
import {  FaEnvelope, FaPhone, FaVenusMars, FaCalendarAlt } from 'react-icons/fa';
import UpdateModal from '../components/profile/UpdateModal';
import { Link } from "react-router-dom";

const Profile = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedField, setSelectedField] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    gender: 'Male',
    dob: '1990-01-01'
  };

  const details = [
    { key: "username", label: "Username", value: user.name, icon: <FaRegCircleUser size={24} /> },
    { key: "email", label: "Email", value: user.email, icon: <FaEnvelope size={24} /> },
    { key: "phone", label: "Phone", value: user.phone, icon: <FaPhone size={24} /> },
    { key: "gender", label: "Gender", value: user.gender, icon: <FaVenusMars size={24} /> },
    { key: "dob", label: "DOB", value: user.dob, icon: <FaCalendarAlt size={24} /> },
  ];

   // Function to open modal for a specific field
  const handleEditClick = (field, value) => {
    setSelectedField(field);
    setSelectedValue(value);
    setShowEditModal(true);
  };

  // Function to handle modal save action
  const handleSave = (field, newValue) => {
    console.log(`Updated ${field}:`, newValue);
    setShowEditModal(false);
  };

  return (
    <Container className="text-center mt-5">
      {/* Profile Section */}
      <div className="d-flex flex-column align-items-center">
        <Image src="assets/images/user_image.png" className="img-fluid" roundedCircle width={150} height={150} />
        <h3 className="mt-3 fs-3 fw-semibold">John Doe</h3>
        <p className="text-secondary">Joined in 2022</p>
      </div>

      {/* User Details */}
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
            <span className="bg-primary text-white rounded-circle shadow-sm d-flex justify-content-center align-items-center" onClick={() => handleEditClick(item.key, item.label)} style={{ width: '26px', height: '26px', cursor: "pointer" }}>
              <MdOutlineModeEditOutline size={18} />
            </span>
          </Card>
        ))}
      </div>

      <UpdateModal  show={showEditModal} 
        handleClose={() => setShowEditModal(false)} 
        field={selectedField}
        value={selectedValue}
        onUpdate={handleSave}  />

      <Card className="bg-primary mb-3 py-2 px-4 rounded-3 shadow-sm d-flex flex-row align-items-center h-auto" >
        <div className="d-flex align-items-center">
          <div className="bg-primary text-white rounded-4 d-flex justify-content-center align-items-center me-3">
            <img src="assets/Icons/ReferEarn.png" alt="refer&earn" width={160} height={106} />
          </div>
          <div className="d-flex align-items-start flex-column text-white mb-1">
            <h6 className="mb-0">Refer & Earn rewards  </h6>
            <span className='text-light mb-2' style={{ fontSize: "13px" }}>Refer your friend and get more</span>
            <button type="button" className="btn bg-white rounded-pill px-5 text-primary fw-semibold">Refer a Friend</button>

          </div>
        </div>
      </Card>

      <Row className="mt-3">
        <Col xs={12} md={6}>
          <Link to="/emergencyprofile" className="w-100 btn text-white aqua-bg-pink mb-2 fw-semibold">View Emergency Details</Link>
        </Col>
        <Col xs={12} md={6}>
          <Button variant="primary" className="w-100 text-white fw-semibold">Log Out</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
