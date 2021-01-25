import './css/Navigation.css';
import '../fontsizes.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import NavBarBrand from '../img/DevspaceJumbotron.svg'
export default function Navigation() {
  return (
    <div>
      <NavBar bg="black" variant="dark">
        <Container fluid>
          
            <NavBar.Brand>
              <img src={NavBarBrand} 
                alt="Devspace"
                height="23%"
                width="23%"/>   
            </NavBar.Brand>  
              <Nav  className="justify-content-end" >
                <Nav.Item>
                  <Nav.Link href="/home">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>Tracks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link >Sponsors</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link >Contacts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <hr style={{width:'0.5px',height:'56px',marginLeft:'--5px',marginRight:'5px',backgroundColor: '#FFFAFF'}}/>
                </Nav.Item>
                <Nav.Item >
                  <Nav.Link id="registerbutton">
                    REGISTER
                  </Nav.Link>
                </Nav.Item>
              </Nav>
        </Container>
      </NavBar>
    </div>
  );
}
