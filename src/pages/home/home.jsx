import React from 'react';
import './imagens.css';
import './imagensMobile.css';
import '../em-comum/estilo.css';

// Importação Componentes e Páginas
import Menu from '../em-comum/Menu';
import Busca from './Busca';
import GrupoImgTweets from './Grupo-img-tweets';
import Footer from '../em-comum/Footer';


// Adequação Reacts
class Home extends React.Component {
    render() {
        return (
            <div>
                <Menu page="home"/>
                <Busca/>
                <GrupoImgTweets/>
                <Footer/>
            </div>
        );
    }
}

export default Home;