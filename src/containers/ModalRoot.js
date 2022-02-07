import React from 'react'
import { connect } from 'react-redux'
import ReactModal from 'react-modal'

import FormModal from '../components/Modals'

const mapStateToProps = state => ({
  ...state.modal
})

class ModalContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: props.modalProps.open
    }
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal() {
    this.props.hideModal()
  }

  render() {
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
          <FormModal
            closeModal={this.closeModal}
            {...this.props.modalProps}
          />
        </ReactModal>
      </div>
    )
  }
}

export default connect(mapStateToProps, null)(ModalContainer)