/* */

/* */
import AT from '../actions/actionTypes'
import client from '../base'
import { createAction } from './utils'

export default {
    getDirectory: (payload) => {
        return (dispatch) => {
            dispatch(createAction(AT.GET_DIRECTORY)(payload))
            const { classId } = payload
            return client.get(`/api/pad/${classId}`)
                .then(response => {
                    dispatch(createAction(AT.GET_DIRECTORY_SUCCESS)(({ directory: response.data })))
                })
                .catch(error => {
                    dispatch(createAction(AT.GET_DIRECTORY_ERROR)(error))
                    return Promise.reject(error.response)
                })
        }
    },

    joinClass: (payload) => createAction(AT.JOIN_CLASS)(payload)
}

