import React from "react";
import { BrowserRouter as Rouuter, Route, Redirect } from "react-router-dom";

import "./App.css";
import Users from "./components/User/Users";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import Nav from "./components/Nav/Nav";
import AddTweetsForm from "./components/AddTweetsForm/AddTweetsForm";
import Tweets from "./components/Tweets/Tweets";

function App() {
  return (
    <div className="App">
      <Rouuter>
        <Nav />

        <Route path="/users" component={Users} />
        <Route path="/addusers" component={AddUserForm} />
        <Route path="/tweets" component={Tweets} />
        <Route path="/addtweets" component={AddTweetsForm} />
        <Route path="/" exact render={() => <Redirect to="/users" />} />
      </Rouuter>
    </div>
  );
}

export default App;
