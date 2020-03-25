import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Table, Container, Dropdown} from 'react-bootstrap';
import { FaEdit, FaTimes, FaUserCircle } from 'react-icons/fa';

import {getCurrentUser, getAllUsers} from '../../actions';

import EditFormModal from '../EditForm/EditForm'

function TableComponent(){

  const [modalShow, setModalShow] = React.useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  
  useEffect(() => {
    axios.get('/api/users')
    .then(response => {
      getAllUsers(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },[]);

  const deleteProfile=(userId)=>{
    axios.post('/api/delete_user/'+userId)
    .then(response => {
      axios.get('/api/users')
     .then(response => {
       getAllUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  
  const getProfile=(userId)=>{
    
    axios.get('/api/user/'+userId)
    .then(res => {
      getCurrentUser(res.data)})
  }



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
            {users.map(user =>
              
              <tr>             
                <td align="left"><FaUserCircle className="mr-3"></FaUserCircle>{user["name"]}</td>
                <td>{user["address"]}</td>
                <td>{user["contact"]}</td>
                <td>{user["email"]}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="btn-sm"></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-2" onClick={()=>{ setModalShow(true); getProfile(user["_id"]) }}  ><FaEdit className="mr-2"></FaEdit>Edit Profile</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" onClick={()=>deleteProfile(user["_id"])}><FaTimes  className="mr-2"/>Delete Profile</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> 
                </td>
              </tr>
      )}

          </tbody>
        </Table>
      </Card>    
    </Container>

    <EditFormModal user={user} show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
};

export default TableComponent;