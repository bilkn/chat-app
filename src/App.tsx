import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"
import { Home } from "./pages";
import * as ROUTES from "./constants/routes";

function App() {
  <>
  <Router>
    <Switch>
      <Route path={ROUTES.HOME}>
        <Home />
      </Route>
    </Switch>
  </Router>
  </>
}

export default App;
