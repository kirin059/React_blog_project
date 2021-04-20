import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Modals from './component/Modals';
import './App.css';

function App() {
  let [title, setTitle] = useState(['React 배우기', 'bootstrap 사용하기', 'Code Review']);
  let [date, setDate] = useState(['2021년 4월 18일', '2021년 4월 19일', '2021년 4월 20일'])
  let [like, setLike] = useState([0, 0, 0]);
  let [modals, setModals] = useState(false)
  let [num, setNum] = useState(0)


  function handleTitleChange() {
    let newTitle = [...title] //state값 복사하기

    // 새로 변화시킬 state값 정의하기
    newTitle[0] = 'React 배우기 2탄'
    newTitle[1] = 'bootstrap 사용하기 2탄'
    newTitle[2] = 'Code Review 2탄'

    setTitle(newTitle) // state변화 함수를 사용(인자로 변화할 값 써주기)
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="nav_container">
        <Navbar.Brand href="#home" className="nav_brand"> 🚀 React-Blog</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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

      {/* <div className="list">
        <h3> {title[0]} </h3>
        <p> {date[0]} 발행</p>
        <span onClick={() => { likeChange(like + 1) }}>🧡</span>
        <span> {like} </span>
        <hr />
      </div>

      <div className="list">
        <h3> {title[1]} </h3>
        <p> {date[1]} 발행</p>
        <span onClick={() => { likeChange(like + 1) }}>🧡</span>
        <span> {like} </span>
        <hr />
      </div>


      <div className="list">
        <h3> {title[2]} </h3>
        <p> {date[2]} 발행</p>
        <span onClick={() => { likeChange(like + 1) }}>🧡</span>
        <span> {like} </span>
        <hr />
      </div> */}

      {/* 반복문을 쓸때 return 내에서는 'map'을 쓰기(중괄호로 전체를 감싸주기) , 반복문 쓸때는 꼭 key={i}를 써주기*/}
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

      <button className="upgrade" onClick={handleTitleChange}>Contents Upgrade</button>

      <button className="view" onClick={() => { setModals(!modals) }}>Contents Views</button>

      {/* if문을 쓰고 싶으면 '삼항연산자'를 써야한다(중괄호로 전체를 감싸줘야 한다) */}
      {
        modals === true
          ? <Modals title={title} num={num} date={date} />
          : null
      }


    </div >
  );
}




export default App;



// 리액트 state를 변경하려면 

// 1. state가 일반 숫자나 true false나 문자 자료라면 그냥 state변경함수를 사용해서 변경 
// 2. state가 array, object자료라면 (1) state 카피본을 만든뒤 (2) 수정한 다음 (3) state변경함수를 사용해서 변경 
// 그리고 state변경함수는 기존 state를 갈아치우는 식으로 동작 