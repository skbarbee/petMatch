import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const PetMessageForm = (props) => {
    // remove unused `pet`
    const {petMessage, pet, handleChange, handleSubmit, heading} = props
    
    // Remove console log or comment them out
    console.log('this is petMessage in the form\n',petMessage )
   
    
    
    return (
        <Container className="justify-content-center" style={{fontFamily:"Oswald"}}>
            <h3>{ heading }</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                    placeholder="what's your name?"
                    name="name"
                    id="name"
                    value= { petMessage.name }
                    onChange={ handleChange }
                />
                <Form.Label>Message:</Form.Label>
                <Form.Control 
                    placeholder="what would you like to say..."
                    name="message"
                    id="message"
                    value= { petMessage.message }
                    onChange={ handleChange }
                />
                <Form.Label>When are you available?:</Form.Label>
                <Form.Control 
                    placeholder="What times and days are you available?"
                    name="daysAvailable"
                    id="daysAvailable"
                    value= { petMessage.daysAvailable }
                    onChange={ handleChange }
                />
               
                <Button className=" m-3 justify-content-end" type="submit"> Submit </Button>
            </Form>
        </Container>
    )
}

export default PetMessageForm