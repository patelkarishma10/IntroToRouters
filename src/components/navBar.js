import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

import { CreateRecipe } from './createRecipe';
import { RecipeList } from './recipeList';
import { MoreInfo } from './moreInfo';
// import { Home } from './home';

export class NavBar extends Component {

      constructor() {
    super();
    this.state = {
      data: []
    };
  }
  

  onLoad = () => {
        axios
      .get("http://localhost:5000/recipe/all")
      .then(response => {
        this.setState({
          data: response.data
          
        });
      })
 
      }

      componentDidMount() {
        this.onLoad();

      }

      render() {
        return (
          <div>
            <Router>
              <ul className="navBar">
                <li id="homeButton" ><Link to="/">Home</Link></li>
                <li id="createButton"><Link to="/create">Create Recipes</Link></li>
              </ul>
              <Route path="/create" render={(props) => <CreateRecipe passedFunction={this.onLoad} dataSent={this.state.data} />} />
              <Route exact path="/" render={(props) => <RecipeList passedFunction={this.onLoad} dataSent={this.state.data} />} />


              {this.state.data.map((item, index) => (

                <Route key={index} path={"/"+item.name} render={(props) => <MoreInfo passedFunction={this.onLoad}
                  description={item.description}
                  ingredients={item.ingredients}
                  name={item.name}
                  image={item.image}
                  id={item._id} />} />

              ))}
            </Router>
          </div>
        )
      }
}
