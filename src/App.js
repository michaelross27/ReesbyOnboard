import React, { Component } from "react";
import Posts from "./containers/Posts";
import CreatePost from "./containers/CreatePost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      pathname: '',
    }
    this.notifyPathname = this.notifyPathname.bind(this);
  }

  notifyPathname(pathname) {
    this.setState({
      pathname: pathname,
    });
  }

  render() {
    return (
        <div className="App">
          <Nav notifyPathname={this.notifyPathname}
          pathname={this.state.pathname}/>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/create"  element={<CreatePost />} />
            <Route path="/edit/:id"  element={<CreatePost />} />
          </Routes>
        </div>
    );
  }
}

export default App;
