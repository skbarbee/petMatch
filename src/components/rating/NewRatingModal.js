import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import RatingForm from '../shared/RatingForm'
import { createRating } from '../../api/rating'
import { useParams } from 'react-router-dom'


const NewRatingModal = (props) => {
    const {
        user, pet, show, handleClose, msgAlert, triggerRefresh
    } = props

// const { petId } = useParams()

const [rating, setRating] = useState({})

const handleChange = (e) => {
    setRating(prevRating => {
        const name = e.target.name
        let value = e.target.value

        // handle the checkbox
        if (name === "meetAgain" && e.target.checked) {
            value = true
        } else if (name === "meetAgain" && !e.target.checked) {
            value = false
        }

        if (e.target.type === 'number') {
            // this looks at the input type and changes from the default type of string to an actual number
            value = parseInt(e.target.value)
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
        .catch((error) => {
           
            msgAlert({
                heading: 'Oh No!',
                message: 'Something went wrong! Please try again' + error, 
                variant: 'danger'
            })
        })
}

return (
    <Modal show={ show } onHide={ handleClose }>
        <Modal.Header closeButton />
        <Modal.Body>
            <RatingForm 
                user={user}
                pet={pet}
                rating={rating}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                heading="Rate your date!"
            />
        </Modal.Body>
    </Modal>
)
}

export default NewRatingModal