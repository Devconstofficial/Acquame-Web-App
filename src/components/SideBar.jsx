import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Modal, Button } from "react-bootstrap";
import { FaHome, FaUser, FaSignOutAlt, FaBars, FaBell, FaBrain, FaRunning, FaShieldAlt } from "react-icons/fa";
import { FaAngleRight, FaGear } from "react-icons/fa6";
import "../styles/sidebar.css";
import SettingsModal from "./SettingsModal";

const Sidebar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
    const [settingShow, setSettingShow] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(true);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className={`sidebar d-flex flex-column justify-content-between p-3 bg-primary ${isOpen ? "open" : "closed"}`} style={{ zIndex: 989 }}>
                {/* Logo */}
                <Navbar.Brand href="#" className="text-center mb-4">
                    <img src="assets/images/MainLogo.png" alt="Logo" className="sidebarlogo" />
                    <h2 className='fw-bold text-white paprika'>Acquame</h2>
                </Navbar.Brand>

                {/* Menu Items */}
                <Nav className="flex-column flex-grow-1 justify-content-center text-start ms-3">
                    <Nav.Link as={Link} to="/home" className={`nav-item mb-3 ${location.pathname === "/home" ? "active" : ""}`}>
                        <FaHome className="icon" /> Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/financial" className={`nav-item mb-3 ${location.pathname === "/financial" ? "active" : ""}`}>
                        <FaShieldAlt className="icon" /> Financial
                    </Nav.Link>
                    <Nav.Link as={Link} to="/physical" className={`nav-item mb-3 ${location.pathname === "/physical" ? "active" : ""}`}>
                        <FaRunning className="icon" /> Physical
                    </Nav.Link>
                    <Nav.Link as={Link} to="/mental" className={`nav-item mb-3 ${location.pathname === "/mental" ? "active" : ""}`}>
                        <FaBrain className="icon" /> Mental
                    </Nav.Link>
                    <Nav.Link as={Link} to="/profile" className={`nav-item mb-3 ${location.pathname === "/profile" ? "active" : ""}`}>
                        <FaUser className="icon" /> Profile
                    </Nav.Link>
                </Nav>

                {/* Logout Button */}
                <Nav className="text-center mt-auto ms-3">
                    <Nav.Link href="#logout" className="text-white nav-item">
                        <FaSignOutAlt className="icon" /> Logout
                    </Nav.Link>
                </Nav>
            </div>

            {/* Sidebar Toggle Button */}
            <button className="hamburger d-md-none ms-1 mt-1 text-white btn" style={{ zIndex: 990 }} onClick={() => setIsOpen(prev => !prev)}>
                <FaBars />
            </button>

            {/* Main Content Area */}
            <div className="content-container flex-grow-1">
                {/* Top Navbar */}
                <Navbar bg="" variant="dark" className="top-navbar w-100 position-fixed topbarBg" style={{ zIndex: 988, top: 0, left: 0 }} >
                    <div className="d-flex justify-content-end container-fluid">
                        <Nav>
                            <Nav.Link href="#notifications" className="text-white me-2">
                                <FaBell size={20} />
                            </Nav.Link>
                            <Nav.Link href="#profile" className="text-white" onClick={() => { setSettingShow(true) }}>
                                <FaGear size={20} />
                            </Nav.Link>

                            <SettingsModal show={settingShow} onClose={() => setSettingShow(false)} />

                           

                        </Nav>
                    </div>
                </Navbar>
            </div>
        </div>
    );
};

export default Sidebar;
