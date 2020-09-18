import React from 'react';

//componets
import ImagensPostadas from './Imagens-postadas';

//imagens
import PrmeiraImagen from '../../imagens/top10/photo-01.jpg';
import SegundaImagen from '../../imagens/top10/photo-02.jpg';
import TerceiraImagen from '../../imagens/top10/photo-03.jpg';
import QuartaImagen from '../../imagens/top10/photo-04.jpg';
import QuintaImagen from '../../imagens/top10/photo-05.jpg';
import SextaImagen from '../../imagens/top10/photo-06.jpg';
import SetimaImagen from '../../imagens/top10/photo-07.jpg';
import OitavaImagen from '../../imagens/top10/photo-08.jpg';
import NonaImagen from '../../imagens/top10/photo-09.jpg';
import DecimaImagen from '../../imagens/top10/photo-10.jpg';



export default class GaleriaImagens extends React.Component {
    render() {
     
        console.log(this.props.posts)
        return (
            //Container que segura todas as divs de imagens relacionadas na pesquisadas 
            <div id="imagens" className="containerGaleria">
               { 
                    this.props.posts.map((tweet, index) => <div key={"imgtwitter-"+index} className="coluna">
                              <ImagensPostadas
                              foto={tweet.entities.media[0].media_url}
                              textoPostadoPor="Postado por:"
                              textoTwitterUse={"@"+tweet.user.screen_name}
                              />
                    </div>)
               }
          </div>
        );
    }
}