import apiUrl from '../apiConfig'
import axios from 'axios'

export const imageCreate = async (petId, user, imgFile) => {
	await axios({
		method: 'POST',
		url: `${apiUrl}/image/${petId}`,
		data: {

			image: imgFile
		},
		headers: {
			Authorization: `Token token=${user.token}`,

		},
	})
}