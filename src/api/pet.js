import apiUrl from '../apiConfig'
import axios from 'axios'

export const petCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/petmatch/newpet',
		data: {
			pet: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const petIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/petmatch'
	})
}