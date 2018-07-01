import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Menu1 from './menu/Menu';
class PaperMenu extends Component {
  render() {
    return (
      <div style = { estilo.item }>
        <Menu1/>
      </div>

    );
  }
}
const estilo = {
  item: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1
  }
};


export default PaperMenu;
