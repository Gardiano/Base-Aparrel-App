import React, {Component} from 'react';
import './form.css'

import bg from '../assets/bg.png'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.verify = this.verify.bind(this);
      }

      verify() {
       let email = this.state.email
      if(email == '' || email == ' ') {
          alert('Digite seu email')
      } else {
          alert('Email enviado com sucesso!')
      }
  }
      
    render() {
        return(
        <main>
        <div className="form-box">
            <input 
            value={this.state.email} 
            type="email"
            placeholder="   E-mail"
            required
            onChange={(e) => this.setState({email: e.target.value})}
            /> 
          
            <button onClick={this.verify}> 
                <i class="far fa-arrow-alt-circle-right"></i> 
            </button>      
        </div>
        </main>
        );
    }
}