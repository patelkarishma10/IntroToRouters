import React, { Component } from 'react';
import { Table } from "reactstrap";

export class MoreInfo extends Component {

    render() {
        return (
            <div class="formDiv">
                <p>Recipe: {this.props.name}</p>
                <p>Description: {this.props.description}</p>
                <p>Ingredients: {this.props.ingredients}</p>
            </div>

        );
    }
}