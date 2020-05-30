import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './components/auth/Register'

const App = () => {
  return (
    <Router>
      <Switch>        
        <Route exact path="/" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
