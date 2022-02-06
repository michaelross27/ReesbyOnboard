import React, { Component, useState } from "react";
import Posts from "./containers/Posts";
/* import CreatePost from "./containers/CreatePost"; */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { Button, Fab, CssBaseline } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import { showModal, hideModal } from "./actions/modalActions";
import { connect, useSelector, useDispatch } from 'react-redux';
import { reset, initialize } from "redux-form";
import ModalContainer from "./containers/ModalRoot";
import { useActions } from "./actions/useActions";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { posts } from "./data";

const FloatingActionButtonContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

const mapDispatchToProps = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }));
  },
});

function App() {
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const form = {
    open: () => setOpenForm(true),
    close: () => {
        dispatch(reset("contactForm"));
        setOpenForm(false);
    },
};

const actions = {
  create: () => {
    setIsEditing(false);
    dispatch(initialize("formModal", {}));
    form.open();
},

}

  return (
    <div className="App">
      <Posts />
      <FloatingActionButtonContainer>
        <Fab color="primary" onClick={actions.create}>
          <AddIcon />
        </Fab>
      </FloatingActionButtonContainer>
      <ModalContainer /* hideModal={this.props.hideModal} */ />
    </div>
  );
}

export default connect(null, mapDispatchToProps)(App);
