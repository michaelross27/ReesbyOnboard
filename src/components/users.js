import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../actions/usersActions';
import Posts from '../containers/Posts';
import "./style.css";

 class users extends Component {
    componentDidMount(){
        this.props.getUsers()
        
    }
    render() {
        const {users} = this.props.users
        console.log(users)

        
        return (
            <div>
                < Posts />
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(users)