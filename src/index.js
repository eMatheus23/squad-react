import React from 'react';
import ReactDOM from 'react-dom';
import './css/menu-rodape.css';
import './css/sobre.css';

//Componentes
import Menu from './componentes/Sobre-menu';
import SobreEquipe from './componentes/Sobre-equipe';
import SobreProjeto from './componentes/Sobre-projeto';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
            <Route exact={true} path='/'>
                <Menu home={false} sobre={true} login={true} />
            </Route>
              <Route path='/Sobre'>
              <Menu home={true} sobre={false} login={true} />
              <SobreProjeto />
              <SobreEquipe />
            </Route>
            <Route path='/Login'>
              <Menu home={true} sobre={true} login={false} />
            </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
