import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {logout} from '../actions/userActions'

const Header = () => {
  const dispatch=useDispatch()
  const userLogin=useSelector(state=>state.userLogin)
  const {userInfo}=userLogin
  const logoutHandler=()=>{
    dispatch(logout())
  }
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>E learning</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Courses'>
                <Nav.Link>Courses</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/About'>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Contact'>
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
             {userInfo ?
             (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>

             )
             :
             ( <LinkContainer to='/Login'>
             <Nav.Link>Login</Nav.Link>
           </LinkContainer>)}

           {userInfo&& userInfo.isAdmin&&(
              <NavDropdown title='Admin' id='adminmenu'>
                <LinkContainer to='/admin/register'>
                <NavDropdown.Item>Register</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/admin/userList'>
                <NavDropdown.Item>Users</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
           )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
