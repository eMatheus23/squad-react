import React from 'react';

//Componentes
import GaleriaImagens from './Galeria-img';
import GaleriaTweets from './Galeria-tweets';


import style1 from '../css/imagens.css';
import style2 from '../css/imagensMobile.css';

export default class GrupoImgTweets extends React.Component {
    render() {
        return (
            <div className="containerGrupo">
        <h3>
            <div className="desktop">Exibindo os 10 resultados mais recentes para #natureza </div>
            <div className="semResultado">Não encontramos resultados para #palavra </div>
        </h3>
        <div className="mobile">
            <div id="tweetMobile" className="botaoAbas botaoAbasSelecionado" onClick="esconderImagens()">Tweets</div>
            <div id="imagensMobile" className="botaoAbas" onClick="esconderTweets()">Imagens</div>
            <div className="linha"></div>
        </div>
            <GaleriaImagens />
            <GaleriaTweets />
        </div>
        );
    }
}
