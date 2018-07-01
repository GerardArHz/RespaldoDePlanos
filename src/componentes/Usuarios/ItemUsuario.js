import React, { Component } from 'react';
import Edit from 'material-ui/svg-icons/image/edit';
import Delete from 'material-ui/svg-icons/action/delete';
import { IconButton } from 'material-ui';

class ItemUsuario extends Component {
  render(){
    return(
      <div>
      {tableData.map( (row, index) => (
          <div className= "col-12">
            <div className="border" key={index} style={{ width: '100%', height: 60, marginTop: '1%' }}>
                <div className="container">
                  <div className= "row">
                    <div className="col-8" style={{ alignItems: 'center', display: 'flex'}}>
                      <div>{ row.name }</div>
                    </div>
                    <div className="col-2" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                      <IconButton>
                        <Edit />
                      </IconButton>
                    </div>
                    <div className="col-2" style={{ alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                      <IconButton>
                        <Delete />
                      </IconButton>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          ))}
      </div>
    );
  }
}
const tableData = [
  {
    name: 'nombre completo 1'
  },
  {
    name: 'nombre completo 2'
  },
  {
    name: 'nombre completo 3'
  },
  {
    name: 'nombre completo 4'
  },
  {
    name: 'nombre completo 5'
  },
  {
    name: 'nombre completo 6'
  },
  {
    name: 'nombre completo 7'
  }
];
export default ItemUsuario;
