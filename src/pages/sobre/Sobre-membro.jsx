import React from 'react';

//Imagens
import gitIcon from '../../svg/icon-github.svg';
import emailIcon from '../../svg/icon-envelope.svg';
import linkedinIcon from '../../svg/icon-awesome-linkedin.svg';


export default class SobreMembro extends React.Component {
    render() {
        return (
            <div className="sobre-membro">
                <img
                    className="sobre-membro__imagem"
                    src={this.props.foto}
                    alt="Foto de perfil"
                />
                <h3 className="sobre-membro__nome">{this.props.nome}</h3>
                <p className="sobre-membro__texto">
                    {this.props.texto}
                </p>
                <div className="sobre-membro__contatos">
                    <a href={"http://github.com/" + this.props.git} target="_blank" rel="noopener noreferrer">
                        <img
                            className="sobre-membro__link"
                            src={gitIcon}
                            alt="Github"
                        />
                    </a>
                    <a href={"mailto:" + this.props.email}>
                        <img
                            className="sobre-membro__link"
                            src={emailIcon}
                            alt="Email"
                        />
                    </a>
                    <a href={"https://www.linkedin.com/in/" + this.props.linkedin} target="_blank" rel="noopener noreferrer">
                        <img
                            className="sobre-membro__link"
                            src={linkedinIcon}
                            alt="LinkedIn"
                        />
                    </a>
                </div>
            </div>
        );
    }
}