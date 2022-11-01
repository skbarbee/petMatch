import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import PetForm from '../shared/PetForm'
import { petUpdate } from '../../api/pet'

const EditPetModal = (props) => {
    const { 
        user, show, handleClose, 
        msgAlert, triggerRefresh 
    } = props

    const [pet, setPet] = useState(props.pet)

	const handleChange =(e) =>{
		setPet(prevPet =>{
			const updatedName = e.target.name
			let updatedValue = e.target.value

			if (updatedName === 'available' && e.target.checked){
				updatedValue = true
			}else if( updatedName === 'available' && !e.target.checked){
				updatedValue = false
			}

			if (updatedName === "typeOfPet"){
				updatedValue = e.target.value.toUpperCase()
			}else if(updatedName === "name"){
				updatedValue = e.target.value.toUpperCase()
			}else{
				updatedValue = e.target.value
			}
			const updatedPet = { [updatedName]: updatedValue}

			return {...prevPet, ...updatedPet}
		})
	}

    const handleSubmit = (e) => {
        e.preventDefault()
        
        petUpdate(pet, user, props.pet._id)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Updated pet!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Update Pet Failure' + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
            <Modal.Body>
                <PetForm 
                    pet={pet}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update Pet"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditPetModal