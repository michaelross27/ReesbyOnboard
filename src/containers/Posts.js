import React, { Component, useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./Posts.css";
import { posts } from "../data";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Post from "../components/Post";

class Posts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isLoading) {
      return <p>Loading...</p>;
    } else if (this.props.error) {
      return (
        <div className="alert alert-danger" role="alert">
          {this.props.error.message}
        </div>
      );
    } else {
      return (
        <div>
          <Table className="table table-striped">
            <TableHead>
              <TableRow>
                <TableCell>
                  <input type="checkbox"></input>
                </TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.posts.map((post, index) => {
                return (
                  <React.Fragment key={post.id}>
                    <Post post={post} />
                  </React.Fragment>
                );
              })}
            </TableBody>
          </Table>
        </div>
      );
    }
  }
}




const mapStateToProps = (state) => {
  return {
    posts: state.postsData.posts || [],
    error: state.postsData.error || null,
    isLoading: state.postsData.isLoading,
  };
};

export default connect(mapStateToProps, null)(Posts);
