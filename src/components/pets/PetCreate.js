import React, { useState } from 'react'
import { petCreate } from '../../api/pet'
import { useNavigate } from 'react-router-dom'
import PetForm from '../shared/PetForm'

const PetCreate = ({ user, msgAlert }) => {
	const navigate = useNavigate()

	const defaultPet = {
		name: '',
		img: '',
		type: '',
		breed: '',
		likes: [],
		available: false,
		ratings: [],
	}
	const [pet, setPet] = useState(defaultPet)

	const handleCheck = () => {
	
		setPet(prevPet => {
			return { ...prevPet, available: !prevPet.available }
		})
	}

	const handleChange = (e) => {
		setPet(prevPet => {
			const updatedName = e.target.name
			let updatedValue = e.target.value
		

			if (updatedName === 'available' && e.target.checked) {
				updatedValue = true
			} else if (updatedName === 'available' && !e.target.checked) {
				updatedValue = false
			}

			if (updatedName === "typeOfPet") {
				updatedValue = e.target.value.toUpperCase()
			} else if (updatedName === "name") {
				updatedValue = e.target.value
			} else if (updatedName === "breed") {
				updatedValue = e.target.value
			}
			const updatedPet = { [updatedName]: updatedValue }
		
			return { ...prevPet, ...updatedPet }
		})
	}
	const handleCreatePet = (e) => {
		e.preventDefault()

		petCreate(pet, user)
			//    .then(res => { navigate(`/petmatch/${res.data.pet._id}`)})
			.then(res => { navigate(`/petmatch`) })
			.then(() => {
				msgAlert({
					heading: 'Success',
					message: 'Create Pet',
					variant: 'success'
				})
			})
			.catch((error) => {
				
				msgAlert({
					heading: 'Failure',
					message: 'Create Pet Failure' + error,
					variant: 'danger'
				})
			})
	}
	return (
		<>
			<PetForm
				pet={pet}
				handleChange={handleChange}
				heading="Add a new pet!"
				handleSubmit={handleCreatePet}
				handleCheck={handleCheck}
			/>
		</>
	)
}

export default PetCreate