import React from 'react';

import {Card, Table, Container, Button, Dropdown} from 'react-bootstrap';
import {BsThreeDots} from 'react-icons/bs';
import { FaDumpster, FaEdit, FaCross, FaTimes } from 'react-icons/fa';

function TableComponent(){
  return(
    // style={{ width:'100%' }}
    <Container >
      <Card>
    <Table responsive>
  <thead>
    <tr>
      <th><font color="grey">USER NAME</font></th>
      <th><font color="grey">ADDRESS</font></th>
      <th><font color="grey">CONTACT</font></th> 
      <th><font color="grey">EMAIL</font></th>  
      <th></th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>Table cell</td>
      <td>
      <Dropdown>
  <Dropdown.Toggle variant="light" id="dropdown-basic" className="btn-sm">
  {/* <BsThreeDots></BsThreeDots> */}
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-2"><FaEdit className="mr-2"></FaEdit>Edit Profile</Dropdown.Item>
    <Dropdown.Item href="#/action-3"><FaTimes  className="mr-2"/>Delete Profile</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> 
  </td>
    </tr>
    
  </tbody>
</Table>
</Card>
    
</Container>
  )
}

export default TableComponent;