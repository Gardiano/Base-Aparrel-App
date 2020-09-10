
import React, {Component} from 'react';
import './main.css';

import Form from '../form/form';

import bg from '../assets/modelo.jpg';
import bgDesktop from '../assets/modelo.jpg';


export default class Main extends Component {
    render() {
        return(
        <main>
            <div className="main-box">
                
               <div className="main-content">
                <img src={bg} />

                <img src={bgDesktop} id="desktop-bg" />

                <p> ESTAMOS </p> 
                <strong>                
                   CHEGANDO EM BREVE!
                </strong> 
                <label>
                    Olá, somos a Base Aparrel!
                    Atualmente estamos construindo nossa nova loja de moda.
                    Adicione seu e-mail abaixo para ficar por dentro dos 
                    anúncios de largura e nossas ofertas de lançamento.
                </label>
                <Form />
               </div>               
            </div>
        </main>
        );
    }
}