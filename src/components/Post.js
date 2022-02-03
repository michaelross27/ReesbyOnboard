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

const Post = ({ post }) => {
  return (
        <TableRow
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
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
            <button type="button" className="btn btn-outline-info">
              EDIT
            </button>
          </TableCell>
          <TableCell>
            <button type="button" className="btn btn-outline-info">
              VIEW
            </button>
          </TableCell>
        </TableRow>
      )}


export default Post;
