import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
 
 
class Table2 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey
              dataField='id'
              dataAlign='center'
              headerAlign="left"
              width="25"
              >
            Task Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='name'
              dataAlign='center'
              headerAlign="center"
              width="55"
              >
            Active
          </TableHeaderColumn>
          <TableHeaderColumn dataField='value'
              dataAlign='center'
              headerAlign="right"
              width="50">
            Description
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}
 
export default Table2