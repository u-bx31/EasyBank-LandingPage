import { Offcanvas } from 'react-bootstrap';
import Logo from '../images/logo';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const NavBar = () => {

    const expand = "lg";

    return (
        <section id='nav'>
            <Navbar key={expand} bg="white" expand={expand} className="py-lg-0 mx-lg-5 px-xl-5 px-lg-3 px-1">
                <Container >
                    <Navbar.Brand href="#" >
                        <Logo fill={'#000'}/>
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
                                <Nav.Link className='p-3'>Home</Nav.Link>
                                <Nav.Link className='p-3'>About</Nav.Link>
                                <Nav.Link className='p-3'>Contact</Nav.Link>
                                <Nav.Link className='p-3'>Blog</Nav.Link>
                                <Nav.Link className='p-3'>Careers</Nav.Link>
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