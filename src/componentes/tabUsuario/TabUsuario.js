import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Tabs, Tab } from 'material-ui/Tabs';

import ModificarUsuario from '../modificarUsuario/ModificarUsuario';
import StepperRegistro from '../stepperRegistro/StepperRegistro';
import ListaUsuarios from '../Usuarios/ListaUsuarios';

class TabUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div style={{ marginTop: -10 }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}>
          <Tab
            buttonStyle={{ backgroundColor: '#EEEEEE' }}
            style={{ color: 'black' }}
            label="Modificar usuario"
            value="a">
            <div>
              <ModificarUsuario />
            </div>
          </Tab>

          <Tab
            buttonStyle={{ backgroundColor: '#EEEEEE' }}
            style={{ color: 'black' }}
            label="Registrar usuario"
            value="b">

            <div>
              <StepperRegistro />
            </div>

          </Tab>
          <Tab
            buttonStyle={{ backgroundColor: '#EEEEEE' }}
            style={{ color: 'black' }}
            label="Lista de Usuarios"
            value="c">

            <div>
              <ListaUsuarios />
            </div>

          </Tab>

        </Tabs>
      </div>
    );
  }
}

export default TabUsuario;
