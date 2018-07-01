import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Usuario extends Component {
  render() {
    return (
      <div>
          <div>
            <Link to = "/Modificar-datos" >Usuario</Link><br/>
          </div>
      </div>
    );
  }
}

export default Usuario;
