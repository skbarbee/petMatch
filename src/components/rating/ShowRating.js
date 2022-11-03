import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { deleteRating } from '../../api/rating'
import EditRatingModal from './EditRatingModal'

const ShowRating = (props) => {
    const { rating, pet, user, msgAlert, triggerRefresh } = props
    console.log('this is the props', props)

    const [editModalShow, setEditModalShow] = useState(false)

    // this function removes a rating, is only available to pet owner
    const destroyRating = () => {
        deleteRating(user, pet._id, rating._id)
            .then(() => {
                msgAlert({
                    heading: 'Pet rating deleted!',
                    message: 'Your pets rating has been deleted!',
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
            <Card className="m-2" style={setBgCondition(rating.condition)}>
                <Card.Header>{ rating.name }</Card.Header>
                <Card.Body>
                    <small>{ rating.description }</small><br/>
                    <small>
                        { rating.dateAgain ? 'Would love to!' : 'Not a chance'}
                    </small><br/>
                    <small>Condition: { rating.condition }</small>
                </Card.Body>
                <Card.Footer>
                    { 
                        user && pet.owner && user._id === pet.owner._id 
                        ?
                        <>
                            <Button
                                className="m-2" 
                                variant="warning"
                                onClick={() => setEditModalShow(true)}  
                            >
                                Edit Rating
                            </Button>
                            <Button 
                                className="m-2"
                                variant="danger"
                                onClick={() => destroyRating()}
                            >
                                Delete Rating
                            </Button>
                        </>
                        :
                        null
                    }
                </Card.Footer>
            </Card>
            <EditRatingModal 
                user={user}
                pet={pet}
                rating={rating}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
            />
        </>
    )
}

export default ShowRating