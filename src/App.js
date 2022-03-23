import React , {useState} from "react";
import Students from "./database/students"
import Searchinput from "./components/searchinput"
import DataTable from "./components/datatable"
import { Button, Grid, Header, Icon, Image, Label, List, ListItem, Modal, Table } from 'semantic-ui-react'
import './App.css'

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

function App() {

  const [open, setOpen] = React.useState(false)

  const [searchText , setsearchText] = useState('');

  const [dataDetail,setDataDeatil] = useState({
    exam_number : '',
    id_card : '',
    prefix_name : '',
    first_name : '',
    last_name : '',
    room : '',
    seat_number : '',
    room_number : '',
    type : '',
    school : '',
    province : '',
    sectype : '',
    condition : ''
  })

  const openModal = (element) =>{
    setDataDeatil({
      exam_number : element.เลขประจำตัวสอบ,
      id_card : element.เลขประจำตัวประชาชน,
      prefix_name : element.คำนำหน้า,
      first_name : element.ชื่อ,
      last_name : element.นามสกุล,
      room : element.ห้องสอบที่,
      seat_number : element.เลขที่นั่งสอบ,
      room_number : element.เลขห้องสอบ,
      type : element.ประเภทสมัคร,
      school : element.สถานศึกษาเดิม,
      province : element.จังหวัด,
      sectype : element.ประเภท,
      condition : element.เงื่อนไข
    })
    setOpen(true)
  }

  const filterData = Students.filter( (element , index) => {
      if(
        // element.ชื่อ === searchText||
        // element.นามสกุล === searchText || 
        // element.คำนำหน้า === searchText ||
        // element.เลขประจำตัวสอบ.toString() === searchText ||
        // element.เลขประจำตัวประชาชน.toString() === searchText
        element.ชื่อ.startsWith(searchText)||
        element.นามสกุล.startsWith(searchText) || 
        element.คำนำหน้า.startsWith(searchText) ||
        element.เลขประจำตัวสอบ.toString().startsWith(searchText) ||
        element.เลขประจำตัวประชาชน.toString().startsWith(searchText)
      )return true ;
      // if(searchText === '')return true ;
      // console.log(searchText);
      // if(!element.ชื่อ || 
      //   !element.นามสกุล ||
      //    !element.คำนำหน้า ||
      //     !element.เลขประจำตัวสอบ ||
      //      !element.เลขประจำตัวประชาชน)
      //   console.log(element);
    
  })
  const Data = filterData.map((element ,index) => {
    return <Table.Row>
                
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{element.เลขประจำตัวสอบ}</Table.Cell>
                <Table.Cell>{element.เลขประจำตัวประชาชน}</Table.Cell>
                <Table.Cell>{element.คำนำหน้า}</Table.Cell>
                <Table.Cell>{element.ชื่อ}</Table.Cell>
                <Table.Cell>{element.นามสกุล}</Table.Cell>
                <Table.Cell><Button onClick={() => openModal(element)}>รายละเอียด</Button></Table.Cell>
                
            </Table.Row>
})

  return (
    <div className="App">
      <Header as='h1'>
        💻 รายชื่อนักเรียนสอบเข้ารอบทั่วไป ม.1 ม.4 และ เงื่อนไขพิเศษ 
      </Header>
      <Label>
        <Icon name='closed captioning outline' /> โรงเรียนศรียาภัย
      </Label>
      <div className="Container">
        <Grid.Column>
        </Grid.Column>
          <div className = "item"><Searchinput value = {searchText} onvalueChange={setsearchText}/></div>
          <div className = "item"><DataTable Data = {Data}/></div>
      </div>
      <Modal onClose={() => setOpen(false)} open={open}>
        <Modal.Header>รายละเอียด</Modal.Header>
          <Modal.Content>
          <List.Item as='li'>เลขประจำตัวสอบ : {dataDetail.exam_number}</List.Item>
          <List.Item as='li'>เลขประจำตัวประชาชน : {dataDetail.id_card}</List.Item>
          <List.Item as='li'>คำนำหน้า : {dataDetail.prefix_name}</List.Item>
          <List.Item as='li'>ชื่อ : {dataDetail.first_name}</List.Item>
          <List.Item as='li'>นามสกุล : {dataDetail.last_name}</List.Item>
          <List.Item as='li'>ห้องสอบที่ : {dataDetail.room}</List.Item>
          <List.Item as='li'>เลขที่นั่งสอบ : {dataDetail.seat_number}</List.Item>
          <List.Item as='li'>เลขห้องสอบ : {dataDetail.room_number}</List.Item>
          <List.Item as='li'>ประเภทสมัคร : {dataDetail.type}</List.Item>
          <List.Item as='li'>สถานศึกษาเดิม : {dataDetail.school}</List.Item>
          <List.Item as='li'>จังหวัด : {dataDetail.province}</List.Item>
          <List.Item as='li'>ประเภท : {dataDetail.sectype}</List.Item>
          <List.Item as='li'>เงื่อนไข : {dataDetail.condition}</List.Item>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="ปิด"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default App;