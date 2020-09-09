import React from 'react';
import './sobre.css';
import '../em-comum/menu-rodape.css';

import Menu from '../em-comum/Menu';
import SobreProjeto from './Sobre-projeto';
import SobreEquipe from './Sobre-equipe';
import Rodape from '../em-comum/Rodape';


// Adequação Reacts
class Sobre extends React.Component {
    render() {
        return (
            <div>
                <Menu home={true} login={true} sobre={false} />
                <SobreProjeto />
                <SobreEquipe />
                <Rodape />
            </div>
        );
    }
}

export default Sobre;