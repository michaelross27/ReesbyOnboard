import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import posts from './postReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  postsData: posts, 
  modalReducer: modalReducer,
  form: formReducer,
});

export default rootReducer;