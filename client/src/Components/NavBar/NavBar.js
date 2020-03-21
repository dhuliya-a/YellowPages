import React from 'react';
import { FaAtom, FaUserCircle, FaLifeRing, FaTelegram } from 'react-icons/fa';
import {BsList} from 'react-icons/bs';

import {Navbar, Nav, Form, Button} from 'react-bootstrap';
function NavBar(){
  return(
    <>
  <Navbar bg="light">
    <Button className="btn-light"> <BsList></BsList></Button>
    <Navbar.Brand href="#home">YellowPages</Navbar.Brand>
    
    <Nav className="mx-auto">
      <Nav.Link className="mr-3" href="#home">Task</Nav.Link>
      <Nav.Link className="mr-3" href="#features">Users</Nav.Link>
      <Nav.Link className="mr-3" href="#pricing">Activity</Nav.Link>
      <Nav.Link  href="#pricing ">Members</Nav.Link>
    </Nav>

    <Form inline>
      <Button className="btn-light btn-sm mr-2"><FaUserCircle></FaUserCircle></Button> 
      <Button className="btn-light btn-sm mr-2"><FaLifeRing /> Support</Button>
      <Button className="btn-light btn-sm mr-2"><FaTelegram /></Button>
    </Form>
  </Navbar>
</>
  )
}

export default NavBar;