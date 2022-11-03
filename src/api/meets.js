import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE
export const createMeet = (user, petId, newMeet) => {

	return axios({
		url: `${apiUrl}/meets/${petId}`,
		method: 'POST',
		data: { meet: newMeet }
	})
}

// UPDATE 
export const updateMeet = (user, petId, updatedMeet) => {
	return axios({
		url: `${apiUrl}/meets/${petId}/${updatedMeet._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { meet: updatedMeet }
	})
}

// DELETE 
export const deleteMeet = (user, petId, meetId) => {
	return axios({
		url: `${apiUrl}/meets/${petId}/${meetId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		}
	})
}