/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


export default class ImagensPostadas extends React.Component {

    render() {
        return (
            <div className="containerImagem">                
            <a target="_blank">
                <img 
                 src={this.props.imagens}
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
        );
    }
}