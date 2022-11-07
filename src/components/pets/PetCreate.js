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
		// Remove console logs or comment them out
		console.log('clicked')
		setPet((prevPet) => {
			return { ...prevPet, available: !prevPet.available }
		})
	}

	const handleChange = (e) => {
		setPet(prevPet => {
			const updatedName = e.target.name
			let updatedValue = e.target.value
			// Remove console logs or comment them out
			console.log(updatedValue)

			// Remove unused `available` check here if the above `handleCheck` is working
			if (updatedName === 'available' && e.target.checked) {
				updatedValue = true
			} else if (updatedName === 'available' && !e.target.checked) {
				updatedValue = false
			}

			if (updatedName === 'typeOfPet') {
				updatedValue = e.target.value.toUpperCase()
			} else if (updatedName === 'name') {
				updatedValue = e.target.value
			} else if (updatedName === 'breed') {
				updatedValue = e.target.value
			}
			const updatedPet = { [updatedName]: updatedValue }
			// Remove console logs or comment them out
			console.log(updatedPet)
			return { ...prevPet, ...updatedPet }
		})
	}
	const handleCreatePet = (e) => {
		e.preventDefault()

		petCreate(pet, user)
			//    .then(res => { navigate(`/petmatch/${res.data.pet._id}`)})
			// remove unused `res` from  scope
			.then(res => { navigate(`/petmatch`) })
			.then(() => {
				msgAlert({
					heading: 'Success',
					message: 'Create Pet',
					variant: 'success'
				})
			})
			.catch((error) => {
				console.log(error)
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