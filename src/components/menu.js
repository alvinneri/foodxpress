import React, { useState, Fragment, useEffect } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Items from "./items";
import { printIntrospectionSchema } from "graphql";

const FOOD_QUERY = gql`
  query FoodQuery($q: String!) {
    food(q: $q) {
      q
      hits {
        recipe {
          uri
          label
          image
          ingredients {
            text
          }
        }
      }
    }
  }
`;

const Menu = ({ q }) => {
  
  let query = Object.values({ q }) != "" ? { q } : { q: "meat" };

  return (
    <Fragment>
      <Query query={FOOD_QUERY} variables={query}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div className="d-flex-center">
                <h5>Fetching Data</h5>
              </div>
            );
          if (error) console.log(error);
          console.log(data);
          let food = data.food.hits;

          return (
            <div className="container d-lg-flex flex-wrap justify-content-around">
              {food.map((foods) => (
                <Items
                  key={foods.recipe.uri}
                  label={foods.recipe.label}
                  image={foods.recipe.image}
                  ingredients={foods.recipe.ingredients}
                />
              ))}
            </div>
          );
        }}
      </Query>
    </Fragment>
  );
};

export default Menu;
