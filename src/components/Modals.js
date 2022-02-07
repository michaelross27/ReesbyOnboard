import React, { Component, useState } from "react";
import ContactForm from "../containers/ContactForm";
import CreatePost from "../containers/CreatePost";
import "./modal.css";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import { hideModal } from "../actions/modalActions";
/* import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap'; */

//React Modal

/* const mapStateToProps = state => ({
  ...state.modal
})

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  closeModal() {
    this.props.hideModal()
  }
  render () {
  return (
    <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
          overlayClassName="modal fade show"
          bodyOpenClassName="modal-open"
          className="modal-dialog modal-dialog-centered"
        >
          <CreatePost
            closeModal={this.closeModal}
            {...this.props.modalProps}
          />
        </ReactModal>
        </div>
  )
  }
};

export default connect(mapStateToProps, null)(Modal) */

//ReactStrap Modal

/* class FormModal extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      isModalOpen: false,
    };
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Enter your Info</ModalHeader>
          <ModalBody>
            <div>
             <CreatePost /> 
            </div>
            
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default FormModal; */


// Plain Modal

/* function Modal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <span>
        <CreatePost />
        
    
    </span>
    
  );
} */

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <CreatePost />
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;
