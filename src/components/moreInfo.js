import React, { Component } from 'react';
import axios from "axios";
import { Table } from "reactstrap";

export class MoreInfo extends Component {
          constructor() {
    super();
    this.state = {
      text:""
    };
  }
    makeRequest = () => {
        //e.preventDefault();

        let deleteItem = {
            _id: this.props.id
        }
        axios
            .delete("http://localhost:5000/recipe/deleteRecipe", { data: deleteItem })
            .then(response => {
                console.log("deleted recipe")
this.setState({
          text: "deleted"
          
        });
                this.props.passedFunction();
            });
    };
    render() {
        return (
            <div class="formDiv">
                <p>Recipe: {this.props.name}</p>
                <p>Description: {this.props.description}</p>
                <p>Ingredients: {this.props.ingredients}</p>
                <button class="btn btn-primary" onClick={this.makeRequest}>Delete</button>
                <p>{this.text}</p>
            </div>

        );
    }
}