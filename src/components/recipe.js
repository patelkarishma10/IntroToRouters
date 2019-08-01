import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import {MoreInfo} from './moreInfo';
// import Home from './home'


export class Recipe extends Component {
    render(props) {

const { 
    name 
} = this.props

        return (
                    <tbody>
                        <tr>
                            <td>
                                 <button  className="btn btn-dark">
                            <Link to={name}>{name}</Link>
                            </button>
                            </td>
                        </tr>

                    </tbody>

        );
    }
}
