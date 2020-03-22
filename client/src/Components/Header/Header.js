import React from 'react';
import {FaPlusCircle} from 'react-icons/fa';
import {Jumbotron, Button, Container} from 'react-bootstrap';
import CreateFormModal from '../CreateForm/CreateForm'

function Header(){
  
  const [modalShow, setModalShow] = React.useState(false);

  
  return(
    <>
    <Jumbotron style={{ backgroundColor: 'yellow' }}>
      <Container>
        <div className="float-left">
          <h1 align="left">User Directory</h1>
        </div>
        
        <div>
        <p align="right">
          <Button className="btn btn-dark" onClick={() => setModalShow(true)} > <FaPlusCircle className="mr-2"/>Add New User</Button>
        </p>
        </div>
      </Container>  
    </Jumbotron>
   
<CreateFormModal
  show={modalShow}
  onHide={() => setModalShow(false)}/>
 </>
  )
}

export default Header;