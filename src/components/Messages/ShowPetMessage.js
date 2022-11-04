import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { deletePetMessage } from '../../api/petMessages'
import EditPetMessageModal from '../Messages/EditPetMessageModal'

const ShowPetMessage = (props) => {
    const { petMessage, pet, user, msgAlert, triggerRefresh } = props
    console.log('this is the props', props)
    console.log('this is the user in showPet\n', user)
    console.log('this is the petMessage \n', petMessage)

    const [editPetMessageModalShow, setEditPetMessageModalShow] = useState(false)


  
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
                <Card.Header> Message from {petMessage.name} </Card.Header>
                <Card.Body>
                    <p> { petMessage.message } </p>
                    <p> { petMessage.daysAvailable }  </p>
                   
                </Card.Body>
                <Card.Footer>
                    { 
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