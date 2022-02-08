import React, { Component, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./Posts.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Post from "../components/Post";
import { fetchPosts } from "../actions/post.actions";
import FormModal from "../components/Modals";
import { reset, initialize } from "redux-form";
import { useActions } from "../actions/useActions";
import { history } from "../index";

const url =
"http://malih-auth.ap-southeast-2.elasticbeanstalk.com/api/v1/getAllUploadedEmails/listId/480"

const RenderData = (posts) => {
  const dispatch = useDispatch();
  const [openForm, setOpenForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (post) => {
    history.push({
      pathname: `/edit/${post.id}`,
      state: {
        post: post,
      }
    })
  }


/*   const actions = {
    edit: (post) => {
      setIsEditing(true);
      dispatch(initialize("formModal", post));
      form.open();
    },
    view: {
      open: (post) => {
        setPostDetails(post);
      },
      close: () => cleanPostDetails(),
    },
  }; */

  const form = {
    open: () => setOpenForm(true),
    close: () => {
        dispatch(reset("formModal"));
        setOpenForm(false);
    },
  };

  return (
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
          {posts.map((post, index) => (
            <TableRow
              key={index}
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
                <button
                  color="primary"
                  variant="outlined"
                  onClick={handleEdit}
                >
                  EDIT
                </button>
              </TableCell>
              <TableCell>
                <button
                  color="primary"
                  variant="contained"
                  onClick={() => this.handleEdit.bind(this)}
                >
                  VIEW
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const pageSize = 10;

const Posts = (data) => {
  const [posts, setPosts] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(10);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://malih-auth.ap-southeast-2.elasticbeanstalk.com/api/v1/getAllUploadedEmails/listId/480', {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYWxpaC50ZXN0LmVtYWlsLjFAZ21haWwuY29tIiwiaWF0IjoxNjQ0Mjc0Nzg1LCJleHAiOjE2NDQzNjExODV9.pfcJy7lkNw1RzzOvZXEjds9LCOIHpmCExxVPdVuWCS8gOiRdzb8j2JivSkrW6zoFV6ZsSJvvVcuVJy1u-fbx1w'
        }
      });
      console.log(response.data);
      setPosts(response.data);
    };
    fetchData();
  }, []);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <div>
      {RenderData(currentItems)}
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {minPageNumberLimit >= 1 && <li onClick={handlePrevbtn}> &hellip; </li>}
        {renderPageNumbers}
        {pages.length > maxPageNumberLimit && (
          <li onClick={handleNextbtn}> &hellip; </li>
        )}
        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postsData.posts || [],
    error: state.postsData.error || null,
    isLoading: state.postsData.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => {
      dispatch(fetchPosts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
