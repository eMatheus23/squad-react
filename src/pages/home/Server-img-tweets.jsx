import React from 'react';
import GaleriaImagens from './Galeria-img';
import GaleriaTweets from './Galeria-tweets';


class ServerImagTweets extends React.Component { 
    componentDidMount(){
        var myHeaders = new Headers();
myHeaders.append("authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX");
myHeaders.append("Cookie", "personalization_id=\"v1_aws7UsNs3P8XdQueP0Nxew==\"; guest_id=v1%3A159973978867918205");
var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
fetch("https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=natureza&count=10", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    }
    render() {
        return (
        <h1></h1>
        )
    }
    
}

export default ServerImagTweets;