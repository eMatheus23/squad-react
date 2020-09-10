// Importar componentes do react
import React from 'react';


//Importar páginas 
import Menu from './pages/menu/Menu';
import Home from './pages/home/home';
import Sobre from './pages/sobre/sobre';
import Login from './pages/login/login';

// Importação Router
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from 'react-router-dom';
  import ReactDOM from 'react-dom';

//Renderizar páginas
ReactDOM.render(
    <React.StrictMode>			
		<Router>
			<Menu/>
			<Switch>				
				<Route path="/sobre" component={Sobre} />
				<Route path="/login" component={Login} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// ESCOPO
// Reorganizamos os arquivos
// importar no HOME.JS Menu e busca E RODAPE
// importar no sobre.JS Menu  RODAPE
// Retirar o menu 
// Retirar o rodape
// Rodapé no final da página

