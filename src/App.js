import React, { Component } from "react";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Nav from "./components/nav";
import Hero from "./components/hero";
import Search from "./components/search";

import Menu from "./components/menu";

const client = new ApolloClient({
  uri: "https://edamam.herokuapp.com/graphql",
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Nav />
        <Hero />
        <Search />
      </Router>
    </ApolloProvider>
  );
};

export default App;
