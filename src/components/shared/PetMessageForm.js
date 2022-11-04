import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const PetMessageForm = (props) => {
    const {petMessages, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{ heading }</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                    placeholder="what's your name?"
                    name="name"
                    id="name"
                    value= { petMessages }
                    onChange={ handleChange }
                />
                <Form.Label>Message:</Form.Label>
                <Form.Control 
                    placeholder="what would you like to say..."
                    name="description"
                    id="description"
                    value= { petMessages }
                    onChange={ handleChange }
                />
                { petMessages }
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default PetMessageForm