import React from "react";

export default class TweetsPostados extends React.Component {
  render() {
    return (
      <div className="containerTweets" id="Tweets1">
        <div className="grupoTweets">
          <img src={this.props.fotoPerfil} alt="imagem" />
          <div className="containerTextosTwitter">
            <div className="containerUser">
              <div className="userName">{this.props.userName}</div>
              <div className="twitterUserName">
                {this.props.twitterUserName}
              </div>
            </div>
            <div className="textoTweet">{this.props.textoTweet}</div>
            <a
              href={this.props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="linkTwitter"
            >
              Ver mais no twitter
            </a>
          </div>
        </div>
      </div>
    );
  }
}
