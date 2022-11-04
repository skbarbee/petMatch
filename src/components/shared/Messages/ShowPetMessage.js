import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { deletePetMessage } from '../../../api/petMessages'
import EditPetMessageModal from '../../shared/Messages/EditPetMessageModal'

const ShowPetMessage = (props) => {
    const { petMessage, pet, user, msgAlert, triggerRefresh } = props
    console.log('this is the props', props)

    const [editPetMessageModalShow, setEditPetMessageModalShow] = useState(false)


    // // this will set the color of the card based on the condition
    // const setBgCondition = (cond) => {
    //     if (cond === 'new') {
    //         return({ width: '18rem', backgroundColor: '#b5ead7'})
    //     } else if (cond === 'used') {
    //         return({ width: '18rem', backgroundColor: '#ffdac1'})
    //     } else {
    //         return({ width: '18rem', backgroundColor: '#ff9aa2'})
    //     }
    // }

    // this function removes a toy, is only available to pet owner
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
            <Card className="m-2" >
                <Card.Header>{petMessage.name}</Card.Header>
                    {}
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