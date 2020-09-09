import React from 'react';
import './imagens.css';
import './imagensMobile.css';
import '../em-comum/menu-rodape.css';

import Menu from '../em-comum/Menu';
import GrupoImgTweets from './Grupo-img-tweets';
import Rodape from '../em-comum/Rodape';


// Adequação Reacts
class Home extends React.Component {
    render() {
        return (
            <div>
                <Menu home={false} login={true} sobre={true} />
                <GrupoImgTweets />
                <Rodape />
            </div>
        );
    }
}

export default Home;