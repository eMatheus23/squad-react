import React from 'react';
import './sobre.css';
import '../em-comum/estilo.css';

import Menu from '../em-comum/Menu';
import SobreProjeto from './Sobre-projeto';
import SobreEquipe from './Sobre-equipe';
import Footer from '../em-comum/Footer';


// Adequação Reacts
class Sobre extends React.Component {
    render() {
        return (
            <div>
                <Menu page='sobre' />
                <SobreProjeto />
                <SobreEquipe />
                <Footer/>
            </div>
        );
    }
}

export default Sobre;