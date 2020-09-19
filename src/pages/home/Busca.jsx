import React from "react";

function limparHashtag() {}

const handleKeyDown = (event) => {
  if (event.key === "Enter" && event.target.value !== '') {
    event.preventDefault();
    
    var termoBusca = event.target.value
    
    console.log(termoBusca);
  }
};

function Busca() {
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
          onFocus={limparHashtag}
          className="input"
          placeholder="Buscar..."
          onKeyDown={handleKeyDown}
        />
        <div className="message"></div>
      </div>
    </div>
  );
}

export default Busca;
