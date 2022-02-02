import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const POSTS_ENDPOINT =
  "http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480";

const Post = ({ post }) => {
  return (
    <TableContainer>
      <TableRow>
        <TableCell scope="row">
          <input type="checkbox"></input>
        </TableCell>
        <TableCell>{post.id}</TableCell>
        <TableCell>{post.name}</TableCell>
        <TableCell>{post.email}</TableCell>
        <TableCell>{post.address}</TableCell>
        <TableCell>{post.phoneNumber}</TableCell>
        <TableCell>{post.jobTitle}</TableCell>
        <TableCell>
          <button type="button" class="btn btn-outline-info">
            EDIT
          </button>
        </TableCell>
        <TableCell>
          <button type="button" class="btn btn-outline-info">
            VIEW
          </button>
        </TableCell>
      </TableRow>
    </TableContainer>
  );
};

export default Post;
