import React, { Component } from 'react';
import ListGaleria from './ListGaleria';
import { Paper } from 'material-ui';

class Galeria extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    selectable: true,
    multiSelectable: false,
    height: '300px'
  }
  render() {
    return (
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <Paper style={{ width: '95%', height: 550, overflowY: 'auto' }}>
          {
            planos.map((row, index) => (
              <div className="border" style={{ width: '98%', height: 250, marginLeft: '1%', marginTop: '0.5%' }} >
                <div style={{ marginLeft: '5%', height: 40 }}>
                  {row.name}
                </div>
                <div>
                  <ListGaleria />
                </div>
              </div>
            ))
          }
        </Paper>
      </div>
    );
  }
}
const planos = [
  {
    name: 'Planos 1'
  },
  {
    name: 'Planos 2'
  },
  {
    name: 'Planos 3'
  },
  {
    name: 'Planos 4'
  },
  {
    name: 'Planos 9'
  }
];
export default Galeria;
