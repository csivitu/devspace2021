import React, { useEffect } from 'react';

import './styles.css';

import { Navbar, Nav, Button } from 'react-bootstrap';

import NavbarBrand from '../../img/DevspaceJumbotron.svg';

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
                scrolling = "true"
                bg="black"
                variant="dark"
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
                            <Nav.Link>Tracks</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Sponsors</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>Contacts</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <hr id="divider"/>
                        </Nav.Item>
                        <Nav.Item>
                            <Button
                                id="registerbutton"
                                className="secondary-button"
                            >
                                REGISTER
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
