import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const MeetForm = (props) => {
    // here are the props we're going to bring into our form
    const { meet, handleChange, heading, handleSubmit } = props
    
    return (
        <Container className="justify-content-center">
            <h3>Let's Hangout</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                    placeholder="Name?"
                    name="name"
                    id="name"
                    value= { meet.person }
                    onChange={ handleChange }
                />
                <Form.Label>When To Meet:</Form.Label>
                <Form.Control 
                    placeholder="When?"
                    name="date"
                    id="date"
                    value= { meet.when }
                    onChange={ handleChange }
                />
                <Form.Label>Where To Meet:</Form.Label>
                <Form.Control 
                    placeholder="Location"
                    name="address"
                    id="address"
                    value= { meet.where }
                    onChange={ handleChange }
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default MeetForm