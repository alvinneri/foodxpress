import React, { useState, Fragment } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Items from "./items";

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
  console.log({ q });

  return (
    <Fragment>
      <Query query={FOOD_QUERY} variables={{ q }}>
        {({ loading, error, data }) => {
          if (loading)
            return (
              <div className="loadercenter">
                <h1>Loading</h1>
              </div>
            );
          if (error) console.log(error);
          console.log(data);
          let food = data.food.hits;

          return (
            <div className="container">
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
