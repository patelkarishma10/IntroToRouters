import React, { Component } from 'react';
import _ from "lodash";
import {Table} from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {MoreInfo} from './moreInfo';


export class Recipe extends Component {


    render(props) {
        return (
            <div>
                <Table>
                    <tbody>

                        <tr>
                            <td>{this.props.name}</td>
                            <td> {this.props.description}</td>
                            <td> {this.props.ingredients.map((item, index) => (

                                <tr>
                                    <td id={index}>{item}</td>
                                </tr>

                            ))}</td>
                            <td><Router>
                                <button><Link to="/moreinfo">More Info</Link></button>
                                {/* <Route path="/moreinfo" component={MoreInfo} /> */}
                                <Route exact path="/" render={(props) => <MoreInfo passedFunction={this.onLoad} dataSent={this.props.data} />} />

                            </Router></td>
                        </tr>

                    </tbody>
                </Table>
            </div>

        );
    }
}