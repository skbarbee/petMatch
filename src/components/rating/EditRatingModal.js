import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import RatingForm from '../shared/RatingForm'
import { updateRating } from '../../api/rating'
import messages from '../shared/AutoDismissAlert/messages'


const EditRatingModal = (props) => {
    const { 
        user, show, handleClose, 
        msgAlert, triggerRefresh, pet 
    } = props

    const [rating, setRating] = useState(props.rating)

    const handleChange = (e) => {
        setRating(prevRating => {
            const name = e.target.name
            let value = e.target.value

            // handle the checkbox
            if (name === "dateAgain" && e.target.checked) {
                value = true
            } else if (name === "dateAgain" && !e.target.checked) {
                value = false
            }

            const updatedRating = { [name]: value }

            return {
                ...prevRating, ...updatedRating
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        updateRating(user, pet._id, rating)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.updateRatingSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: messages.updateRatingFailure + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
            <Modal.Body>
                <RatingForm 
                    rating={rating}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Rate this pet!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditRatingModal