import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    return (
        <div>
           <>
                <Navbar className="theme-color mt-3" sticky="top" collapseOnSelect expand="lg"  >
                    <Container>
                        <Navbar.Brand className="logo rounded-circle" href="#home"><b className= 'text-white'>M</b></Navbar.Brand>
                        <Navbar.Brand  href="#home" className="logo-text"><b>Maithily </b> <span>Debnath </span> </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Nav.Link as={HashLink} to="/home#home"><b>Home</b></Nav.Link>
                                <Nav.Link as={HashLink} to="/home#home"> <b>About Me</b> </Nav.Link>
                                <Nav.Link as={HashLink} to="/home#portfolios"> <b>Portfolios</b> </Nav.Link>
                                <Nav.Link as={HashLink} to="/home#contactMe"> <b>Contact Me</b> </Nav.Link>
                                {/* <Nav.Link as={Link} to="/features">Features</Nav.Link>
                                <Nav.Link as={Link} to="/manageAllOrders">ManageAllOrders</Nav.Link>
                                <Nav.Link as={Link} to="/myOrders">MyOrders</Nav.Link> */}



                                {/* {user?.email ?
                                <div className='d-flex'> 
                                    <Nav.Link as={Link} to="/dashboard"><b>Dashboard</b></Nav.Link>
                                    <Button onClick={logout} variant="light">Logout</Button> 
                                </div>    
                                    :<Nav.Link as={Link} to="/login"> <b>Login</b> </Nav.Link>}

                                <Navbar.Text>
                                    <a href="#login">{user?.displayName}</a>
                                </Navbar.Text> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>  
        </div>
    );
};

export default Header;