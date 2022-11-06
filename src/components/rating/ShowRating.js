import React, { useState } from 'react'
import { Card, Button, ButtonGroup } from 'react-bootstrap'
import { deleteRating } from '../../api/rating'
import EditRatingModal from './EditRatingModal'

const ShowRating = (props) => {
    const { rating, pet, user, msgAlert, triggerRefresh } = props
    console.log('this is the rating.author\n', rating.author)
    console.log('this is the user.email\n', props.user.email)
    const [editModalShow, setEditModalShow] = useState(false)

    const userString = JSON.stringify(props.user.email)

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
            <Card className="m-2" >
                <Card.Header>{rating.scale} {pet.ratingIcon} by {rating.author} </Card.Header>
                <Card.Body>
                    <h4>Comment : {rating.comment}</h4><br />
                    <h4>
                        Would you want to meet again? : {rating.meetAgain ? 'Would love to!' : 'Not a chance'}
                    </h4><br />
                    <small></small>
                </Card.Body>
                <Card.Footer className="justify-content-end">
                    {
                        user && rating.author && userString == rating.author
                            ?
                            <>
                                <ButtonGroup>
                                    <Button size='sm'
                                        className=" m-1 "
                                        variant="secondary"
                                        onClick={() => setEditModalShow(true)}
                                    >
                                        Edit Rating
                                    </Button>
                                    <Button
                                        className=" m-1 "
                                        size='sm'
                                        variant="danger"
                                        onClick={() => destroyRating()}
                                    >
                                        Delete Rating
                                    </Button>
                                </ButtonGroup>
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