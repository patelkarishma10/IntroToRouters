import React, { Component } from 'react';
import axios from "axios";

export class UpdateRecipe extends Component {
UpdateRecipe = (e) => {
            e.preventDefault();
     let newItem = {
            name: e.target[0].value,
            description: e.target[1].value,
            ingredients: e.target[2].value,
            image: e.target[3].value,
            _id: this.props._id
        }

        axios
            .put("http://localhost:5000/recipe/updateRecipe", newItem)

            .then(response => {
                console.log("created recipe")

                this.props.passedFunction();
            });

    }

    render() {

        return (
            <div class="formDiv">
                <h2>Update Recipe</h2>
                <form onSubmit={this.updateRecipe}>
                    <label for="name">Name: </label>
                    <input type="text" id="name" class="form-control" required />
                    <br />

                    <label for="description" >Description: </label>
                    <input type="content" id="description" class="form-control" required />
                    <br />

                    <label for="ingredients" >Ingredients: </label>
                    <input type="content" id="ingredients" class="form-control" required />
                    <br />
                    <label for="image" >Image: </label>
                    <input type="content" id="image" class="form-control" required />
                    <br />
                    <input type="submit" class="btn btn-dark" value="create recipe" />
                </form>
            </div>

        );
    }
}