import React,{ Component } from 'react';

import RegistroRol from './RegistroRol';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const tableData = [
  {
    name: 'item 1'
  },
  {
    name: 'item 2'
  },
  {
    name: 'item 3'
  },
  {
    name: 'item 4'
  },
  {
    name: 'item 5'
  },
  {
    name: 'item 6'
  },
  {
    name: 'item 7'
  },
  {
    name: 'item 8'
  },
  {
    name: 'item 9'
  }
];
class ListaPlanos extends Component {

  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    height: '210px',
  }

  render(){
    return(
      <Table
      height={this.state.height}
      fixedHeader={this.state.fixedHeader}
      fixedFooter={this.state.fixedFooter}
      selectable={this.state.selectable}
      multiSelectable={this.state.multiSelectable}>

        <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}>
        </TableHeader>

        <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}>

            {tableData.map( (row, index) => (
                <TableRow key={index}>

                  <TableRowColumn><RegistroRol NombreRol = { row.name }/></TableRowColumn>

                </TableRow>
                ))}
        </TableBody>
      </Table>
    );
  }
}
export default ListaPlanos;
