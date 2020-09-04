import React from 'react';

export default class TweetsPostados extends React.Component {

    render() {
        return (
                        <div className="grupoTweets">
                            <img 
                             src={this.props.fotoPerfil}
                             alt="imagem" 
                            />
                            <div className="containerTextosTwitter">
                                <div className="containerUser">
                                    <div className="userName">{this.props.userName}</div>
                                    <div className="twitterUserName">{this.props.twitterUserName}</div>
                                </div>
                                <div className="textoTweet">{this.props.textoTweet}</div>
                                <a href={this.props.link} target="_blank"  className="linkTwitter">
                                    {this.props.verMais}
                                </a>
                            </div>
                        </div>
                    
        );
    }
}