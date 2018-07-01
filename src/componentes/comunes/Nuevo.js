import React from 'react';
import Paper from 'material-ui/Paper';
import Boton from './Boton';
const style = {
  height: 100,
  width: 100,
  margin: 5,
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
};

const Nuevo = () => (
  <div style:>
    <Paper style={style} zDepth={1} >
      <div>
        <Boton/>
      </div>
    </Paper>

  </div>
);

export default Nuevo;
