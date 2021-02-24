import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Players from "./components/Players/Players";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import { Provider } from "./Context";

import "./App.css";
import "./fonts.css";

const App = () => {
  return (
    <div className="App">
      <Provider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/players">
              <Players />
            </Route>
            <Route path="/scoreboard">
              <Scoreboard />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
