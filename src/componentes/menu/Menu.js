import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FlatButton from 'material-ui/FlatButton';

class Menu extends Component {
  render() {
    return (
      <div>
        <div style = {{ height: 10 }}></div>
        <div style = {{ marginLeft: -40 }}>
          <ul>
          <div>
            <Link to = "/">
            <FlatButton label= "Areas"
            style = {{
              width: 267,
              height: 50
             }}
            /></Link><br/>
          </div>

          <div style = {{ marginTop: 5 }}>
            <Link to = "/Registro">
            <FlatButton
            label= "Registro"
            style = {{
              width: 267,
              height: 50
            }} /></Link><br/>
          </div>

          <div style = {{ marginTop: 5 }}>
            <Link to = "/Galeria">
            <FlatButton label= "Galeria"
            style = {{
              width: 267,
              height: 50
            }} /></Link><br/>
          </div>

          <div style = {{ marginTop: 5 }}>
            <Link to = "/Edificios">
            <FlatButton label= "Edificios"
            style = {{
              width: 267,
              height: 50
            }} /></Link>
          </div>

          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
