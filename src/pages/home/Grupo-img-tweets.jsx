import React from "react";

//Componentes
import GaleriaImagens from "./Galeria-img";
import GaleriaTweets from "./Galeria-tweets";

export default class GrupoImgTweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTweetsOn: true,
      isMobile: false,
      width: 0,
      height: 0,
    };

    // this.esconderTweets = this.esconderTweets.bind(this);
  }

  // Método que esconde os tweets no mobile
  esconderTweets = () => {
    this.setState((state) => ({
      isTweetsOn: false,
    }));
  };

  // Método que esconde as imagens no mobile
  esconderImagens = () => {
    this.setState((state) => ({
      isTweetsOn: true,
    }));
  };

  /* ------ Os três métodos abaixo são usados para monitorar a largura e altura da tela ------- */
  updateDimensions = () => {
    // Esse método, quando chamado, lê as dimenções da tela e salva no state
    this.setState({ width: window.innerWidth, height: window.innerHeight });

    // Muda o estado isMobile quando as dimenções são menores do que 700px
    if (this.state.width < 700) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };

  componentDidMount() {
    // Adiciona um event listener que fica "escutando" as mudanças no tamanho da tela
    // Quando o event listener percebe mudança, ele chama o updateDimensions
    window.addEventListener("resize", this.updateDimensions);

    // Ativa o updateDimensions assim que a tela é rederizada, para que o state seja atualizado
    this.updateDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div className="containerGrupo">
        <h3>
          <div className="desktop">
            Exibindo os 10 resultados mais recentes para #natureza{" "}
          </div>
          <div className="semResultado">
            Não encontramos resultados para #palavra{" "}
          </div>
        </h3>
        <div className="mobile">
          <div
            id="tweetMobile"
            // Uma forma de deixar uma className fixa e outra dinâmica
            // A aba Tweet ganha a classe botaoAbasSelecionadoQuando apenas se o "isTweetsOn" for true
            className={[
              "botaoAbas",
              this.state.isTweetsOn ? "botaoAbasSelecionado" : "",
            ].join(" ")} // Usa [] para criar um array de classes e depois usa o join para juntá-las
            onClick={this.esconderImagens}
          >
            Tweets
          </div>
          <div
            id="imagensMobile"
            // A aba Imagens ganha a classe botaoAbasSelecionadoQuando apenas se o "isTweetsOn" for false
            className={[
              "botaoAbas",
              this.state.isTweetsOn ? "" : "botaoAbasSelecionado",
            ].join(" ")}
            onClick={this.esconderTweets}
          >
            Imagens
          </div>
          <div className="linha"></div>
        </div>
        {/* O trecho abaixo foi modificado com condicionais para que seja possível alternar as abas no mobile */}

        {/* Quando não for mobile */}
        {this.state.isMobile ? "" : <GaleriaTweets posts={this.props.posts} />}
        {this.state.isMobile ? "" : <GaleriaImagens />}

        {/* Quando for mobile */}
        {this.state.isTweetsOn && this.state.isMobile ? "" : <GaleriaImagens />}
        {this.state.isTweetsOn && this.state.isMobile ? <GaleriaTweets posts={this.props.posts} /> : "" }

      </div>
    );
  }
}
