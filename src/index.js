import React from 'react';
import ReactDOM from 'react-dom';
import './css/menu-rodape.css';
import './css/sobre.css';

import Menu from './componentes/Sobre-menu'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
            <Route exact={true} path='/'>
                <Menu home={false} sobre={true} login={true} />
            </Route>
            <Route path='/Sobre'>
              <Menu home={true} sobre={false} login={true} />
            </Route>
            <Route path='/Login'>
              <Menu home={true} sobre={true} login={false} />
            </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);