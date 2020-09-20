import React from "react";
import "./imagens.css";
import "./imagensMobile.css";
import "../em-comum/estilo.css";

// Importação Componentes e Páginas
import Menu from "../em-comum/Menu";
import Busca from "./Busca";
import GrupoImgTweets from "./Grupo-img-tweets";
import Footer from "../em-comum/Footer";
import NadaEncontrado from "./Nada-encontrado";

// Adequação Reacts
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], termo: "", encontrado: true };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    // Elementos que devem aparecer conforme o usuário desce a página
    let tweetElements = document.querySelectorAll(".containerTweets");

    // Função que será rodada sempre que o usuário mexer no scroll da página
    function tweetAnimScroll() {
      for (let tweet of tweetElements) {
        // Se o elemento estiver visível dentro da janela
        if (
          tweet.getBoundingClientRect().top <=
          document.documentElement.clientHeight -
            tweet.getBoundingClientRect().height
        ) {
          // Adicionar a classe que mudará suas propriedades CSS
          tweet.classList.add("containerTweetsAnim");
        }
      }
    }

    // Chamar a função ao carregar a página, e depois sempre que o usuário mexer no scroll
    tweetAnimScroll();
    document.querySelector("body").onscroll = tweetAnimScroll;
  }

  /*
  componentDidUpdate(prevProps) {
    if (prevProps.termo !== this.props.term) {
      console.log(this.props.termo);
    }
  }
  */

  handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      event.preventDefault();

      const termoDigitado = event.target.value;

      /*
      this.setState((state) => ({
        termo: termoDigitado,
      }));
      */

      // this.props.handleKeyDown(termoDigitado);

      console.log(this.state.termo);

      event.target.value = "";

      this.setState({ termo: termoDigitado });

      this.fazerBusca(termoDigitado);
    }
  };

  fazerBusca = (termo) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "authorization",
      "Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX"
    );
    myHeaders.append(
      "Cookie",
      'personalization_id="v1_aws7UsNs3P8XdQueP0Nxew=="; guest_id=v1%3A159973978867918205'
    );
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/search/tweets.json?q=${termo}&count=50&result_type=recent`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.statuses);
        if (result.statuses.length <= 0) {
          this.setState({ encontrado: false });
          console.log(this.state.encontrado);
        } else {
          this.setState({ posts: result.statuses, encontrado: true });
        }
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <div>
        <Menu page="home" />
        <Busca loadInputFunc={this.handleKeyDown} />
        {this.state.encontrado && this.state.termo !== '' ? (
          <GrupoImgTweets posts={this.state.posts} termo={this.state.termo} />
        ) : (
          ""
        )}
        {this.state.encontrado === false && this.state.termo !== "" ? (
          <NadaEncontrado termo={this.state.termo} />
        ) : (
          ""
        )}
        <Footer />
      </div>
    );
  }
}

export default Home;
