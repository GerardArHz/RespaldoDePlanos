import React, { Component } from 'react';
class Detalles extends Component{
    render(){
      return(
        <div>
          <div className="border" style={{ display: 'flex', justifyContent: 'center', alignItems:'center', width: '100%', height: '100%' }}>
            texto
          </div>
          <div>
            <div
             className="border"
             style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems:'center',
                width: '100%',
                height: '100%',
                marginTop:'0.5%'}}>
              planos
            </div>
          </div>
        </div>
      );
    }
}
export default Detalles;
