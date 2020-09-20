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
      width: window.innerWidth,
      height: window.innerHeight,
    };
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
    // fonte: https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
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
      <div className="containerGrupo" ref={this.myRef}>
        <h3>
          <div className="desktop">
            Exibindo os 10 resultados mais recentes para #{this.props.termo}
          </div>
        </h3>
        <div className="mobile">
          <div
            id="tweetMobile"
            // Uma forma de deixar uma className fixa e outra dinâmica
            // A aba Tweet ganha a classe botaoAbasSelecionadoQuando apenas se o "isTweetsOn" for true
            // fonte: https://stackoverflow.com/questions/34521797/how-to-add-multiple-classes-to-a-reactjs-component
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
        {this.state.isMobile ? "" : <GaleriaImagens posts={this.props.posts.filter((tweet) => {
          return (tweet.entities.media && tweet.entities.media.length > 0)
        })} />}
        {this.state.isMobile ? "" : <GaleriaTweets posts={this.props.posts} />}
        

        {/* Quando for mobile */}
        {this.state.isTweetsOn === false && this.state.isMobile ? <GaleriaImagens posts={this.props.posts.filter((tweet) => {
          return (tweet.entities.media && tweet.entities.media.length > 0)
        })} /> : "" }
        {this.state.isTweetsOn && this.state.isMobile ? <GaleriaTweets posts={this.props.posts} /> : "" }

      </div>
    );
  }
}
