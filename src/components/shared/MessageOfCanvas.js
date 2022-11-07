import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import ShowPetMessage from "../Messages/ShowPetMessage";

const MessageOffCanvas = (props)=>{

	const {pet, user, msgAlert, setUpdated} = props
	const petMessages = pet.petMessages
  // remove console log or comment them out
	console.log('this is pet in props\n', pet)

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let petMessageCards
    if (pet) {
      // remove console log or comment them out
        console.log("this is the pet in MESSAGECARDS", pet)
        if (petMessages.length > 0) {
            // map over the petMessages
            // produce one ShowPetMessage component for each of them
            petMessageCards = pet.petMessages.map(petMessage => (
                <ShowPetMessage
                    key={petMessages._id}
                    petMessage={petMessage}
                    pet={pet}
                    user = {user}
                    msgAlert = {msgAlert}
                    triggerRefresh = {()=>setUpdated(prev => !prev)}
                />
            ))
        } else {
          petMessageCards = <h2>No messages yet 😭</h2>
        }
    }
	return (
		<>
		
		<Button variant="primary" onClick={handleShow} style={{color:"white"}}>
        Check your Messages
      	</Button>
		
		  <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1> Messages for {pet.name} </h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        
          {petMessageCards}
        </Offcanvas.Body>
      </Offcanvas>
    </>
		
	)

	
	
}

export default MessageOffCanvas