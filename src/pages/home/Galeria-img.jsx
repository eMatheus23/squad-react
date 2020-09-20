import React from "react";

//componets
import ImagensPostadas from "./Imagens-postadas";
import ModalImg from "./Modal";
//imagens
import PrmeiraImagen from "../../imagens/top10/photo-01.jpg";
import SegundaImagen from "../../imagens/top10/photo-02.jpg";
import TerceiraImagen from "../../imagens/top10/photo-03.jpg";
import QuartaImagen from "../../imagens/top10/photo-04.jpg";
import QuintaImagen from "../../imagens/top10/photo-05.jpg";
import SextaImagen from "../../imagens/top10/photo-06.jpg";
import SetimaImagen from "../../imagens/top10/photo-07.jpg";
import OitavaImagen from "../../imagens/top10/photo-08.jpg";
import NonaImagen from "../../imagens/top10/photo-09.jpg";
import DecimaImagen from "../../imagens/top10/photo-10.jpg";

export default class GaleriaImagens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedImg: "",
    };
    this.loadModal = this.loadModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  loadModal(event) {
    this.setState({
      selectedImg: event.target.src,
      showModal: true,
    });
  }

  closeModal(event) {
    this.setState({
      showModal: false,
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      //Container que segura todas as divs de imagens relacionadas na pesquisadas
      <>
        <div id="imagens" className="containerGaleria">
          {this.props.posts.slice(0, 10).map((tweet, index) => (
            <ImagensPostadas
              loadModalFunc={this.loadModal}
              foto={tweet.entities.media[0].media_url}
              textoPostadoPor="Postado por:"
              textoTwitterUse={"@" + tweet.user.screen_name}
            />
          ))}
        </div>
        <ModalImg
          selectedImg={this.state.selectedImg}
          showmodal={this.state.showModal}
          closeModalFunc={this.closeModal}
        />
      </>
    );
  }
}
