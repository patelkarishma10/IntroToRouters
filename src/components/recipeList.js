import React, { Component } from 'react';
import _ from "lodash";
import {Table} from "reactstrap";
import { Recipe} from './recipe';


export class RecipeList extends Component {

    render(props) {
        return (
            <div class="formDiv">
                <div id="random"> </div>
                <h2>Recipes</h2>
                <Table>
                    <tbody>
                        {this.props.dataSent.map((item) => (

                                 <Recipe passedFunction={this.props.passedFunction} name={item.name} description={item.description} ingredients={item.ingredients}/> 

                        ))}
                    </tbody>
                </Table>
            </div>

        );
    }
}