import React from "react";
import {BrowserRouter, Switch,Route} from "react-router-dom"
import { Home } from "./pages";
import * as ROUTES from "./constants/routes";

function App() {
 return <>
  <BrowserRouter>
    <Switch>
      <Route path={ROUTES.HOME}>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
  </>
}

export default App;
