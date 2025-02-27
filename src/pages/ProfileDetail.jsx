import React from 'react';
import { Container, Card, Row, Col, Image, Button } from 'react-bootstrap';
import { FaRegCircleUser } from "react-icons/fa6";
import { BsHeartPulse } from "react-icons/bs";
import { FaEnvelope, FaPhone, FaVenusMars, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProfileDetail = () => {
  const cardsdetail = {
    val1: 'Insulin (20 units daily)',
    val2: 'Asthma',
    val3: 'Penicillin, Shellfish',
    val4: '(220) 555-0100 Sarach Doe (Parent)',
  };

  const details = [
    { label: 'Medication', value: cardsdetail.val1, icon: <FaRegCircleUser size={24} /> },
    { label: 'Health Conditions', value: cardsdetail.val2, icon: <BsHeartPulse size={24} /> },
    { label: 'Allergies', value: cardsdetail.val3, icon: <FaPhone size={24} /> },
    { label: 'Emergency Contacts', value: cardsdetail.val4, icon: <FaPhone size={24} /> },
   
  ];

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
              <div className="aqua-bg-pink text-white rounded-4 d-flex justify-content-center align-items-center me-3" style={{ width: '50px', height: '50px' }}>
                {item.icon}
              </div>
              <div className="d-flex align-items-start flex-column">
                <h6 className="mb-0">{item.value}  </h6>
                <span className='text-secondary' style={{ fontSize: "12px" }}>{item.label}</span>
              </div>
            </div>
            
          </Card>
        ))}
      </div>

      <Card className="bg-primary mb-3 py-2 px-4 rounded-3 shadow-sm d-flex flex-row align-items-center h-auto" >
        <div className="d-flex align-items-center">
          <div className="bg-primary text-white rounded-4 d-flex justify-content-center align-items-center me-3">
            <img src="assets/Icons/ReferEarn.png" alt="refer&earn" width={160} height={106} />
          </div>
          <div className="d-flex align-items-start flex-column text-white mb-1">
            <h5 className="mb-0">Refer & Earn rewards  </h5>
            <span className='text-light mb-2' style={{ fontSize: "13px" }}>Refer your friend and get more</span>
            <button type="button" className="btn bg-white rounded-pill px-5 text-primary fw-semibold">Refer a Friend</button>

          </div>
        </div>
      </Card>

      <Row className="mt-3">
        <Col xs={12} md={6}>
          <Link to="/profile" className="w-100 btn text-white aqua-bg-pink mb-2 fw-semibold">View Personal Details</Link>
        </Col>
        <Col xs={12} md={6}>
          <Button variant="primary" className="w-100 text-white fw-semibold">Log Out</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileDetail;
