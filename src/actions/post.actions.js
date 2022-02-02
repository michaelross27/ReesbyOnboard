import {
    ADD_POST_ERROR,
    ADD_POST_LOADING,
    ADD_POST_SUCCESS,
    EDIT_POST_ERROR,
    EDIT_POST_LOADING,
    EDIT_POST_SUCCESS,
    DELETE_POST_ERROR,
    DELETE_POST_LOADING,
    DELETE_POST_SUCCESS,
    FETCH_POST_ERROR,
    FETCH_POST_LOADING,
    FETCH_POST_SUCCESS

} from './types';
import axios from "axios";

const url =
  "http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480";

export const fetchPostsSuccess = (data) => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: data,
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        return axios.get(url)
        .then(response => {

        }).catch(error => {
            
        })
    }
}