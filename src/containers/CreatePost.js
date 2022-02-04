import React, { Component } from "react";
import { createPost } from "../actions/post.actions";
import { connect } from "react-redux";
import "./CreatePost.css";

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      jobTitle: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state);
  }

  handleOnValueChange(event) {
    this.setState({
        
      [event.target.name]: target.value,
    });
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      jobTitle: "",
    });
  }

  render() {
    return (
      <div className="create-post">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (post) => {
      dispatch(createPost(post));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
