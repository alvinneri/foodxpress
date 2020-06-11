import React, { Component, useEffect } from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/nav";
import Hero from "./components/hero";
import Search from "./components/search";
import Login from "./components/login";
import Signup from "./components/signup";
import Order from "./components/order";

const client = new ApolloClient({
  uri: "https://edamam.herokuapp.com/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/menu" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/order" component={Order} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
