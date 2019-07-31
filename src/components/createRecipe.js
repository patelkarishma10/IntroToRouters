import React, { Component } from 'react';


export class CreateRecipe extends Component {
createRecipe = () => {
    
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

                    <input type="submit" class="btn btn-primary" value="create recipe" />
                </form>
            </div>

        );
    }
}