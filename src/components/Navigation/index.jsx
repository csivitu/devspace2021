import './styles.css';

import '../../fontsizes.css';

import { Navbar, Nav, Button } from 'react-bootstrap';

import NavbarBrand from '../../img/DevspaceJumbotron.svg';

export default function Navigation() {
    return (
        <div>
            <Navbar
				bg="black"
				variant="dark"
				expand="lg"
				fixed="top"
                class="d-flex justify-space-between align-items-center bg-black"
            >
                <Navbar.Brand>
                    <img
                        src={NavbarBrand}
						alt="Devspace"
						width="200px"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="navbar-collapse" className="justify-content-end">
                    <Nav className="align-items-center">
                        <Nav.Item>
                            <Nav.Link href="/home">About</Nav.Link>
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
                            <hr/>
                        </Nav.Item>
                        <Nav.Item>
                            <Button id="registerbutton" className="secondary-button">REGISTER</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
