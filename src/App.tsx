import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home,Profile} from "./pages";
import * as ROUTES from "./constants/routes";
import { HeaderContainer } from "./containers";

function App() {
  return (
    <>
      <HeaderContainer />
      <Router>
        <Switch>
          <Route path={ROUTES.HOME} exact>
            <Home />
          </Route>
          <Route path={ROUTES.PROFILE}>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
