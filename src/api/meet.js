import apiUrl from '../apiConfig'
import axios from 'axios'


export const meetUpdate = (data, user, id) => {
    return axios({
        method: 'PATCH',
        url: apiUrl + '/petmatch/',
        data: {
            pet: data,
        },
        headers: {
            Authorization: `Token token=${user.token}`,
        },
    })
}