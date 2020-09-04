import React from 'react';

//componets
import ImagensPostadas from './imagens-postadas';

//imagens
import PrmeiraImagen from '../imagens/top10/photo-01.jpg';
import SegundaImagen from '../imagens/top10/photo-02.jpg';
import TerceiraImagen from '../imagens/top10/photo-03.jpg';
import QuartaImagen from '../imagens/top10/photo-04.jpg';
import QuintaImagen from '../imagens/top10/photo-05.jpg';
import SextaImagen from '../imagens/top10/photo-06.jpg';
import SetimaImagen from '../imagens/top10/photo-07.jpg';
import OitavaImagen from '../imagens/top10/photo-08.jpg';
import NonaImagen from '../imagens/top10/photo-09.jpg';
import DecimaImagen from '../imagens/top10/photo-10.jpg';



export default class GaleriaImagens extends React.Component {
    render() {
        return (
            //Container que segura todas as divs de imagens relacionadas na pesquisadas 
            <div id="imagens" class="containerGaleria">
                <div className="coluna">
                    <ImagensPostadas
                    foto={PrmeiraImagen}
                    textoPostadoPor="Postado por:"
                    textoTwitterUse="@twitterusername"
               />
                    <ImagensPostadas
                    foto={SegundaImagen}
                    textoPostadoPor="Postado por:"
                    textoTwitterUse="@twitterusername"
               />
                    <ImagensPostadas
                    foto={TerceiraImagen}
                    textoPostadoPor="Postado por:"
                    textoTwitterUse="@twitterusername"
               />
                    <ImagensPostadas
                    foto={QuartaImagen}
                    textoPostadoPor="Postado por:"
                    textoTwitterUse="@twitterusername"
               />
                    <ImagensPostadas
                    foto={QuintaImagen}
                    textoPostadoPor="Postado por:"
                    textoTwitterUse="@twitterusername"
               />
            <div className="coluna" id="coluna2"></div>
                     <ImagensPostadas
                    foto={SextaImagen}
                    textoPostadoPor="Postado por:"
                    textoTwitterUse="@twitterusername"
               />
                    <ImagensPostadas
                    foto={SetimaImagen}
                    textoPostadoPor="Postado por:"
                    textoTwitterUse="@twitterusername"
               />
                    <ImagensPostadas
                    foto={OitavaImagen}
                    textoPostadoPor="Postado por:"
                    textoTwitterUse="@twitterusername"
               />
                     <ImagensPostadas
                    foto={NonaImagen}
                    textoPostadoPor="Postado por:"
                    textoTwitterUse="@twitterusername"
               />
                     <ImagensPostadas
                    foto={DecimaImagen}
                    textoPostadoPor="Postado por:"
                    textoTwitterUse="@twitterusername"
               />
               </div>
          </div>


        );
    }
}