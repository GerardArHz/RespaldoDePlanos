import React, { Component } from 'react';
import { Paper } from 'material-ui';

import ItemEdificios from './ItemEdificios';

class Edificios extends Component {
  render() {
    return (
      <div >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} zDepth={2}>
          <Paper className="col-8" style={{ width: '100%', height: 550, overflowY: 'auto', marginTop: '1%', alignItems: 'center', justifyContent: 'center' }} >
            <ItemEdificios />
          </Paper>
        </div>
      </div>
    );
  }
}

export default Edificios;
