import React, { Component, useState } from "react";
import Posts from "./containers/Posts";
/* import CreatePost from "./containers/CreatePost"; */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import { Button, Fab, CssBaseline } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import { showModal, hideModal } from "./actions/modalActions";
import { connect, useSelector, useDispatch } from "react-redux";
import { reset, initialize } from "redux-form";
import ModalContainer from "./containers/ModalRoot";
import Modal from "./components/Modals"
import { useActions } from "./actions/useActions";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const FloatingActionButtonContainer = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
`;


function App() {
  const [showModal, setShowModal] = useState(false);
  return (
      <>
      {showModal && (
        <Modal
          onCloseButtonClick={() => {
            setShowModal(false);
          }}
        />
      )}
        <div className="App">
        <Posts />
        <FloatingActionButtonContainer>
          <Fab color="primary" onClick={() => {
              setShowModal(true);
            }} >
            <AddIcon />
          </Fab>
        </FloatingActionButtonContainer>
        
      </div>
      </>
    );
  }
  

  
export default App;
