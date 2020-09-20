import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import logo from '../../svg/logo.svg'

import sobre from '../../svg/icon-info-circle.svg'
import login from '../../svg/icon-user-alt.svg'
import home from '../../svg/icon-home.svg'
import buscas from '../../svg/icon-power-off.svg'

class Menu extends Component {
    render() {

        let botoes = {}

        botoes['home'] = <div className="menu">
            <Link className="sobre" to="/Sobre">
                <img src={sobre} alt="Sobre" />sobre
            </Link>
            <Link className="login" to="/Login">
                <img src={login} alt="Login" />login
            </Link>
        </div>
        botoes['login'] = <div className="menu">
            <Link className="home" to="/">
                <img src={home} alt="Home" />home
            </Link>
        </div>
        botoes['sobre'] = <div className="menu">
            <Link className="home" to="/">
                <img src={home} alt="Home" />home
            </Link>      
            <Link className="login" to="/Login">
                <img src={login} alt="Login" />login
            </Link>               
        </div>
        botoes['buscas'] = <div className="sair">
            <Link className="sair" to="/Login">
                <img src={buscas} alt="Sair" />Sair
            </Link>
        </div>

        return <div className="container">
                    <div className="logo">
                        <a href={"./menu.js"} target="_parent">
                            <img src={logo} alt="HashtagFinder" />
                        </a>
                    </div>
                    {botoes[this.props.page]}
                </div>;
    }
}

export default Menu;