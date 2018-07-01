import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
class Text extends Component {
  render() {
      const { etiqueta, texto, type } = this.props;
    return (
      <div>
          <p3>{etiqueta}</p3><br />
          <TextField
            hintText= {texto}
            type= { type }
          />
        </div>

    );
  }
}
Text.defaultProps = {
  etiqueta: 'Text',
  texto: "Text"
};

export default Text;
