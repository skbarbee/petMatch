import apiUrl from '../apiConfig'
import axios from 'axios'

export const petCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/petmatch',
		data: {
			pet: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const petUpdate = (data, user, id) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + '/petmatch/' + id,
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
export const petShow = (user, id) => {
	console.log('this is running')
	return axios({
		method: 'GET',
		url: apiUrl + '/petmatch/' + id
	})
}
export const petDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/petmatch/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}