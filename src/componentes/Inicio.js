import React, { Component } from 'react';
import { Paper, Divider } from 'material-ui';

import ItemAreas from './areas/ItemAreas';

class Inicio extends Component {
  render() {
    return (
     <div>
     <div className= "container" style ={ estilo.contenedor } zDepth={2}>
        <Paper className= "col-8" style={ estilo.estilo }>
          <div style={ estilo.areas }>
          <h5>AREAS</h5>
          <p>Lista de areas en general.</p>
          </div>
          <Divider/>
          <ItemAreas/>
        </Paper>
      </div>
     </div>
    );
  }
}
const estilo = {
  contenedor:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  estilo:{
    width: '100%',
    height:550,
    overflowY: 'auto',
    marginTop: '1%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  areas: {
    marginTop:10,
    marginLeft: '5%'
  }
};
export default Inicio;
