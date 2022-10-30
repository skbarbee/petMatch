import React, { useState } from 'react' 
import { petCreate } from '../../api/pet'
import { useNavigate } from 'react-router-dom'

const PetCreate = ({user, msgAlert}) => {
	const navigate = useNavigate()

    const defaultPet = {
		name:'',
		img: '',
		type: '',
		breed: '',
		likes: [],
		available: true ,
    }
	const [pet, setPet] = useState(defaultPet)

	return (
		<>
			<h2>this is where you will create a new pet</h2>
		</>
	)
}

export default PetCreate