import React from 'react';

//import Imagens

import imagens from '../imagens/';

export default class Imagens extends React.Component {

    render() {
        return (
            <div className="containerImagem">                
            <a target="_blank">
                <img 
                 src={this.props.imagem}
                 alt="foto Postada"
                 onclick="cliqueModal(this)"/>
                <div className="degrade"></div>
                <div className="containerTexto">
                    <div className="texto">
                        <div className="textoPostadoPor">Postado por: {this.props.textoPostadoPor}</div>
                        <div className="textoTwitterUser">@twitterusername {this.props.textoTwitterUse}</div>
                    </div>
                </div>
            </a>
        </div>
        )
    }
}