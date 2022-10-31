import { Form, Button, Container } from 'react-bootstrap'

const PetForm = (props) => {
    // here are the props we're going to bring into our form
    const { pet, handleChange, heading, handleSubmit } = props

    return (
        <Container className="justify-content-center">
            <h3>{ heading }</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label>Name:</Form.Label>
                <Form.Control 
                    placeholder="what's your pet's name?"
                    name="name"
                    id="name"
                    value= { pet.name }
                    onChange={ handleChange }
                />
                <Form.Label>Type:</Form.Label>
                <Form.Control 
                    placeholder="Cat, Dog, Iguana?"
                    name="typeOfPet"
                    id="typeOfPet"
                    value= { pet.typeOfPet }
                    onChange={ handleChange }
                />
                <Form.Label>Breed:</Form.Label>
                <Form.Control 
                    placeholder="Border Collie, Tabby Cat, Good Boy"
                    name="breed"
                    id="breed"
                    value= { pet.breed }
                    onChange={ handleChange }
                />
				<Form.Label>Likes:</Form.Label>
                <Form.Control 
                    placeholder="What does your pet like to do?"
                    name="likes"
                    id="likes"
                    value= { pet.likes }
                    onChange={ handleChange }
                />
                <Form.Check 
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