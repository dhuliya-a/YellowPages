import React, {useState, useEffect} from 'react';
import {Form, Modal, Button, Col, Container, Card} from 'react-bootstrap';
import {FaUserCircle} from 'react-icons/fa';
import axios from 'axios';
import {Redirect} from 'react-router';

function EditFormModal(props) {

  const [email, setEmail] = useState('abc@def.com');
  const [name, setName] = useState('User');
  const [contact, setContact] = useState('0000000000');
  const [address, setAddress] = useState('Default Address');
  const [profile_img, setPicture] = useState('No User Profile');

  const resetToHome = (e) => {
    <Redirect to = 'https://yp-directory.herokuapp.com/' />
  };

  const handleUserNameInput = e => {
    setName(e.target.value);
  };

  const handleEmailInput = e => {
    setEmail(e.target.value);
  };
  
  const handleContactInput = e => {
    setContact(e.target.value);
  };
  
  const handleAddressInput = e => {
    setAddress(e.target.value);
  };
  
  const handleProfileInput = e => {
    setPicture(e.target.value);
  };
  
  const onSubmit = (e) => {
    const userId = (props["user"]["_id"]);
    axios.get('/api/user/'+userId).then(res=>console.log(res.data));
    const Updateduser = {
      name: name,
      email: email,
      contact: contact,
      address: address,
      profile_img: profile_img
    };
    console.log(Updateduser);
    axios.post('/api/update_user/'+userId, Updateduser)
      .then(res => 
        console.log(res.data));
        return (<Redirect to = {process.env.BASE_URL} />)
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Container style={{width:"95%"}}>
          <Form>
            <Container> 
              <div align="center">
                <Card className="float-left" style={{ width: '16rem' }}>
                  <FaUserCircle size="30%"></FaUserCircle>
                  <Card.Body>
                    <Button type="submit" variant="primary" className="btn-light"  onSubmit={handleProfileInput} style={{alignItems:"centre", width:"60%"}}>Upload</Button>
                  </Card.Body>
                </Card>
              </div>
              <div style={{ width: '55%' }} className="float-right">
                <br/> 
                <Form.Group  as={Col} controlId="formGridCity">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="text" onChange={handleUserNameInput} maxlength="40" required="required" defaultValue={props["user"]["name"]} placeholder="User Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" onChange={handleAddressInput} maxlength="80" required="required" defaultValue={props["user"]["address"]} placeholder="Enter Address" />
                </Form.Group>
              </div>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <Container>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="text" onChange={handleContactInput} maxlength="10" required="required" defaultValue={props["user"]["contact"]} placeholder="User Contact Number"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" onChange={handleEmailInput} title="Email Address" pattern="^\S+@\S+$" required="required" defaultValue={props["user"]["email"]} placeholder="User E-mail Address"/>
              </Form.Group>
            </Container>
            
            <Container align="center">
              <Button style={{width:"80%"}} variant="primary" type="submit" onClick={()=>{ onSubmit(), resetToHome()}}>Save Changes</Button>
            </Container>
            <br/>
            <br/>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default EditFormModal;