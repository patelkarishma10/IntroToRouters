import React, { Component } from 'react';
import {Table} from "reactstrap";
import { Recipe} from './recipe';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export class RecipeList extends Component {

    render(props) {
        return (
            <div className="formDiv">
                <div id="random"> </div>
                <h2>Recipes</h2>
                <Table>
                        {this.props.dataSent.map((item, index) => (

                                 <Recipe key={index} passedFunction={this.props.passedFunction} name={item.name} description={item.description} ingredients={item.ingredients} image={item.image}/>       

                        ))}
                </Table>
            </div>

        );
    }
}

