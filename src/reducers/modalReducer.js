import ActionTypes from "../actions/ActionTypes";
import {  ModalActions } from '../actions/ActionTypes';
import { showModal, hideModal } from "../actions/modalActions";

const initialState = {
  modalType: null,
  modalProps: {
    open: false,
  },
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case showModal:
      return {
        ...state,
        modal: true,
      };
    case hideModal:
      return {
        ...state,
        modal: false,
      };
    default:
      return state;
  }
}

export default modalReducer;

