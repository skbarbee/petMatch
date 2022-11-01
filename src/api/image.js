import apiUrl from '../apiConfig'
import axios from 'axios'

export const imageCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/image/${petId}',
		data: {
			//body:{JSON.stringify({data:base64EncodedImage})}
			image: data
		},
		headers: {
			Authorization: `Token token=${user.token}`,
			//content-type: 'application/json'
		},
	})
}