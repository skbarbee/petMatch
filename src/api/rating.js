import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE
export const createRating = (user, petId, newRating) => {
    console.log('the user in createRating', user)
    console.log('the newRating in createRating', newRating)
	return axios({
		url: `${apiUrl}/ratings/${petId}`,
		method: 'POST',
		data: { rating: newRating }
	})
}

// UPDATE rating
export const updateRating = (user, petId, updatedRating) => {
    console.log('this is updatedRating', updatedRating)
	return axios({
		url: `${apiUrl}/ratings/${petId}/${updatedRating._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { rating: updatedRating }
	})
}

// DELETE rating by user
export const deleteRating = (user, petId, ratingId) => {
	return axios({
		url: `${apiUrl}/ratings/${petId}/${ratingId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}