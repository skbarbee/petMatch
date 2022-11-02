import React from 'react'

const PetUpdate = ({ pet, handleChange, handleUpdatePet }) => {
	return (
		<>
			<input 
            type='text' 
            value={pet.name} 
            name='name' 
            onChange={handleChange} 
            />
            <input type='string' 
            value={pet.img}
            name='img'
            onChange={handleChange}
            />
			<input 
            type='text' 
            value={pet.typeOfPet} 
            name='typeOfPet' 
            onChange={handleChange} 
            />
            <input 
            type='text' 
            value={pet.breed} 
            name='breed' 
            onChange={handleChange} 
            />
            <input 
            type='text' 
            value={pet.likes} 
            name='likes' 
            onChange={handleChange} 
            />
            <input 
            type='boolean'
            value={pet.available}
            name='available'
            />
            {/* <input 
            type='mongoose.Schema.Types.ObjectId'
            value={[ratingSchema]}
            name='rating'
            /> */}
			<button onClick={handleUpdatePet}>Update Pet</button>
		</>
	)
}

export default PetUpdate