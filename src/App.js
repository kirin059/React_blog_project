import React, { useState } from 'react';
import './App.css';

function App() {
  // state(변수 대신 사용하는 데이터 저장공간) 사용 방법
  // let [state변수, state바꾸는함수] = useState('state내용') >> 하나의 내용 담기
  // let [state변수, state바꾸는함수] = useState(['state내용', 'state내용']) >> 여러개를 배열로 내용 담기

  let [title, titleChange] = useState(['State 배우기', 'Conponent 배우기', 'Blog 만들기']);
  let [like, likeChange] = useState(0)
  let [modal, modalChange] = useState(false)

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
      <div className="nav">
        <div>🎃 React Blog</div>
      </div>

      <button className="upgrade" onClick={handleTitleChange}>Upgrade</button>

      <div className="list">
        <h3> {title[0]} </h3>
        <p> 4월 14일 발행</p>
        <span onClick={() => { likeChange(like + 1) }}>👍</span> <span> {like} </span>
        <hr />
      </div>

      <div className="list">
        <h3> {title[1]} </h3>
        <p> 4월 14일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3> {title[2]} </h3>
        <p> 4월 14일 발행</p>
        <hr />
      </div>

      <button className="view" onClick={() => { modalChange(!modal) }}>Contents Views</button>

      {/* if문을 쓰고 싶으면 '삼항연산자'를 써야한다(중괄호로 전체를 감싸줘야 한다) */}
      {
        modal === true
          ? <Modal />
          : null
      }


    </div>
  );
}


function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
