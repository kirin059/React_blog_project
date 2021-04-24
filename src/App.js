import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Modals from './component/Modals';
import './App.css';

function App() {
  let [title, setTitle] = useState(['React 배우기', 'bootstrap 사용하기', 'Code Review']);
  let [date, setDate] = useState(['2021년 4월 18일', '2021년 4월 19일', '2021년 4월 20일'])
  let [like, setLike] = useState([0, 0, 0]);
  let [modals, setModals] = useState(false)
  let [num, setNum] = useState(0)
  let [input, inputChange] = useState('')


  function handleTitleChange() {
    let newTitle = [...title]

    newTitle[0] = 'React 배우기 2탄'
    newTitle[1] = 'bootstrap 사용하기 2탄'
    newTitle[2] = 'Code Review 2탄'

    setTitle(newTitle)
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="nav_container">
        <Navbar.Brand href="#home" className="nav_brand"> 🚀 React-Blog</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">HomeBlog</Nav.Link>
            <Nav.Link as={Link} to="https://section.blog.naver.com/BlogHome.nhn?directoryNo=0&currentPage=1&groupId=0">NeighborBlog</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="list_tap">Blog Contents List</div>

      {
        title.map((el, i) => {
          return (
            <div className="list" key={i}>
              <h3 onClick={() => { setNum(i) }}> {el} </h3>
              <p> {date[i]} 발행</p>
              <span onClick={() => {
                let increaseLike = [...like];  //state값 복사하기
                increaseLike[i]++
                setLike(increaseLike)  // state변화 함수를 사용(인자로 변화할 값 써주기)
              }}>🧡</span>
              <span> {like[i]} </span>
              <hr />
            </div>
          )
        })
      }

      <div className="btn_container">
        <button className="upgrade" onClick={handleTitleChange}>Contents Upgrade</button>
        <button className="view" onClick={() => { setModals(!modals) }}>Contents Views</button>
      </div>

      {
        modals === true
          ? <Modals title={title} num={num} date={date} />
          : null
      }

      <hr />

      <div className="publish">
        <input onChange={(e) => { inputChange(e.target.value) }} placeholder="Post your contents..." />
        <button onClick={() => {
          let titleCopy = [...title]
          let dateCopy = [...date]
          titleCopy.unshift(input)
          dateCopy[0] = '2021년 현재'
          dateCopy[1] = '2021년 4월 18일'
          dateCopy[2] = '2021년 4월 19일'
          dateCopy[3] = '2021년 4월 20일'

          setTitle(titleCopy)
          setDate(dateCopy)
        }} >Upload</button>
      </div>

    </div >
  );
}

export default App;
