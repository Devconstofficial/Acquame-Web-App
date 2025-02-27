import React from 'react';
import { Container, Card, Form, Row, Col } from "react-bootstrap";

const Login = () => {
    return (
        <>
            <div className="bg-primary" >
                <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
                    <div className='mb-3 d-flex flex-column justify-content-center'>
                        <img src="assets/images/MainLogo.png" alt="Logo" style={{ width: "100px", margin: "10px auto" }} />
                        <h2 className='fw-bold text-white paprika'>Acquame</h2>
                    </div>

                    <Card className="w-sm-auto mx-auto p-4 text-center shadow" style={{ width: "500px", borderRadius: "50px" }}>

                        <Card.Body>
                            <h2 className="mb-1 fs-1 fw-semibold">Welcome back!</h2>
                            <p className="mb-4">Login to access all your data</p>
                            <Form className='text-start pt-3'>
                                {/* Email */}
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label >Email address</Form.Label>
                                    <Form.Control className='py-3' type="email" placeholder="Enter your email address" required />
                                </Form.Group>


                                <Form.Group className="mb-1" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control className='py-3' type="password" placeholder="Enter your password" required />
                                </Form.Group>


                                <Row className="mb-4">
                                    <Col className="text-end">
                                        <a href="/forgot-password">Forgot Password?</a>
                                    </Col>
                                </Row>


                                <button type="submit" className="w-100 btn btn-primary py-3">
                                    Log In
                                </button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        </>
    );
};

export default Login;