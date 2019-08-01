import React, { Component } from 'react';
import _ from "lodash";
import {Table} from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {MoreInfo} from './moreInfo';
import Home from './home'


export class Recipe extends Component {
// handleRedirect = (props) => {

// }

    render(props) {

const { 
    name 
} = this.props

        return (
            <div>
                <Table>
                    <tbody>
                        <tr>
                            <td>
                                 <button  class="btn btn-dark">
                            <Link to={this.props.name}>{this.props.name}</Link>
                            </button>
                            </td>
                        </tr>

                    </tbody>
                </Table>
            </div>

        );
    }
}

{/* render={(props) => <MoreInfo passedFunction={this.onLoad} 
                                description={this.props.description} 
                                ingredients={this.props.ingredients} 
                                name={this.props.name}/>} /> */}

                                // <Route path={"/"+{name}} component={Home} />