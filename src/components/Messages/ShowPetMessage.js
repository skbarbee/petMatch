// Unresolved merge in this file. I just acepted the HEAD here for testing
import React, { useState } from 'react'
// Remove unused `ButtonGroup`
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { deletePetMessage } from '../../api/petMessages'
import EditPetMessageModal from '../Messages/EditPetMessageModal'

const ShowPetMessage = (props) => {
    const { petMessage, pet, user, msgAlert, triggerRefresh } = props
    // Remove console logs or comment them out
    console.log('this is the props', props)
    console.log('this is the user in showPet\n', user)
    console.log('this is the petMessage \n', petMessage)

    const [editPetMessageModalShow, setEditPetMessageModalShow] = useState(false)
    // Remove unused `userString`
    // Also you will not need to shouldn't need to `stringify` here. The user is already set to state and being passed down via props. And remember state is just a POJO that we interact with a little differently but it's just a POJO. You already have a string value for the key `email`
    const userString = JSON.stringify(props.user.email)

    const destroyPetMessage = () => {
        deletePetMessage(user, pet._id, petMessage._id)
            .then(() => {
                msgAlert({
                    heading: 'Message deleted!',
                    message: 'Bye Bye message!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'Oh no!',
                    message: 'Something went wrong!',
                    variant: 'danger'
                })
            })
    }



    return (
        <>
            <Card className="m-1" border="primary">
                <Card.Header> <h3> Message from {petMessage.name} </h3> </Card.Header>
                <Card.Body>
                    <p> {petMessage.message} </p>
                    <p> {petMessage.daysAvailable}  </p>

                </Card.Body>
                <Card.Footer>
                    {/* You can do conditional rendering for this instead of a ternary
                    {user && pet.owner && user._id === pet.owner._id && <>button and other stuff here</>} */}
                    {
                        // Checks like this get unreadable (human) pretty quick. Best practice is to save this check in a well named variable and then refer to it. So here for example we are checking if there is a user,if the pet has and owner, and if the pet owner is the current user. Create a meaningful named var like `isCurrentUserPetOwner` this let's us know what this boolean check is looking for in a human readable way. Then just replace the check with the var reference.
                        // const isCurrentUserPetOwner = user && pet.owner && user._id === pet.owner._id
                        // {isCurrentUserPetOwner && <>button and other stuff here</>}
                        user && pet.owner && user._id === pet.owner._id
                            ?
                            <>
                                <Button
                                    className="m-2"
                                    variant="warning"
                                    onClick={() => setEditPetMessageModalShow(true)}
                                >
                                    Edit Message
                                </Button>
                                <Button
                                    className="m-2"
                                    variant="danger"
                                    onClick={() => destroyPetMessage()}
                                >
                                    Delete Message
                                </Button>
                            </>
                            :
                            null
                    }
                </Card.Footer>
            </Card>

            <EditPetMessageModal
                user={user}
                pet={pet}
                petMessage={petMessage}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
                show={editPetMessageModalShow}
                handleClose={() => setEditPetMessageModalShow(false)}
            />
        </>
    )
}

export default ShowPetMessage