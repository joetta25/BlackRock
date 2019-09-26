import React, { Component } from 'react'
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import Styles from '../Styles/Styles'


class Table extends Component {
  render() {
    return (
      <div>
        {/* <Styles style={{ height: '300px' }}>
          <BootstrapTable data={this.props.data}
          >
            <TableHeaderColumn isKey dataField='Task Name'
          >
            Task Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Status'>
            Status
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Description'>
            Description
          </TableHeaderColumn>
          </BootstrapTable>
        </Styles> */}
      </div>
    );
  }
}

export default Table;