import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const RatingForm = (props) => {
    const {rating, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{ heading }</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label>Rating:</Form.Label>
                <Form.Control 
                    placeholder="Rate your date with this pet from 1-5"
                    name="scale"
                    type="number"
                    id="scale"
                    value= { rating.scale }
                    onChange={ handleChange }
                />
                <Form.Label>Comment:</Form.Label>
                <Form.Control 
                    placeholder="Rate your date..."
                    name="comment"
                    id="comment"
                    value= { rating.comment }
                    onChange={ handleChange }
                />
                <Form.Check 
                    label="Would you see again?"
                    name="meetAgain"
                    defaultChecked={ rating.meetAgain }
                    onChange={ handleChange }
                />
                {/* <Form.Select
                    aria-label="Rate this pet!"
                    name="condition"
                    defaultValue={rating.condition}
                    onChange={handleChange} */}
                {/* >
                    <option>Open this select menu</option>
                    <option value="Enjoyable">Enjoyable</option>
                    <option value="okay">okay</option>
                    <option value="ehhh..pass. ">ehhh..pass.</option>
                </Form.Select> */}
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default RatingForm