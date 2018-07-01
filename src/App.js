import React, { Component } from 'react';
import { Paper,FlatButton, TextField } from 'material-ui';
import logo from './image/logo.png';
import AppIndex from './AppIndex';
import axios from 'axios';

class App extends Component {
  state = {
   estado: true,
   datos:[]
 };

 componentDidMount(){
   axios.get('http://localhost/Plan-Api/backend/Datos.php')
   .then(res => {
     const datos = res.data;
       this.setState({ datos });
     console.log(res.data);
   })
 }

 onClick() {
   this.setState({ estado: !this.state.estado});
   console.log(this.state.estado);
 };

  render() {

    return (
    <div>{
      this.state.estado===false?
      <AppIndex/>
    : <div  style= {{ backgroundColor: '#fafafa'}}>
        <div>
          <Paper
            style={{
              width:'100%',
              height:150,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              backgroundColor: '#EEEEEE'
             }}>

            <div className="container">
              <div className="row">
                <div className="col-1" style={{ marginLeft: 10 }}>
                  <img src={logo} width={100} />
                </div>
              <div
                className= "col-8"
                style = {{
                  justifyContent:'center',
                  alignItems: 'center',
                  display: 'flex',
                  marginLeft: 10 }}>

                <div className="column">
                    <h4>Instituto Tecnologico de tlaxiaco</h4>
                   <p>Sistema de Respaldo de planos</p>

                </div>
              </div>
              </div>
            </div>
          </Paper>
        </div>
          <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: 20 }}>
            <Paper style={{ width: 400, height:350, bacground: 'red', flexDirection: 'column' , justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <div>
                <p>Usuario</p>
                <TextField id="user"/>
              </div>
              <div>
                <p>Contraseña</p>
                <TextField
                id="password"
                type="password"/>
              </div>
              <div style={{ marginTop: 20, width: 100 }}>
                <FlatButton label="Aceptar" onClick= {
                  this.onClick.bind(this)
                }/>
              </div>
            </Paper>
          </div>
          <div style ={{ justifyContent: 'center', display: 'flex', marginTop: 10}}>
            <div style={{ height: 90, justifyContent: 'center' }}>
              <p>Inicio de seion al personal</p>
            </div>
          </div>
        </div>}
  </div>
    );
  }
}
export default App;
