import React, { Component } from 'react';

class ItemConsulta extends Component {
  render() {
    return (
      <div>
        {tableData.map((row, index) => (
          <div className="col-12">
            <div className="border" key={index} style={{ width: '100%', height: 80, marginTop: '1%' }}>
              <div style={{ marginLeft: '5%', display: 'flex' }}><h5 style={{ marginTop: 5 }}>{row.name}</h5></div>
              <div style={{ marginTop: '0.5%', marginLeft: '5%', display: 'flex' }}>
                <spam>
                  {`Edificio: ${row.Edificio}`}
                </spam>
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
    name: 'Sala de computo',
    Edificio: 'Edificio A'
  },
  {
    name: 'Sala magna 1',
    Edificio: 'Edificio B'
  },
  {
    name: 'Sala magna 2',
    Edificio: 'Edificio C'
  },
  {
    name: 'Aula 14',
    Edificio: 'Edificio D'
  },
  {
    name: 'Aula 9',
    Edificio: 'Edificio E'
  },
  {
    name: 'Aula 10',
    Edificio: 'Edificio E'
  }
];
export default ItemConsulta;
