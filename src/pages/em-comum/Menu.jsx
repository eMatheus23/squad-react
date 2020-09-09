import React from 'react';
import {Link} from 'react-router-dom';

//Imagens
import logo from '../../svg/logo.svg';
import homeIcon from '../../svg/icon-home.svg';
import loginIcon from '../../svg/icon-user-alt.svg';
import sobreIcon from '../../svg/icon-info-circle.svg';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="logo">
                    <Link to="/" target="_parent">
                        <img src={logo} alt="HashtagFinder" />
                    </Link>
                </div>



                <div className="menu">  


                    {this.props.home ?

                    <Link className="home" to="/">
                        <img src={homeIcon} alt="Home" />
                            home
                    </Link> :
                    
                    null}



                    {this.props.sobre ?
                    <Link className="sobre" to="/Sobre">
                        <img src={sobreIcon} alt="Sobre" />
                            sobre
                    </Link> : null}




                    {this.props.login ?
                    <Link className="login" to="/Login">
                        <img src={loginIcon} alt="Login" />
                            login
                    </Link> : null}             
                </div>      
            </div>
        );
    }
}