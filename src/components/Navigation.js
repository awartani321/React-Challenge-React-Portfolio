import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation(props) {    
    return (
        <Navbar collapseOnSelect expand="md" bg="success" variant="light">
            <Container>
                <Navbar.Brand href="#home">Adam Awartani</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#" onClick={() => props.onChangeMenu(1)}>About</Nav.Link>
                        <Nav.Link href="#portfolio"  onClick={() => props.onChangeMenu(2)}>Portfolio</Nav.Link>
                        <Nav.Link href="#contact"  onClick={() => props.onChangeMenu(3)}>Contact</Nav.Link>
                        <Nav.Link href="#resume" onClick={() => props.onChangeMenu(4)}>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;