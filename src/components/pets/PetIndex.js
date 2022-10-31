import React, { useEffect, useState } from 'react' 
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { petIndex } from '../../api/pet'

const cardContainerLayout = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const PetIndex = ({ user, msgAlert }) => {

    const [allPets, setAllPets] = useState([])

    useEffect(() => {
        petIndex(user)
        .then(res => {
            setAllPets(res.data.pets)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Pets Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

	const dogPic = require('../shared/defaultDog.png')
	const catPic = require('../shared/defaultCat.png')
	
	const setImage = (type)=>{
		if(type == "Dog"){
			return <img fluid  src={dogPic} />
		}else{
			return <img fluid  src={catPic} />
		}
	}
    const petCards = allPets.map(pet => (
        <Card key={ pet.id } style={{ width: '30%', margin: 5 }}>
            <Card.Header>{ pet.fullTitle }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={ `/petmatch/${pet._id}` }>View { pet.name }</Link>
					{ pet.typeOfPet}
					{setImage(pet.typeOfPet)}
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <div className='container-md' style={ cardContainerLayout }>
           
            { petCards }
        </div>
    )
}

export default PetIndex