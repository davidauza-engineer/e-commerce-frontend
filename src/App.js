import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/home/Home";
import Sidebar from './components/layout/Sidebar'

const App = () => {
  return (
    <Router>
      <Switch>
        <Sidebar>
          <Route exact path="/" component={Home} />
          <Route exact path="/registrar" component={Register} />
          <Route exact path="/login" component={Login} />
        </Sidebar>
      </Switch>
    </Router>
  );
};

export default App;
