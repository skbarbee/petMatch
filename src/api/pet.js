import apiUrl from '../apiConfig'
import axios from 'axios'

export const petCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/pets',
		data: {
			pet: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}