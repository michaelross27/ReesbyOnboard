import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import axios from "axios";
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from "react-table";

const POSTS_ENDPOINT =
  "http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480";


  function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page, // Instead of using 'rows', we'll use page,
      // which has only the rows for the active page
  
      // The rest of these things are super handy, too ;)
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 2 },
      },
      usePagination
    )

    const [posts, setPosts] = useState([]);
    useEffect(() => {
      axios.get(POSTS_ENDPOINT).then((response) => {
        console.log(response.data);
        setPosts(response.data);
      });
    }, []);
  
    // Render the UI for your table
    return (
      <>
        <pre>
          <code>
            {JSON.stringify(
              {
                pageIndex,
                pageSize,
                pageCount,
                canNextPage,
                canPreviousPage,
              },
              null,
              2
            )}
          </code>
        </pre>
{/*         <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
        </table> */}
        <table>
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
          {posts.map((post) => (
            <tr>
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
                <button className="edit">EDIT</button>
              </td>
              <td>
                <button className="view">VIEW</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
          </button>{' '}
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
            {'>>'}
          </button>{' '}
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(page)
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </>
    )
  }

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(POSTS_ENDPOINT).then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  }, []);

   return (
    {<div className="app-container">
      <table>
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
          {posts.map((post) => (
            <tr>
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
                <button className="edit">EDIT</button>
              </td>
              <td>
                <button className="view">VIEW</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>

return (
  <Styles>
    <Table columns={columns} data={data} />
  </Styles>
)
}}
export default App
