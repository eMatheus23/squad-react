import React from "react";

//Componentes
import GaleriaImagens from "./Galeria-img";
import GaleriaTweets from "./Galeria-tweets";

export default class NadaEncontrado extends React.Component {
  render() {
    return (
      <div className="containerGrupo" ref={this.myRef}>
        <h3>
          <div className="semResultado">
            Não encontramos resultados para #{this.props.termo}
          </div>
        </h3>
      </div>
    );
  }
}