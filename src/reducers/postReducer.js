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

} from '../actions/types';

const defaultState = {
    posts:[],
    error: null,
    isLoading: false,
};

const postReducer = ( state = defaultState, action) => {
    switch(action.type) {
        case ADD_POST_SUCCESS:
            return {...state, posts: [...state.posts, action.payload]};
        case ADD_POST_ERROR:
            return {...state, error: action.payload};
        case FETCH_POST_SUCCESS:
            return {...state, posts: action.payload};
        case FETCH_POST_LOADING:
            return {...state, isLoading: action.payload};
        case FETCH_POST_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}

export default postReducer;