import { Form, Button, Container } from 'react-bootstrap'

const PetForm = (props) => {
    // here are the props we're going to bring into our form
    const { pet, handleChange, heading, handleSubmit } = props
    console.log(pet.available)
    return (
        <Container className="justify-content-center">
            <h3>{ heading }</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                    placeholder="Name?"
                    name="name"
                    id="name"
                    value= { pet.name }
                    onChange={ handleChange }
                />
                <Form.Label>When To Meet:</Form.Label>
                <Form.Control 
                    placeholder="When?"
                    name="date"
                    id="date"
                    value= { pet.typeOfPet }
                    onChange={ handleChange }
                />
                <Form.Label>Where To Meet:</Form.Label>
                <Form.Control 
                    placeholder="Location"
                    name="adress"
                    id="adress"
                    value= { pet.breed }
                    onChange={ handleChange }
                />
                <Form.Check 
					// type='switch'
                    label="Are You Able to Meet-up?"
                    name="available"
                    defaultChecked={ pet.available }
                    onChange={ handleChange }
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default PetForm