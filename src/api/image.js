import apiUrl from '../apiConfig'
import axios from 'axios'

export const imageCreate = async (petId, user, imgFile) => {
	await axios({
		method: 'POST',
		url:  `${apiUrl}/image/${petId}`,
		data: {
			// body:JSON.stringify({data:base64EncodedImage})
			 image: imgFile
		},
		headers: {
			Authorization: `Token token=${user.token}`,
			
		},
	})
}