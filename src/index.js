// Importar componentes do react
import React from 'react';
  import ReactDOM from 'react-dom';

//Importar páginas 
import Home from './pages/home/Home';
import Sobre from './pages/sobre/sobre';
import Login from './pages/login/login';
import App from './pages/buscas/page'

// Importação Router
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from 'react-router-dom';


//Renderizar páginas
ReactDOM.render(
    		
		<Router>			
			<Switch>
				<Route path="/buscas" component={App} />				
				<Route path="/sobre" component={Sobre} />
				<Route path="/login" component={Login} />
				<Route path="/" exact= {true} component={Home} />
			</Switch>
		</Router>
    ,
    document.getElementById('root')
);

// ESCOPO
// Reorganizamos os arquivos
// importar no HOME.JS Menu e busca E RODAPE
// importar no sobre.JS Menu  RODAPE
// Retirar o menu 
// Retirar o rodape
// Rodapé no final da página

