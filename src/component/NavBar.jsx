import { Button, Modal, Offcanvas } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { ReactComponent as Hambergur } from '../images/icon-hamburger.svg';
import Logo from '../images/logo.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [colpse, setColpse] = useState(false);
    const [size, setSize] = useState();
    const btnRef = useRef();
    const expand = "lg";

    return (
        <section>
            <Navbar key={expand} bg="white" expand={expand} className="mb-2 mx-lg-5 px-lg-5">
                <Container >
                    <Navbar.Brand href="#" >
                        <img src={Logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        className="bg-transparent   border-0"
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="top"
                    >
                        <Offcanvas.Header
                            className="bg-white"
                            closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <img src={Logo} alt="" />
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="bg-white m-lg-0 m-3 h-auto text-center rounded-3">
                            <Nav className="justify-content-center flex-grow-1 pe-3">
                                <Nav.Link >Home</Nav.Link>
                                <Nav.Link >About</Nav.Link>
                                <Nav.Link >Contact</Nav.Link>
                                <Nav.Link >Blog</Nav.Link>
                                <Nav.Link >Careers</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <button className='nav-btn req-btn d-lg-block d-none' >
                        Request invite
                    </button>

                </Container>
            </Navbar>
        </section>
    );
}

export default NavBar;