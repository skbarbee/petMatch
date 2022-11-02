import React, {useState} from 'react'
import {Modal} from 'react-bootstap'
import RatingForm from '../shared/RatingForm'
import {createRating} from '../../api/rating'
// import { PromiseProvider } from 'mongoose'

const NewRatingModal = (props) => {
    const {
        user, pet, show, 
    } = props

const [rating, setRating] = useState({})

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

    createRating(user, pet._id, rating)
        .then(() => handleClose())
        .then(() => {
            msgAlert({
                heading: 'Thank you!',
                message: 'The pet appreciates your feedback!',
                variant: 'success'
            })
        })
        .then(() => triggerRefresh())
        .catch(() => {
            msgAlert({
                heading: 'Oh No!',
                message: 'Something went wrong! Please try again',
                variant: 'danger'
            })
        })
}

return (
    <Modal show={ show } onHide={ handleClose }>
        <Modal.Header closeButton />
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

export default NewRatingModal