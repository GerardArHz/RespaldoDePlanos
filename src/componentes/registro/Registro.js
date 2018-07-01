import React, { Component } from 'react';
import Text from '../comunes/Text';
import { DatePicker, RaisedButton } from 'material-ui';

class Registro extends Component {
  render() {
    return (
      <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
        <div style={{ flexDirection: 'column' }}>
          <div>
            <h4>Registro</h4>
          </div>
          <div>
            <div className="border" style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
              <div style={{ flexDirection: 'column' }}>
                <div style={estilo.estilo} zDepth={2}>
                  <div style={{ height: 10 }}>
                    <h1></h1>
                  </div>
                  <div
                    style={{
                      marginLeft: 50, marginTop: 30
                    }}  >
                    <div>

                      <Text
                        etiqueta="Nombre" /><br />
                      <p3>Fecha de inicio</p3>
                      <DatePicker hintText="00-00-00" /><br />
                      <p3>Fecha de termino</p3>
                      <DatePicker hintText="00-00-00" />

                      <Text
                        etiqueta="Correo"
                        type="email"
                      /><br />

                      <Text
                        etiqueta="Dirección"
                      /><br />
                    </div>

                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginLeft: 50 }}>
          <div>
            <h4>Evidencias</h4>
          </div>
          <div className="border" style={estilo.evidencias} zDepth={2}>
            <div style={{ flexDirection: 'row' }}>
              <div style={{ height: 20 }}>
                <h1></h1>
              </div>

              <div style={{ flexDirection: 'row', display: 'flex' }} >
                <div style={{ marginLeft: 50 }}>
                //
                </div>
                <div style={{ marginLeft: 50 }}>
                //
                </div>
              </div>

              <div style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }} >
                <div style={{ marginLeft: 50 }}>
                //
                </div>
                <div style={{ marginLeft: 50 }}>
                //
                </div>
              </div>

              <div style={{ flexDirection: 'row', display: 'flex', marginTop: 10 }} >
                <div style={{ marginLeft: 50 }}>
                //
                </div>
                <div style={{ marginLeft: 50 }}>
                //
                </div>
              </div>

              <div style={{ marginLeft: 200, marginTop: 80 }}>
                <RaisedButton
                  label="Aceptar" />
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
    height: 480,
    width: 500,
    margin: 1,
    overflowY: 'auto'
  },
  evidencias: {
    alignItems: 'column',
    flexDirection: 'row',
    height: 480,
    width: 350,
    margin: 1,
    marginTop: 15
  }
};

export default Registro;
