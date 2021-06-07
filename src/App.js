import React from "react";

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Component
import Home from "./components/home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/fibonacci">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
