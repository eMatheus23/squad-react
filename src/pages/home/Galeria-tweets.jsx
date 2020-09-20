import React from "react";

import TweetsPostados from "./Tweets-postados";

export default class GaleriaTweets extends React.Component {
  render() {
    return (
      <>
        <div div id="tweets" className="containerGaleriaTweets">
          {this.props.posts.slice(0, 10).map((tweet, index) => (
            <TweetsPostados
              fotoPerfil={tweet.user.profile_image_url_https}
              userName={tweet.user.name}
              twitterUserName={"@" + tweet.user.screen_name}
              textoTweet={tweet.text}
              link={`https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`}
            />
          ))}
        </div>
      </>
    );
  }
}
