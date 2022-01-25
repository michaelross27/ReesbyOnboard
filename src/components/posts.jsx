import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const POSTS_ENDPOINT =
  "http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480";

const renderData = (posts) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>
            <input type="checkbox"></input>
          </th>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Job Title</th>
          <th>Edit</th>
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={index}>
            <td>
              <input type="checkbox"></input>
            </td>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.email}</td>
            <td>{post.phoneNumber}</td>
            <td>{post.address}</td>
            <td>{post.jobTitle}</td>
            <td>
              <button type="button" class="btn btn-outline-info">
                EDIT
              </button>
            </td>
            <td>
              <button type="button" class="btn btn-warning">
                VIEW
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const pageSize = 10;

const Posts = () => {
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
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    axios.get(POSTS_ENDPOINT).then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
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

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementbtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementbtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementbtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementbtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  return (
    <div>
      {renderData(currentItems)}
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementbtn}
        {renderPageNumbers}
        {pageIncrementbtn}
        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Posts;
