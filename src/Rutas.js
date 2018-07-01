import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Inicio from './componentes/Inicio';
import Registro from './componentes/registro/Registro';
import Galeria from './componentes/galeria/Galeria';
import TabUsuario from './componentes/tabUsuario/TabUsuario';
import Areas from './componentes/edificios/Edificios';

class Rutas extends Component {
  render() {
    return (
      <Switch>
        <Route exact path = "/" component = { Inicio }/>
        <Route path = "/Registro" component = { Registro }/>
        <Route path = "/Galeria" component = { Galeria }/>
        <Route path = "/Modificar-datos" component = { TabUsuario }/>
        <Route path = "/Edificios" component = { Areas }/>

      </Switch>
    );
  }
}

export default Rutas;
