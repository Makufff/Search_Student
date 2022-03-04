import React , {useState} from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import './datatable.css'

function Datatable (props) {
    
    const {Data} = props ;
    
    return (
        <Table celled>
          <Table.Header>
            <Table.Row>
              
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>เลขประจำตัวสอบ</Table.HeaderCell>
              <Table.HeaderCell>เลขประจำตัวประชาชน</Table.HeaderCell>
              <Table.HeaderCell>คำนำหน้า</Table.HeaderCell>
              <Table.HeaderCell>ชื่อ</Table.HeaderCell>
              <Table.HeaderCell>นามสกุล</Table.HeaderCell>
              <Table.HeaderCell>รายละเอียด</Table.HeaderCell>
              
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {Data}
          </Table.Body>

        </Table>
  )
}

export default Datatable
