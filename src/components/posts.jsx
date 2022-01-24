import React, { useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";

const POSTS_ENDPOINT =
  "http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480";

const pageSize = 15;

const Posts = () => {
  const [posts, setPosts] = useState();
  const [paginatedPosts, setpaginatedPosts] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  useEffect(() => {
    axios.get(POSTS_ENDPOINT).then((response) => {
      console.log(response.data);
      setPosts(response.data);
      setpaginatedPosts(_(response.data).slice(0).take(pageSize).value());
    });
  }, []);

  const pageCount = posts ? Math.ceil(posts.length/pageSize) : 0;
  if (pageCount ===1) return null;
  const pages = _.range(1, pageCount+1);
  const pagination = (pageNo)=>{
      setcurrentPage(pageNo);
      const startIndex = (pageNo - 1) * pageSize;
      const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
      setpaginatedPosts(paginatedPost);
  }

  return (
  <div>
    {!paginatedPosts ? (
      "No Data Found"
    ) : (
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
          {paginatedPosts.map((post, index) => (
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
    )}
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li className={
              page === currentPage? "page-item active" : "page-item"
          }><p className="page-link" onClick={()=>pagination(page)}>{page}</p></li>
        ))}
      </ul>
    </nav>
  </div>
  );
};

export default Posts;
