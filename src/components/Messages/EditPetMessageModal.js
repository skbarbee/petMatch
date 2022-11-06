import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import PetMessageForm from '../shared/PetMessageForm'
import { updatePetMessage } from '../../api/petMessages'
import messages from '../shared/AutoDismissAlert/AutoDismissAlert'


const EditPetMessageModal = (props) => {
    const {
        user, show, handleClose,
        msgAlert, triggerRefresh, pet
    } = props

    const [petMessage, setPetMessage] = useState(props.petMessage)

    const handleChange = (e) => {
        setPetMessage(prevPetMessage => {
            const name = e.target.name
            let value = e.target.value

            // // handle the checkbox
            // if (name === "isSqueaky" && e.target.checked) {
            //     value = true
            // } else if (name === "isSqueaky" && !e.target.checked) {
            //     value = false
            // }

            const updatedPetMessage = { [name]: value }

            return {
                ...prevPetMessage, ...updatedPetMessage
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        updatePetMessage(user, pet._id, petMessage)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.updateMessageSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: messages.updateMessageFailure + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <PetMessageForm
                    petMessage={petMessage}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Leave this pet's owner a message!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditPetMessageModal