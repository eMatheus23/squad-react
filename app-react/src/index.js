import ReactDOM from "react-dom";
import React from "react";
import imgBg from '../src/hero-bg.jpg';
import homeLG from '../src/icon-home.svg';
import '../src/App.css';

const form = (
    <div className = "content" style ={{
        backgroundImage:`url(${imgBg})`,
        backgroundPosition: `center`,
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        width: `100vw`,
        height: `100vh`,
        position: `absolute`}}>
         <img className ="logo" style ={{backgroundImage:`url(${homeLG})`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                width: `100px`,
                height: `100px`,
                position: `absolute`
                }}>
                </img>   
                <form className ="formulario" 
                style ={{display: "flex",
                flexDirection: "column",
                alignContent: "center", 
                alignItems: "center",}}>
                <h1 className ="titulo-login">Login</h1>
                    <input className ="inputs" type = "text" placeholder = "Usuário"></input> <br></br>
                    <input className ="inputs" type = "password" placeholder = "Senha"></input> <br></br>
                    <input className ="botao-acessar" type = "button" value = "ACESSAR"></input>
                </form>     
    </div>
);
ReactDOM.render(
    form,
    document.getElementById("root")
);
