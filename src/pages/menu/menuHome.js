import React from 'react';
import './estilo.css';

// Importação Componentes em comum a todas as páginas.
import Menu from './Menu'
import Footer from './Footer'
import Busca from './Busca'

class Menuhome extends React.Component {
    render() {
        return (
            <div>
                <Menu page="home" />
                <Busca />
                <Footer />
            </div>
        );
    }
}

export default Menuhome;