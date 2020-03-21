import React from 'react';

import {Card, Table, Container, Dropdown} from 'react-bootstrap';
import {BsThreeDots} from 'react-icons/bs';
import { FaEdit, FaTimes } from 'react-icons/fa';
import MyVerticallyCenteredModal from '../CreateForm/CreateForm'
function TableComponent(){

  const [modalShow, setModalShow] = React.useState(false);

  return(
    <>
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
    <Dropdown.Item href="#/action-2"  onClick={() => setModalShow(true)}><FaEdit className="mr-2"></FaEdit>Edit Profile</Dropdown.Item>
    <Dropdown.Item href="#/action-3"><FaTimes  className="mr-2"/>Delete Profile</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown> 
  </td>
    </tr>
    
  </tbody>
</Table>
</Card>
    
</Container>
 <MyVerticallyCenteredModal
   show={modalShow}
   onHide={() => setModalShow(false)}
 />
 </>
  )
}

export default TableComponent;