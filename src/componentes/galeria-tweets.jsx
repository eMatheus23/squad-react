import React from 'react';

import TweetsPostados from './tweets-postados';

//fotos do Perfil

import PrmeiroPerfil from '../imagens/fotos-perfis/adult-blur-boy-daylight-428361_Easy-Resize.com.jpg';
import SegundoPerfil from '../imagens/fotos-perfis/fashion-photography-of-woman-hands-on-chin-with-glitter-1081685_Easy-Resize.com.jpg';
import TerceiroPerfil from '../imagens/fotos-perfis/grayscale-photo-of-a-man-near-wall-1370750_Easy-Resize.com.jpg';
import QuartoPerfil from '../imagens/fotos-perfis/looking-up-woman-wearing-blue-v-neck-top-1674752_Easy-Resize.com.jpg';
import QuintoPerfil from '../imagens/fotos-perfis/men-s-blue-dress-shirt-1043471_Easy-Resize.com.jpg';
import SextoPerfil from '../imagens/fotos-perfis/monochrome-photo-of-man-smiling-1484794_Easy-Resize.com.jpg';
import SetimoPerfil from '../imagens/fotos-perfis/person-standing-on-dock-holding-disposable-cup-1310474_Easy-Resize.com.jpg';
import OitavoPerfil from '../imagens/fotos-perfis/photo-of-man-wearing-eyeglasses-2589653_Easy-Resize.com.jpg';
import NonoPerfil from '../imagens/fotos-perfis/woman-wearing-sunhat-1382731_Easy-Resize.com.jpg';
import DecimoPerfil from '../imagens/fotos-perfis/photography-of-man-in-white-shirt-with-round-black-analog-697509_Easy-Resize.com.jpg';

export default class GaleriaTweets extends React.Component {
    render() {
        return (
            <div div id="tweets" className="containerGaleriaTweets">
            <div className="containerTweets" id="Tweets1">
            <TweetsPostados
                fotoPerfil={PrmeiroPerfil}
                userName="UserName"
                twitterUserName="@twitterusername"
                textoTweet="Lorem ipsum dolor sit amet, consetetur, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."
                verMais="Ver Mais Tweets"
            />
            </div>
            <div className="containerTweets" id="Tweets2">
            <TweetsPostados
                fotoPerfil={SegundoPerfil}
                userName="UserName"
                twitterUserName="@twitterusername"
                textoTweet="Lorem ipsum dolor sit amet, consetetur, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."
                verMais="Ver Mais Tweets"
            />
            </div>
            <div className="containerTweets" id="Tweets3">
            <TweetsPostados
                fotoPerfil={TerceiroPerfil}
                userName="UserName"
                twitterUserName="@twitterusername"
                textoTweet="Lorem ipsum dolor sit amet, consetetur, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."
                verMais="Ver Mais Tweets"
            />
            </div>
            <div className="containerTweets" id="Tweets4">
            <TweetsPostados
                fotoPerfil={QuartoPerfil}
                userName="UserName"
                twitterUserName="@twitterusername"
                textoTweet="Lorem ipsum dolor sit amet, consetetur, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."
                verMais="Ver Mais Tweets"
            />
            </div>
            <div className="containerTweets" id="Tweets5">
            <TweetsPostados
                fotoPerfil={QuintoPerfil}
                userName="UserName"
                twitterUserName="@twitterusername"
                textoTweet="Lorem ipsum dolor sit amet, consetetur, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."
                verMais="Ver Mais Tweets"
            />
            </div>
            <div className="containerTweets" id="Tweets6">
            <TweetsPostados
                fotoPerfil={SextoPerfil}
                userName="UserName"
                twitterUserName="@twitterusername"
                textoTweet="Lorem ipsum dolor sit amet, consetetur, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."
                verMais="Ver Mais Tweets"
            />
            </div>
            <div className="containerTweets" id="Tweets7">
            <TweetsPostados
                fotoPerfil={SetimoPerfil}
                userName="UserName"
                twitterUserName="@twitterusername"
                textoTweet="Lorem ipsum dolor sit amet, consetetur, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."
                verMais="Ver Mais Tweets"
            />
            </div>
            <div className="containerTweets" id="Tweets8">
            <TweetsPostados
                fotoPerfil={OitavoPerfil}
                userName="UserName"
                twitterUserName="@twitterusername"
                textoTweet="Lorem ipsum dolor sit amet, consetetur, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."
                verMais="Ver Mais Tweets"
            />
            </div>
            <div className="containerTweets" id="Tweets9">
                <TweetsPostados
                fotoPerfil={NonoPerfil}
                userName="UserName"
                twitterUserName="@twitterusername"
                textoTweet="Lorem ipsum dolor sit amet, consetetur, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."
                verMais="Ver Mais Tweets"
            />
           </div>
           <div className="containerTweets" id="Tweets10">
                <TweetsPostados
                fotoPerfil={DecimoPerfil}
                userName="UserName"
                twitterUserName="@twitterusername"
                textoTweet="Lorem ipsum dolor sit amet, consetetur, sed diam nonumy eirmod tempor invidunt ut labore et dolore..."
                verMais="Ver Mais Tweets"
            />
           </div>
           </div>
        );
    }
}