//eslint-disable-next-line
/* eslint-disable */
import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import RecipeDetail from './recipe_detail';
//inputs: array of recipes
//outputs: selected recipe

const RecipeList = ({recipes}) => {
  return (
    <div>
      <RecipeDetail />
      <Grid>
        <Row>
          {recipes.map((recipe, id)=>{
              return (
                <Col xs={6} md={4} key={id}>
                  <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>{recipe.name}</h3>
                  </Thumbnail>
                </Col>
              )
            })}
        </Row>
      </Grid>
    </div>
  )
};

export default RecipeList;
