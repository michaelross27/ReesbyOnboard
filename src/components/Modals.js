import React from 'react'

const FormModal = ({ closeModal, title, message }) => {
  return (
    <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter Your Name"
                value={this.state.name}
                onChange={this.handleOnValueChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="email"
                placeholder="Enter Your Email"
                value={this.state.email}
                onChange={this.handleOnValueChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="address"
                placeholder="Enter Your Address"
                value={this.state.address}
                onChange={this.handleOnValueChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="phoneNumber"
                placeholder="Enter Your Phone Number"
                value={this.state.phoneNumber}
                onChange={this.handleOnValueChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="jobTitle"
                placeholder="Enter Your Job Title"
                value={this.state.jobTitle}
                onChange={this.handleOnValueChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Add
              </button>
              <button
                type="button"
                className="btn btn-default"
                onClick={this.handleReset.bind(this)}
              >
                Cancel
              </button>
            </div>
          </form>
  )
}

export default FormModal