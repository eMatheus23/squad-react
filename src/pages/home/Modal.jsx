import React from 'react';

export default class ModalImg extends React.Component {
    render() {
        console.log(this.props.showmodal)
        console.log(this.props.selectedImg)
        return (
        <div id="janela-modal" className={(this.props.showmodal ? 'janela-modal' : 'esconde-janela-modal')}>
            <span id="btn-fechar" className="fechar-modal" onClick={this.props.closeModalFunc}>X</span>
            <img id="img-modal" className="img-modal" src={this.props.selectedImg} alt="" />
            <a>
                <span id="visitar-tweet" className="visitar-tweet">
                    Ver no Twitter
                </span>
            </a>

        </div>
        )
    }
}