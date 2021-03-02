import React, { useEffect } from 'react';

import { Navbar, Nav, Button } from 'react-bootstrap';

import NavbarBrand from '../../img/DevspaceJumbotron.svg';

import './styles.css';

export default function Navigation() {
    const handleScroll = () => {
        if (window.scrollY > 200) {
            document.querySelector('.devspace-navbar').classList.add('scroll');
        } else {
            document
                .querySelector('.devspace-navbar')
                .classList.remove('scroll');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Navbar
                scrolling="true"
                // bg="black"
                // variant="dark"
                expand="lg"
                fixed="top"
                className="d-flex justify-space-between align-items-center devspace-navbar"
            >
                <Navbar.Brand>
                    <img src={NavbarBrand} alt="Devspace" width="200px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="navbar-collapse"
                    className="justify-content-end"
                >
                    <Nav className="align-items-center">
                        <Nav.Item>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#tracks">Tracks</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contacts">Contacts</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <hr id="divider" />
                        </Nav.Item>
                        <Nav.Item className="nav-button">
                            <Nav.Link href="https://devspace.hackerearth.com/" target="_blank">
                                <Button
                                    id="registerbutton"
                                    className="secondary-button"
                                    herf="https://devspace.hackerearth.com/"
                                    target="_blank"
                                >
                                    REGISTER
                                </Button>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
