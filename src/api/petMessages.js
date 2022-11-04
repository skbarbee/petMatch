import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE
export const createPetMessage = (user, petId, newPetMessage) => {
    console.log('the user in createPetMessage', user)
    console.log('the newPetMessage in createPetMessage', newPetMessage)
	return axios({
		url: `${apiUrl}/petMessages/${petId}`,
		method: 'POST',
		data: { petMessages: newPetMessage }
	})
}

// UPDATE message
export const updatePetMessage = (user, petId, updatedPetMessage) => {
    console.log('this is updatedPetMessage', updatedPetMessage)
	return axios({
		url: `${apiUrl}/petMessages/${petId}/${updatedPetMessage._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { petMessages: updatedPetMessage }
	})
}

// DELETE message
export const deletePetMessage = (user, petId, petMessageId) => {
	return axios({
		url: `${apiUrl}/petMessages/${petId}/${petMessageId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}