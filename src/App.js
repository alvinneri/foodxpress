import React, { Component, useEffect } from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Nav from "./components/nav";
import Hero from "./components/hero";
import Search from "./components/search";
import Login from "./components/login";

const client = new ApolloClient({
  uri: "https://edamam.herokuapp.com/graphql",
});

const App = () => {
  useEffect(() => {
    let db = openDatabase("foodxpress", "1.0", "database", 2 * 1024 * 1024);
    db.transaction(function (tx) {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id autoincrement unique, username, password)"
      );
      tx.executeSql(
        'INSERT INTO users (id, username, password) VALUES (1, "Admin" , "Admin")'
      );
    });
  }, []);
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/menu" component={Search} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
