import './css/Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import NavBarBrand from '../img/DevSpace-BlueWhite.svg'
export default function Navigation() {
  return (
    <div>
      <NavBar bg="sigblue" variant="light">
        <Container fluid>
          
            <NavBar.Brand>
              <img src={NavBarBrand} 
                alt="Devspace"
                height="85%"
                width="85%"/>   
            </NavBar.Brand>  
              <Nav  className="justify-content-center" >
                <Nav.Item>
                  <Nav.Link href="/home"><h4>HOME</h4></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link><h4>TRACK</h4></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link ><h4>SPONSORS</h4></Nav.Link>
                </Nav.Item>
                <Nav.Item style={{backgroundColor: 'black',margin:'0'}}>
                  <Nav.Link style={{color: '#00D5FF'}}>
                    <h4>REGISTER NOW</h4>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
        </Container>
      </NavBar>
    </div>
  );
}
