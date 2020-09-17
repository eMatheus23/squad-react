import React from "react";

import TweetsPostados from "./Tweets-postados";


export default class GaleriaTweets extends React.Component {
  render() {
    return (
      <div div id="tweets" className="containerGaleriaTweets">
        <div className="containerTweets" id="Tweets1">
          <TweetsPostados
            fotoPerfil={this.props.posts.length > 0 ? this.props.posts[0].user.profile_image_url_https : ""}
            userName={this.props.posts.length > 0 ? this.props.posts[0].user.name : ""}
            twitterUserName={this.props.posts.length > 0 ? ("@" + this.props.posts[0].user.screen_name) : ""}
            textoTweet={this.props.posts.length > 0 ? this.props.posts[0].text : ""}
            link={this.props.posts.length > 0 ? `https://twitter.com/${this.props.posts[0].user.screen_name}/status/${this.props.posts[0].id_str}` : ""}
            verMais="Ver Mais Tweets"
          />
        </div>
        <div className="containerTweets" id="Tweets2">
          <TweetsPostados
            fotoPerfil={this.props.posts.length > 1 ? this.props.posts[1].user.profile_image_url_https : ""}
            userName={this.props.posts.length > 1 ? this.props.posts[1].user.name : ""}
            twitterUserName={this.props.posts.length > 1 ? ("@" + this.props.posts[1].user.screen_name) : ""}
            textoTweet={this.props.posts.length > 1 ? this.props.posts[1].text : ""}
            link={this.props.posts.length > 1 ? `https://twitter.com/${this.props.posts[1].user.screen_name}/status/${this.props.posts[1].id_str}` : ""}
            verMais="Ver Mais Tweets"
          />
        </div>
        <div className="containerTweets" id="Tweets3">
          <TweetsPostados
            fotoPerfil={this.props.posts.length > 2 ? this.props.posts[2].user.profile_image_url_https : ""}
            userName={this.props.posts.length > 2 ? this.props.posts[2].user.name : ""}
            twitterUserName={this.props.posts.length > 2 ? ("@" + this.props.posts[2].user.screen_name) : ""}
            textoTweet={this.props.posts.length > 2 ? this.props.posts[2].text : ""}
            link={this.props.posts.length > 2 ? `https://twitter.com/${this.props.posts[2].user.screen_name}/status/${this.props.posts[2].id_str}` : ""}
            verMais="Ver Mais Tweets"
          />
        </div>
        <div className="containerTweets" id="Tweets4">
          <TweetsPostados
            fotoPerfil={this.props.posts.length > 3 ? this.props.posts[3].user.profile_image_url_https : ""}
            userName={this.props.posts.length > 3 ? this.props.posts[3].user.name : ""}
            twitterUserName={this.props.posts.length > 3 ? ("@" + this.props.posts[3].user.screen_name) : ""}
            textoTweet={this.props.posts.length > 3 ? this.props.posts[3].text : ""}
            link={this.props.posts.length > 3 ? `https://twitter.com/${this.props.posts[3].user.screen_name}/status/${this.props.posts[3].id_str}` : ""}
            verMais="Ver Mais Tweets"
          />
        </div>
        <div className="containerTweets" id="Tweets5">
          <TweetsPostados
            fotoPerfil={this.props.posts.length > 4 ? this.props.posts[4].user.profile_image_url_https : ""}
            userName={this.props.posts.length > 4 ? this.props.posts[4].user.name : ""}
            twitterUserName={this.props.posts.length > 4 ? ("@" + this.props.posts[4].user.screen_name) : ""}
            textoTweet={this.props.posts.length > 4 ? this.props.posts[4].text : ""}
            link={this.props.posts.length > 4 ? `https://twitter.com/${this.props.posts[4].user.screen_name}/status/${this.props.posts[4].id_str}` : ""}
            verMais="Ver Mais Tweets"
          />
        </div>
        <div className="containerTweets" id="Tweets6">
          <TweetsPostados
            fotoPerfil={this.props.posts.length > 5 ? this.props.posts[5].user.profile_image_url_https : ""}
            userName={this.props.posts.length > 5 ? this.props.posts[5].user.name : ""}
            twitterUserName={this.props.posts.length > 5 ? ("@" + this.props.posts[5].user.screen_name) : ""}
            textoTweet={this.props.posts.length > 5 ? this.props.posts[5].text : ""}
            link={this.props.posts.length > 5 ? `https://twitter.com/${this.props.posts[5].user.screen_name}/status/${this.props.posts[5].id_str}` : ""}
            verMais="Ver Mais Tweets"
          />
        </div>
        <div className="containerTweets" id="Tweets7">
          <TweetsPostados
            fotoPerfil={this.props.posts.length > 6 ? this.props.posts[6].user.profile_image_url_https : ""}
            userName={this.props.posts.length > 6 ? this.props.posts[6].user.name : ""}
            twitterUserName={this.props.posts.length > 6 ? ("@" + this.props.posts[6].user.screen_name) : ""}
            textoTweet={this.props.posts.length > 6 ? this.props.posts[6].text : ""}
            link={this.props.posts.length > 6 ? `https://twitter.com/${this.props.posts[6].user.screen_name}/status/${this.props.posts[6].id_str}` : ""}
            verMais="Ver Mais Tweets"
          />
        </div>
        <div className="containerTweets" id="Tweets8">
          <TweetsPostados
            fotoPerfil={this.props.posts.length > 7 ? this.props.posts[7].user.profile_image_url_https : ""}
            userName={this.props.posts.length > 7 ? this.props.posts[7].user.name : ""}
            twitterUserName={this.props.posts.length > 7 ? ("@" + this.props.posts[7].user.screen_name) : ""}
            textoTweet={this.props.posts.length > 7 ? this.props.posts[7].text : ""}
            link={this.props.posts.length > 7 ? `https://twitter.com/${this.props.posts[7].user.screen_name}/status/${this.props.posts[7].id_str}` : ""}
            verMais="Ver Mais Tweets"
          />
        </div>
        <div className="containerTweets" id="Tweets9">
          <TweetsPostados
            fotoPerfil={this.props.posts.length > 8 ? this.props.posts[8].user.profile_image_url_https : ""}
            userName={this.props.posts.length > 8 ? this.props.posts[8].user.name : ""}
            twitterUserName={this.props.posts.length > 8 ? ("@" + this.props.posts[8].user.screen_name) : ""}
            textoTweet={this.props.posts.length > 8 ? this.props.posts[8].text : ""}
            link={this.props.posts.length > 8 ? `https://twitter.com/${this.props.posts[8].user.screen_name}/status/${this.props.posts[8].id_str}` : ""}
            verMais="Ver Mais Tweets"
          />
        </div>
        <div className="containerTweets" id="Tweets10">
          <TweetsPostados
            fotoPerfil={this.props.posts.length > 9 ? this.props.posts[9].user.profile_image_url_https : ""}
            userName={this.props.posts.length > 9 ? this.props.posts[9].user.name : ""}
            twitterUserName={this.props.posts.length > 9 ? ("@" + this.props.posts[9].user.screen_name) : ""}
            textoTweet={this.props.posts.length > 9 ? this.props.posts[9].text : ""}
            link={this.props.posts.length > 9 ? `https://twitter.com/${this.props.posts[9].user.screen_name}/status/${this.props.posts[9].id_str}` : ""}
            verMais="Ver Mais Tweets"
          />
        </div>
      </div>
    );
  }
}
