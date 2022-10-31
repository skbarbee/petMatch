import React, { useEffect, useState } from 'react' 
import { useParams, useNavigate } from 'react-router-dom'
import { petDelete, petShow, petUpdate } from '../../api/pet'
import PetUpdate from './PetUpdate'

const PetShow = ({ user, msgAlert }) => {

    const [pet, setPet] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        petShow(user, id)
        .then((res) => {
            setPet(res.data.pet)
            console.log("this is the id", id)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Pet Failure' + error,
                variant: 'danger'
            })
        })
    },[] )

    // const toggleShowUpdate = () => {
    //     setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    // }

    // const handleChange = (event) => {
    //     // to keep the values as users input info 
    //     // first spread the current pet
    //     // then comma and modify the key to the value you need
    //     setPet({...pet, [event.target.name]: event.target.value})
    // }

    // const handleUpdatePet = () => {
    //     petUpdate(pet, user, id)
    //     .then(() => {
    //         msgAlert({
    //             heading: 'Success',
    //             message: 'Updating Pet',
    //             variant: 'success'
    //         })
    //     })
    //     .catch((error) => {
    //         msgAlert({
    //             heading: 'Failure',
    //             message: 'Update Pet Failure' + error,
    //             variant: 'danger'
    //         })
    //     })
    // }

    const handleDeletePet = () => {
        petDelete(user, id)
        .then(() => {
            setDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting a Pet',
                variant: 'success'
            })
            
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Deleting a Pet Failure' + error,
                variant: 'danger'
            })
        })
    }

    // oneliner
    if (deleted) navigate('/petmatch')

    return (
			<>
				<h3>Name: {pet.name}</h3>
                <p>Image: {pet.img}</p>
				<p>Type: {pet.typeOfPet}</p>
                <p>Breed: {pet.breed}</p>
                <p>Likes: {pet.likes}</p>
                <p>Available: {pet.available}</p>
                <p>Rating: {pet.rating}</p>
				{/* <button onClick={toggleShowUpdate}>Toggle Update</button>
				{isUpdateShown && (
					<PetUpdate
						pet={pet}
						handleChange={handleChange}
						handleUpdatePet={handleUpdatePet}
					/>
				)}
                <button onClick={handleDeletePet} >Delete</button> */}
			</>
		)
}

export default PetShow