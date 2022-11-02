import apiUrl from '../apiConfig'
import axios from 'axios'

// CREATE
export const createToy = (user, petId, newMeet) => {
    console.log('the user in createToy', user)
    console.log('the newToy in createToy', newMeet)
	return axios({
		url: `${apiUrl}/petmatch/${petId}`,
		method: 'POST',
		data: { toy: newToy }
	})
}