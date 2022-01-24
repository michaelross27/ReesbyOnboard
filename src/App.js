import React, { useEffect, useState } from "react";
import Posts from './components/posts';
import logo from "./logo.svg";
import "./App.css";
import styled from 'styled-components'
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

function App() {
    return (
        <div>
            <Posts />
        </div>
    );
}

export default App
