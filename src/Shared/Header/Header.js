import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import LeftSiteHeader from '../LeftSiteHeader/LeftSiteHeader';
import Image from 'react-bootstrap/Image'

const Header = () => {
    const {user,LogOut}= useContext(AuthContext);
   const handleLogout=()=>{
    LogOut()
    .then(() => {
        
      
      }).catch((error) => {
        console.log(error)
      });
   }
  
    return (
        <div>
         <Navbar collapseOnSelect className='mb-4' expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href=""><Link to='/'>Dragon news</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <>
                {
                    user?.uid ?
                    <>
                  <span>  {user.displayName}</span>
                   <button onClick={handleLogout}>Log out</button>
                    </>
                    :
                    <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                    </>
                    
                    }
                
                
                
                
                </>

            <Link to='/profile'>
              {user?.photoURL ?
              <Image roundedCircle
              style={{height: '30px'}}
              src={user.photoURL}
              ></Image>
              :
              <FaUser></FaUser>


              }
              
            </Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSiteHeader></LeftSiteHeader>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;