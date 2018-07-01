import React, { Component } from 'react';
import { Paper,FlatButton } from 'material-ui';
import { Link } from 'react-router-dom';

import Rutas from './Rutas';
import Menu from './componentes/menu/Menu';
import Usuario from './componentes/menu/Usuario';

import logo from './image/logo.png'

class App extends Component {
  render() {

    const { nuevo } = this.props;

    return (
      <div style = { estilo.item }>

          <div style = {{
            display: 'flex',
            flex: 1 }}>
            <div style = { estilo.inicio } >
              <div className = "border-bottom" style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }} >
              <div className="container">
                <div className="row">
                  <div className="col-sm">
                    <div>
                      <img src = { logo } width= "46" height= "50"/>
                    </div>
                  </div>
                  <div className="col-sm">
                    <div style = {{ alignItems: 'center', justifyContent: 'center', dispaly: 'flex' }}>
                      <div><h5>Sistema de respaldo de planos</h5></div>
                      <div><p3>Instituto Tecnologico de tlaxiaco</p3></div>
                    </div>
                  </div>
                  <div className="col-sm">
                  <div style = {{ justifyContent: 'flex-end', display: 'flex' }} >
                    <Link to = "/Modificar-datos" style = {{ color: 'black', marginTop: '3%' }}>Usuario</Link><br/>
                  </div>
                  </div>
                </div>
              </div>

              </div>
            </div>
          </div>

          <div style = {{ display: 'flex', flex: 1, alignItems: 'center', width: '100%', zIndex: 1 }}>

            <div style = { estilo.principal }>
              <Rutas/>
            </div>
            <div style = { estilo.menu }>
              <div style  = {{ flexDirection: 'column' }}>
                <div>
                  <Paper style = { estilo.tamaño }>
                    <Menu/>
                  </Paper>
                </div>
              </div>
            </div>
          </div>
      </div>

    );
  }
}
const estilo = {
  item: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1
  },
  inicio: {
    dispaly: 'flex',
    width: '100%',
    height: 70
   },

  principal:{
    marginTop: 10,
    dispaly: 'flex',
    width: '80%',
    height: 550
  },
  menu: {
    dispaly: 'flex',
    width: '20%',
    height: 550,
    marginTop: -10
  },
  tamaño:{
    width: '100%',
    height: 590
  }
};


export default App;
