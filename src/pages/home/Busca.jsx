import React from "react";
import Home from "./Home";

class Busca extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmitButton = this.handleKeyDown.bind(this);
  }

  limparHashtag() {}

  handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      event.preventDefault();

      const termoDigitado = this.refs.input.value;

      /*
      const termoDigitado = event.target.value;
      this.setState((state) => ({
        termo: termoDigitado,
      }));
      */

      // this.props.handleKeyDown(termoDigitado);

      console.log(termoDigitado);

      event.target.value = "";

      return <home termo={termoDigitado} />;
    }
  };

  render() {
    return (
      <div className="hero-image">
        <div className="hero-image-drop"></div>
        <div className="hero-text">
          <h1>
            Encontre hashtags
            <br /> de maneira fácil.
          </h1>
          <p>
            Digite o que deseja no campo de buscas e <br />
            confira os resultados do Twitter abaixo
          </p>
        </div>
        <div className="hero-busca">
          <input
            type="text"
            id="txt-busca"
            ref="input"
            onFocus={this.limparHashtag}
            className="input"
            placeholder="Buscar..."
            onKeyDown={this.handleKeyDown}
          />
          <div className="message"></div>
        </div>
      </div>
    );
  }
}

export default Busca;
