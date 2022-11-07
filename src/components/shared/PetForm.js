import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import PetCheckBox from './PetCheckBox'


const PetForm = (props) => {
    // here are the props we're going to bring into our form
    const { pet, handleChange, heading, handleSubmit, handleCheck } = props
    // Remove console log or comment them out
    console.log(pet.available)

    // const [checked, setChecked] = React.useState(false);

    // const handleCheck = () => {
    //     setChecked(!checked);
    // }

    return (
        <Container className="justify-content-center" style={{fontFamily:"Oswald"}}>
            
            <Form onSubmit={ handleSubmit }>
            <h2>{ heading }</h2>
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
                <br></br>
                <PetCheckBox
                    label="Available to meet up"
                    value={pet.available}
                    onChange={handleCheck}
                /> 
                <br></br>
                <br></br>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default PetForm