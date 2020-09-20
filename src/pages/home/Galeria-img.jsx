import React from "react";

//componets
import ImagensPostadas from "./Imagens-postadas";
import ModalImg from "./Modal";

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
