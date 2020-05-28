import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Layout/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Posts} exact />
          <Route path="/posts/:id" component={SinglePost} exact />
          <Route path="" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
