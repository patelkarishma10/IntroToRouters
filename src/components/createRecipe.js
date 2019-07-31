import React, { Component } from 'react';


export class CreateRecipe extends Component {

    render() {

        return (
            <div class="formDiv">
                <form onSubmit={this.makeRequest}>
                    <label for="accUsername" id="accUsernameLabel">Username: </label>
                    <input type="text" id="accUsername" class="form-control" required />
                    <br />

                    <label for="accContent" id="accContentLable">content: </label>
                    <input type="content" id="accContent" class="form-control" required />
                    <br />

                    <input type="submit" class="btn btn-primary" value="create post" />
                </form>
            </div>

        );
    }
}