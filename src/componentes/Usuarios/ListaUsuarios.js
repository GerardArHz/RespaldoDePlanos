import React, { Component } from 'react';
import { Paper } from 'material-ui';

import ItemUsuario from './ItemUsuario';

class ListaUsuarios extends Component {
  render() {
    return (
     <div>
       <div>
        </div>
        <div className= "container" style ={{  display: 'flex', alignItems: 'center', justifyContent: 'center' }} zDepth={2}>
        <Paper className= "col-8" style={{ width: '80%', height: 500, overflowY: 'auto', marginTop: '1%', alignItems: 'center', justifyContent: 'center'  }} >
          <ItemUsuario/>
        </Paper>
      </div>
     </div>
    );
  }
}

const estilo = {
  lista: {
    marginTop: '2%',
    marginLeft: '2%',
    marginRigth: '2%',
    display: 'flex',
    height: '100%',
    width: '100%',
    flexDirection: 'column'
  }
};
export default ListaUsuarios;
