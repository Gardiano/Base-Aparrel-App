
import React, {Component} from 'react';
import './header.css'

import logo from '../assets/logo.png'

export default class Header extends Component {
    render() {
        return(
        <header>
            <div className="header">
                <img src={logo} />

                <strong>
                   BASE APARREL
                </strong>
            </div>                    
        </header>
        );
    }
}