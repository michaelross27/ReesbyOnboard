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
    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <input type="checkbox"></input>
                </TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Job Title</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.posts.map((post) => {
                return <Post key={post.id} post={post} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.postsData.posts || [],
  };
};

export default connect(mapStateToProps, null)(Posts);
