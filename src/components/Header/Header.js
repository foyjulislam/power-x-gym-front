import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <div>
      <Container fluid>
        <Container>
          <Row>
            <Col>
              <Navbar
                className='text-uppercase color-nav'
                expand='lg'
                bg='dark'
                variant='dark'
                fixed='top'
              >
                <Navbar.Brand href='/'>
                  Power<span className='text-warning'> X</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav '>
                  <Nav className='ml-auto'>
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href='/services'>Services</Nav.Link>
                    <Nav.Link href='/classes'>Our classes</Nav.Link>
                    <Nav.Link href='/about'>About us</Nav.Link>
                    <Nav.Link href='/blog'>Blog</Nav.Link>
                    <Nav.Link href='/pricing'>Pricing</Nav.Link>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Header;
