import React, { Component } from 'react';
import axios from "axios";

export class CreateRecipe extends Component {
createRecipe = (e) => {
            e.preventDefault();
     let newItem = {
            name: e.target[0].value,
            description: e.target[1].value,
            ingredients: e.target[2].value
        }

        axios
            .post("http://localhost:5000/recipe/createRecipe", newItem)

            .then(response => {
                console.log("created recipe")

                this.props.passedFunction();
            });

}

    render() {

        return (
            <div class="formDiv">
                <h1>Create Recipe</h1>
                <form onSubmit={this.createRecipe}>
                    <label for="name">Name: </label>
                    <input type="text" id="name" class="form-control" required />
                    <br />

                    <label for="description" >Description: </label>
                    <input type="content" id="description" class="form-control" required />
                    <br />

                    <label for="ingredients" >Ingredients: </label>
                    <input type="content" id="ingredients" class="form-control" required />
                    <br />

                    <input type="submit" class="btn btn-dark" value="create recipe" />
                </form>
            </div>

        );
    }
}