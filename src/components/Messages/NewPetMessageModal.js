import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import PetMessageForm from '../shared/PetMessageForm'
import { createPetMessage } from '../../api/petMessages'

const NewPetMessageModal = (props) => {
    const {
        user, pet, show, handleClose, msgAlert, triggerRefresh
    } = props

    const [petMessage, setPetMessage] = useState({})

    const handleChange = (e) => {
        setPetMessage(prevPetMessage => {
            const name = e.target.name
            let value = e.target.value

            const updatedPetMessage = { [name]: value }

            return {
                ...prevPetMessage, ...updatedPetMessage
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        createPetMessage(user, pet._id, petMessage)
            .then(() => handleClose())
            .then(() => triggerRefresh())
            .then(() => msgAlert({
                heading: "Oh yeah!",
                message: "great! thank you for your message!",
                variant: 'success'
            }))
            // .then(() => triggerRefresh())
            .catch(msgAlert({
                heading: "Oh no!",
                message: "something went wrong",
                variant: 'danger'
            }))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>

                <PetMessageForm
                    petMessage={petMessage}
                    pet={pet}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Leave a message for the owner of this pet!"
                />
            </Modal.Body>
        </Modal>

    )
}

export default NewPetMessageModal