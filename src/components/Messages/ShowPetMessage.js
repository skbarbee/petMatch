import React, { useState } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { deletePetMessage } from '../../api/petMessages'
import EditPetMessageModal from '../Messages/EditPetMessageModal'

const ShowPetMessage = (props) => {
    const { petMessage, pet, user, msgAlert, triggerRefresh } = props
    
   

    const [editPetMessageModalShow, setEditPetMessageModalShow] = useState(false)
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
                    <h4> { petMessage.message } </h4>
                    <h4> { petMessage.daysAvailable }  </h4>
                   
                </Card.Body>
                <Card.Footer>
                    { 
                        user && pet.owner && user._id === pet.owner._id 
                        ?
                        <>
                        <ButtonGroup>
                            <Button
                                className="m-1"
                                variant="secondary"
                                onClick={() => setEditPetMessageModalShow(true)}
                            >
                                {/* { user && petMessages.author && userString == rating.author } */}
                                Edit Message
                            </Button>
                            <Button 
                                className="m-1"
                                variant="danger"
                                onClick={() => destroyPetMessage()}
                            >
                                Delete Message
                            </Button>  
                            <Button 
                                className=" disabled m-1"
                                variant="info"
                                
                            >
                                Reply to Message
                            </Button> 
                         </ButtonGroup>
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