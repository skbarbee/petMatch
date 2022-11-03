import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import MeetForm from '../shared/MeetForm'
import { updateMeet } from '../../api/meet'





const EditMeetModal = (props) => {
    const { 
        user, show, handleClose, 
        msgAlert, triggerRefresh
    } = props
    
    const [meet, setMeet] = useState(props.pet)
    
    const handleChange =(e) =>{
		setMeet(prevMeet =>{
			const updatedName = e.target.name
			let updatedValue = e.target.value
			console.log(updatedValue)

			if (updatedName === "person"){
				updatedValue = e.target.value.toUpperCase()
			}else if(updatedName === "when"){
				updatedValue = e.target.value.toUpperCase()
			}else if (updatedName === "where"){
				updatedValue = e.target.value
			}
			const updatedMeet = { [updatedName]: updatedValue}
			console.log(updatedMeet)
			return {...prevMeet, ...updatedMeet}
		})
	}
    const handleSubmit = (e) => {
        e.preventDefault()
        
        updateMeet(meet, user, props.pet._id)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Updated thing!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Update Pet Failure',
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
            <Modal.Body>
                <MeetForm 
                    meet={meet}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update Pet"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditMeetModal