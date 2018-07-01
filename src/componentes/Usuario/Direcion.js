import React, { Component } from 'react';
import Text from '../comunes/Text';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Direcion extends Component {
  render() {
    return (
      <div style= {{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
        <div style= {{ flexDirection: 'column'}}>
        <div style = {{ display: 'flex', justifyContent: 'center' }}>
          <h2>Usuario Nuevo</h2>
        </div>
            <Paper style={estilo.estilo} zDepth={2}>
              <div style= {{ height:10 }}>
                <h1></h1>
              </div>
              <div
            style = {{
            marginLeft:50, marginTop: 30 }}  >
                <div>
                <Text
                etiqueta = "Telefono"
                /><br/>
                <Text
                etiqueta = "correo"
                type = "email"
                /><br/>

                <Text
                etiqueta = "direccion"
                /><br/>
                </div>
                </div>


              </Paper>
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

export default Direcion;
