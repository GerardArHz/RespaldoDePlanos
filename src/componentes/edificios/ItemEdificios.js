import React, { Component } from 'react';

import { FlatButton, Dialog } from 'material-ui';

import Detalles from './Detalles';
class ItemEdificios extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const boton = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Aceptar"
        primary={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div>
        {tableData.map((row, index) => (
          <div className="col-12">
            <div className="border" key={index} style={{ width: '100%', height: 80, marginTop: '1%' }}>
              <div className="row">
                <div className="col-8">
                  <div style={{ marginLeft: '5%', display: 'flex' }}>
                    <h5 style={{ marginTop: '2%' }}>{row.Edificio}</h5>
                  </div>
                  <div style={{ marginTop: '0.5%', marginLeft: '5%', display: 'flex' }}>
                    <spam>
                      {row.institucion}
                    </spam>
                  </div>
                </div>
                <div className="col-4" style={{ alignItems: 'center', display: 'flex' }}>
                  <FlatButton label="Detalles" onClick={this.handleOpen} />
                  <Dialog
                    title="Edificio: Areas"
                    actions={boton}
                    modal={true}
                    open={this.state.open}
                  >
                    <Detalles/>
                </Dialog>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
const tableData = [
  {
    Edificio: 'Edificio A',
    institucion: 'Instituto Tecnologico de Tlaxiaco'
  },
  {
    Edificio: 'Edificio B',
    institucion: 'Instituto Tecnologico de Tlaxiaco'
  },
  {
    Edificio: 'Edificio C',
    institucion: 'Instituto Tecnologico de Tlaxiaco'
  },
  {
    Edificio: 'Edificio D',
    institucion: 'Instituto Tecnologico de Tlaxiaco'
  },
  {
    Edificio: 'Edificio E',
    institucion: 'Instituto Tecnologico de Tlaxiaco'
  }
];
export default ItemEdificios;
