import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { CreateRecipe } from './createRecipe';
import { RecipeList } from './recipeList';
//import { Home } from './home';

export class NavBar extends Component {

      constructor() {
    super();
    this.state = {
      data: []
    };
  }

  onLoad = () => {
 
        this.setState({
          data: [{name: "cake", description: "Cake description", ingredients: ["flour", "milk", "sugar"]},
          {name: "bread", description: "Cake description", ingredients: ["flour", "milk"]},
        {name: "ice cream", description: "Cake description", ingredients: ["vanilla", "milk", "sugar"]}]
          
        });
 
  }
    
  componentDidMount() {
    this.onLoad();

  }

    render() {
        return (
            <div>
                <Router>
                <ul class="navBar">
                     <li><Link to="/">Home</Link></li> 
                    <li><Link to="/create">Create Recipes</Link></li>
                    {/* <li><a href="login.html">Login</a></li> */}
                </ul>
                        {/* <Route exact path="/" component={Home} /> */}
                        <Route path="/create" component={CreateRecipe} />
                        <Route exact path="/" render={(props) => <RecipeList passedFunction={this.onLoad} dataSent={this.state.data} />} />
                         {/* <RecipeList passedFunction={this.onLoad} dataSent={this.state.data}/>  */}
                        </Router>
            </div>
        )
    }
}