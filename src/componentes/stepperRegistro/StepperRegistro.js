import React, { Component } from 'react';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Text from '../comunes/Text';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';


const getStyles = () => {
  return {
    root: {
      width: '100%',
      maxWidth: 700,
      margin: 'auto',
    },
    content: {
      margin: '0 16px',
    },
    actions: {
      marginTop: 12,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    backButton: {
      marginRight: 12,
    },
  };
};
class StepperRegistro extends Component {

  state = {
    stepIndex: null,
    visited: [],
  };

  componentWillMount() {
    const {stepIndex, visited} = this.state;
    this.setState({visited: visited.concat(stepIndex)});
  }

  componentWillUpdate(nextProps, nextState) {
    const {stepIndex, visited} = nextState;
    if (visited.indexOf(stepIndex) === -1) {
      this.setState({visited: visited.concat(stepIndex)});
    }
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
          <Paper style={estilo.estilo} zDepth={1}>
            <div style= {{ height:10 }}>
              <h1></h1>
            </div>
            <div
          style = {{
          marginLeft:50, marginTop: 30 }}  >
              <div>
              <Text
              etiqueta = "Telefono"
              /><br/>
              <Text
              etiqueta = "correo"
              type = "email"
              /><br/>

              <Text
              etiqueta = "direccion"
              /><br/>
              </div>
              </div>


            </Paper>
          </div>
        );
      case 1:
        return (
          <Paper style={estilo.estilo} zDepth={1}>
            <div style= {{ height:10 }}>
              <h1></h1>
            </div>
            <div
          style = {{
          marginLeft:50, marginTop: 30 }}  >
              <div>
                <Text
                etiqueta = "Nombre"/><br/>

                <Text
                etiqueta = "Apellido paterno"
                /><br/>

                <Text
                etiqueta = "Apellido materno"
                /><br/>
                </div>
              </div>
            </Paper>
        );
        case 2:
          return (
            <div>
            <Paper style={estilo.estilo} zDepth={1}>
              <div style={{ height: 10 }}>
                <h1></h1>
              </div>
              <div
                style={{
                  marginLeft: 50, marginTop: 30
                }}  >
                <div>

                  <Text
                    etiqueta="Nombre" /><br />

                  <Text
                    etiqueta="Apellido paterno"
                  /><br />

                  <Text
                    etiqueta="Apellido materno"
                  /><br />
                </div>
              </div>
            </Paper>
            </div>
          );
      default:
        return 'inicia tu registro de usuario pulsando la opcion numero 1';
    }
  }

  render() {
    const {stepIndex, visited} = this.state;
    const styles = getStyles();

    return (
      <div style={styles.root}>

        <Stepper linear={false}>
          <Step completed={visited.indexOf(0) !== -1} active={stepIndex === 0}>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
              Parte 1
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(1) !== -1} active={stepIndex === 1}>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
              Parte 2
            </StepButton>
          </Step>
          <Step completed={visited.indexOf(2) !== -1} active={stepIndex === 2}>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
              Parte 3
            </StepButton>
          </Step>
        </Stepper>
        <div style={styles.content}>
          <p>{this.getStepContent(stepIndex)}</p>
          {stepIndex !== null && (
            <div style={styles.actions}>
              <FlatButton
                label="Back"
                disabled={stepIndex === 0}
                onClick={this.handlePrev}
                style={styles.backButton}
              />
              <RaisedButton
                label="Next"
                primary={true}
                onClick={this.handleNext}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
const estilo = {
  estilo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'column',
      height: 300,
      width: 500,
      margin: 1,
      marginLeft: '15%'
    }
};
export default StepperRegistro;
