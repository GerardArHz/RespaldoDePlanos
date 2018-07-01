import React, { Component } from 'react';
import Text from '../comunes/Text';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Cuentas extends Component {
  render() {
    return (
      <div style= {{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
        <div style= {{ flexDirection: 'column'}}>
        <div style = {{ display: 'flex', justifyContent: 'center' }}>
          <h2>Usuario Nuevo</h2>
        </div>
            <div  className="border" style={estilo.estilo} zDepth={2}>
              <div style= {{ height:10 }}>
                <h1></h1>
              </div>
              <div
            style = {{
            marginLeft:50, marginTop: 30 }}  >
                <div>
                <Text
                etiqueta = "Usuario"
                /><br/>
                <Text
                etiqueta = "Contraseña"
                type = "password"
                /><br/>

                <Text
                etiqueta = "Confirmar contraseña"
                type = "password"
                /><br/>
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'column',
      height: 300,
      width: 600,
      margin: 1
    }
};

export default Cuentas;
