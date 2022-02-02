import React, { Component } from "react";
import './CreatePost.css';

class CreatePost extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="create-post">
                <form>
                    <div className="form-group">
                        <input 
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Enter Your Name" 
                        />
                    </div>
                    <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Enter Your Email" 
                        />
                    </div>
                    <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        name="address"
                        placeholder="Enter Your Address" 
                        />
                    </div>
                    <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        placeholder="Enter Your Phone Number" 
                        />
                    </div>
                    <div className="form-group">
                    <input 
                        type="text"
                        className="form-control"
                        name="jobTitle"
                        placeholder="Enter Your Job Title" 
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                        <button type="button" className="btn btn-default">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreatePost;