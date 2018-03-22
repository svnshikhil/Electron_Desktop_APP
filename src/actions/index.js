import axios from 'axios'
import config from './config'
import * as types from '../constants'
import _ from 'lodash'
export const getAuth = () => {
    if (localStorage.getItem('token')) {
        return {
            "headers": {
                'auth': localStorage.getItem('token')
            }
        }
    }
    else {
        return null
    }
}

export const loginAction = (payload) => {
    return (dispatch) => {
        dispatch({
            type: types.LOGIN_FETCH,
        })
        axios.post(config.SERVER_API_URL + config.LOGIN_API, payload)
            .then(function (response) {
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    response
                })
            })
            .catch(function (error) {
                dispatch({
                    type: types.LOGIN_FAILED,
                    error
                })
            });
    };

}
