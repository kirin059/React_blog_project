import React, { useState } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function App() {
  // state(변수 대신 사용하는 데이터 저장공간) 사용 방법
  // let [state변수, state바꾸는함수] = useState('state내용') >> 하나의 내용 담기
  // let [state변수, state바꾸는함수] = useState(['state내용', 'state내용']) >> 여러개를 배열로 내용 담기

  let [title, titleChange] = useState(['State 배우기', 'Conponent 배우기', 'Blog 만들기']);
  let [like, likeChange] = useState(0)
  let [modal, modalChange] = useState(false)
  let [num, numChange] = useState(0)
  let [input, inputChange] = useState('')  // input value를 저장할 저장공간 지정(초기값: 빈문자열)

  // state의 내용을 변경하고 싶을 때, onClick에 실행할 새로운 함수를 만들어준다(=handleTitleChange)
  function handleTitleChange() {
    // state의 내용을 복사해온다
    let newTitle = [...title];

    // 복제하여 새로 담은 변수에서, 바꿀 내용을 지정해준다
    newTitle[0] = 'State 배우기 2탄'
    newTitle[1] = 'Conponent 배우기 2탄'
    newTitle[2] = 'Blog 만들기 2탄'

    // state를 바꾸는 '변경함수'의 인자에 새 변수(바뀐내용)를 담아준다
    titleChange(newTitle)
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

      <button className="upgrade" onClick={handleTitleChange}>Upgrade</button>


      {/* 반복문을 쓰고 싶으면 return 내에서는 'map'을 써야한다(중괄호로 전체를 감싸줘야 한다) 
          반복문 쓸때는 꼭 key={i}를 써주기*/}

      {
        title.map((el, i) => {
          return (
            <div className="list" key={i}>
              <h3 onClick={() => { numChange(i) }}> {el} </h3>
              <p> 4월 14일 발행</p>
              <span onClick={() => { likeChange(like + 1) }}>👍</span>
              <span> {like} </span>
              <hr />
            </div>
          )
        })
      }

      <button className="view" onClick={() => { modalChange(!modal) }}>Contents Views</button>


      {/* if문을 쓰고 싶으면 '삼항연산자'를 써야한다(중괄호로 전체를 감싸줘야 한다) */}

      {
        modal === true
          ? <Modal title={title} num={num} />
          : null
      }

      <div className="publish">

        {/* <input onChange={(e) => { console.log(e.target.value) }} />  >> input안의 값을 확인하고 싶을 때 
            input에 저장한 내용(=state)이 inputChange함수 안에 저장된다*/}
        <input onChange={(e) => { inputChange(e.target.value) }} />

        <button onClick={() => {
          // state를 수정할 때는, 원본 state를 건들지 말고, 사본을 하나 만들어서 수정하자
          let titleCopy = [...title]
          titleCopy.unshift(input)
          titleChange(titleCopy)
        }} >Upload</button>

      </div>
    </div >
  );
}


function Modal(props) {
  return (
    <div className="modal">
      <h2> {props.title[props.num]} </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
