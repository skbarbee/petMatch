import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import MeetForm from '../shared/MeetForm'
import { createMeet } from '../../api/meets'

const EditMeetModal = (props) => {
    const { 
        user, pet, show, handleClose, msgAlert, triggerRefresh
    } = props

    const [meet, setMeet] = useState({})
    
    // useEffect(() => {
    //     let meetCards
    //     if (pet) {
    //         console.log(pet.meets)
    //         if (pet.meets.length > 0) {
    //             meetCards = pet.meets.map(meet => (
    //                 <ShowMeet
    //                     key={meet._id}
    //                     meet={meet}
    //                     pet={pet}
    //                 />
    //             ))    
    //     }
    // } },[pet])
    
    const handleChange = (e) => {
        setMeet(prevMeet => {
            const name = e.target.name
            let value = e.target.value

            // handle the checkbox
            if (name === "" && e.target.checked) {
                value = true
            } else if (name === "" && !e.target.checked) {
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

        createMeet(user, pet, meet)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Oh yeah!',
                    message: 'Great! The pet loves it!',
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
                <MeetForm 
                    meet={meet}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Give!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditMeetModal