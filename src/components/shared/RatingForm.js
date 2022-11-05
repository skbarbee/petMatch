import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const RatingForm = (props) => {
    const {rating, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center" style={{fontFamily:"Oswald"}}>
          
            <Form onSubmit={ handleSubmit }>
                 <h3>{ heading }</h3>
                <Form.Label>Rating:</Form.Label>
                <Form.Select
                    aria-label="Rate this pet!"
                    name="scale"
                    type="number"
                    id="scale"
                    value= { rating.scale }
                    onChange={ handleChange }
                    >
                <option>Open this select menu</option>
                    <option value="1"  >1</option>
                    <option value="2"  >2</option>
                    <option value="3"  >3</option>
                    <option value="4"  >4</option>
                    <option value="5"  >5</option>
                    </Form.Select>
                <Form.Label>Comment:</Form.Label>
                <Form.Control 
                    placeholder="Tell us about your date..."
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
                    
                    name="condition"
                    defaultValue={rating.condition}
                    onChange={handleChange}
                >
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