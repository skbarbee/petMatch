import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE
export const createRating = (user, petId, newRating) => {
	// Remove console logs or comment them out
	console.log('the user in createRating', user)
	console.log('the newRating in createRating', newRating)
	console.log('petId', petId)
	return axios({
		method: 'POST',
		url: `${apiUrl}/rating/${petId}`,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { rating: newRating },
	})
}

// UPDATE rating
export const updateRating = (user, petId, updatedRating) => {
	// Remove console logs or comment them out
	console.log('this is updatedRating', updatedRating)
	return axios({
		url: `${apiUrl}/rating/${petId}/${updatedRating._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { rating: updatedRating },
	})
}

// DELETE rating by user
export const deleteRating = (user, petId, ratingId) => {
	return axios({
		url: `${apiUrl}/rating/${petId}/${ratingId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}