import React, { Component } from 'react';
import Text from '../comunes/Text';
import RaisedButton from 'material-ui/RaisedButton';

class ModificarUsuario extends Component {
  render() {
    return (
      <div>
        <div></div>
        <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center', marginTop: 30 }}>
          <div style={{ flexDirection: 'column' }}>

            <div className="border" style={estilo.estilo} zDepth={2}>
              <div style={{ justifyContent: 'center', display: 'flex' }}>
                <h3>Usuario</h3>
              </div>

              <div style={{ height: 20 }}></div>

              <div style={{ marginLeft: 70 }}>

                <Text
                  etiqueta="Usuario actual"
                /><br />

                <Text
                  etiqueta="Nuevo Usuario"
                /><br />

                <Text
                  etiqueta="Contraseña"
                  type="password"
                /><br />

              </div>
              <div style={{ marginLeft: 200 }}>
                <RaisedButton label="Actualizar" style={{ margin: 12 }} />
              </div>
              <div>
                <h1></h1>
              </div>
            </div>
          </div>

          <div style={{ marginLeft: 50 }}>
            <div className="border" style={estilo.evidencias} zDepth={2}>
              <div style={{ justifyContent: 'center', display: 'flex' }}>
                <h3>Contraseña</h3>
              </div>
              <div style={{ height: 20 }}></div>

              <div style={{ marginLeft: 70 }}>
                <Text
                  etiqueta="Contraseña actual"
                  type="password"
                /><br />
                <Text
                  etiqueta="Nueva contraseña"
                  type="password"
                /><br />

                <Text
                  etiqueta=" Confirmar nueva contraseña"
                  type="password"
                /><br />
              </div>

              <div style={{ marginLeft: 200 }}>
                <RaisedButton label="Actualizar" style={{ margin: 12 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
const estilo = {
  estilo: {
    alignItems: 'column',
    height: 420,
    width: 400,
    margin: 1
  },
  evidencias: {
    alignItems: 'column',
    height: 420,
    width: 400,
    margin: 1
  }
};

export default ModificarUsuario;
