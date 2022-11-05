import React, {useState} from 'react'
import { Modal } from 'react-bootstrap'
import MeetForm from '../shared/MeetForm'
import { createMeet } from '../../api/meets'


const NewMeetModal = (props) => {
    const {
        user, pet, show, handleClose, msgAlert, triggerRefresh
    } = props



const [meet, setMeet] = useState({})

const handleChange = (e) => {
    setMeet(prevMeet => {
        const name = e.target.name
        let value = e.target.value

        // handle the checkbox
        if (name === "when" && e.target.checked) {
            value = true
        } else if (name === "where" && !e.target.checked) {
            value = false
        }
        const updatedMeet = { [name]: value }

        return {
            ...prevMeet, ...updatedMeet
        }
    })
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log('this is the petId', pet._id)
    createMeet(user, pet._id, meet)
        
        .then(() => handleClose())
        .then(() => {
           
            msgAlert({
                heading: 'Thank you!',
                message: 'test',
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
            <MeetForm 
                user={user}
                pet={pet}
                meet={meet}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                heading="LETS GOO!"
            />
        </Modal.Body>
    </Modal>
)
}

export default NewMeetModal