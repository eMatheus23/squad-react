// Importar componentes do react
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ReactDOM from 'react-dom';

//Importar páginas
import Home from './pages/home/home';
import Sobre from './pages/sobre/sobre';
import Login from './pages/login/login';


//Renderizar páginas
ReactDOM.render(
    <React.StrictMode>
		<Router>
			<Switch>
				<Route path="/sobre" component={Sobre} />
				<Route path="/login" component={Login} />
				<Route path="/" component={Home} />
			</Switch>
		</Router>
    </React.StrictMode>,
    document.getElementById('root')
);