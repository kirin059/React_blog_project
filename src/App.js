import React, { useState } from 'react';
import './App.css';

function App() {
  // state(변수 대신 사용하는 데이터 저장공간) 사용 방법
  // let [state변수, state바꾸는함수] = useState('state내용') >> 하나의 내용 담기
  // let [state변수, state바꾸는함수] = useState(['state내용', 'state내용']) >> 여러개를 배열로 내용 담기

  // setter함수
  let [title, titleChange] = useState(['커피 맛집 추천', '드라마 추천', '영화 추천']);
  let [like, likeChange] = useState(0)

  // function handleTitleChange() {
  //   titleChange(['블랙라떼 맛집 추천', '넷플릭스 드라마 추천', '왓챠 영화 추천'])
  // }

  function handleTitleChange() {
    let newTitle = [...title];
    newTitle[0] = '블랙라떼 맛집 추천'
    newTitle[1] = '넷플릭스 드라마 추천'
    newTitle[2] = '왓챠 영화 추천'
    titleChange(newTitle)
  }

  return (
    <div className="App">
      <div className="black_nav">
        <div>🎃 추천 blog</div>
      </div>

      <div className="list">
        <h3> {title[0]} <span onClick={() => { likeChange(like + 1) }}>👍</span> {like} </h3>
        <p> 4월 14일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[1]} </h3>
        <p> 4월 15일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[2]} </h3>
        <p> 4월 16일 발행</p>
        <hr />
      </div>
      <button onClick={handleTitleChange}>Keyword Search</button>

      <Modal />

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
