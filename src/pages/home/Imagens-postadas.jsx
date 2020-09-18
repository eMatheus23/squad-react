/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


export default class ImagensPostadas extends React.Component {

    render() {
        return (
            <div className="containerImagem">                
            <a target="_blank">
                <img 
                 src={this.props.foto}
                 alt="foto Postada"
                 onClick={this.props.loadModalFunc}/>
                <div className="degrade"></div>
                <div className="containerTexto">
                    <div className="texto">
                        <div className="textoPostadoPor">{this.props.textoPostadoPor}</div>
                        <div className="textoTwitterUser">{this.props.textoTwitterUse}</div>
                    </div>
                </div>
            </a>
        </div>
        );
    }
}