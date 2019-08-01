import React, { Component } from 'react';
import axios from "axios";

export class CreateRecipe extends Component {
createRecipe = (e) => {
            e.preventDefault();
     let newItem = {
            name: e.target[0].value,
            description: e.target[1].value,
            ingredients: e.target[2].value,
            image: e.target[3].value
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
            <div className="formDiv">
                <h1>Create Recipe</h1>
                <form onSubmit={this.createRecipe}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" className="form-control" required />
                    <br />

                    <label htmlFor="description" >Description: </label>
                    <input type="content" id="description" className="form-control" required />
                    <br />

                    <label htmlFor="ingredients" >Ingredients: </label>
                    <input type="content" id="ingredients" className="form-control" required />
                    <br />

                    <label htmlFor="image" >Image: </label>
                    <input type="content" id="image" className="form-control" required />
                    <br />

                    <input type="submit" className="btn btn-dark" value="create recipe" />
                </form>
            </div>

        );
    }
}