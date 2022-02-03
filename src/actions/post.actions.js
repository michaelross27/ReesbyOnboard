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

export const fetchPostsLoading = (data) => {
    return {
    type: FETCH_POST_LOADING,
    payload: data,        
    }
}

export const fetchPostsError = (data) => {
    return {
    type: FETCH_POST_ERROR,
    payload: data,        
    }
}

const normalizeResponse = (data) => {
    const arr = data.map(item => {
        const keys = Object.keys(item);

        keys.forEach(k => {
            item[k.toLowerCase()] = item[k];
            delete item[k];
        });
        return item;
    });
    return arr;
}

export const fetchPosts = () => {
    let isLoading = true;
    return (dispatch) => {
        dispatch(fetchPostsLoading(isLoading));
        return axios.get(url)
        .then(response => {
            const data = normalizeResponse(response.data);
            dispatch(fetchPostsSuccess(data));
            isLoading = false;
            dispatch(fetchPostsLoading(isLoading));
        }).catch(error => {
            const errorPayload = {};
            errorPayload ['message'] = error.response.data.message;
            errorPayload ['status'] = error.response.status;

            dispatch(fetchPostsError(errorPayload));
            isLoading = false;
            dispatch(fetchPostsLoading(isLoading));
        })
    }
}