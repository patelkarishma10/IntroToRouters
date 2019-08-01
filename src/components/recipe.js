import React, { Component } from 'react';
import _ from "lodash";
import {Table} from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {MoreInfo} from './moreInfo';
// import Home from './home'


export class Recipe extends Component {
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
