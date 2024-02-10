import './App.css';
import {useState} from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [a, setTitle] = useState(['남자 코드 추천', '강남 우동맛집', '파이썬독학']);
  let [good, setGoodCount] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

    {/* <button onClick={()=>{
      let titleSortArray = [...a];
      titleSortArray.sort();
      setTitle(titleSortArray);
    }}>가나다순정렬</button>

<button onClick={()=>{
      let titleSortArray = [...a.sort()];
      setTitle(titleSortArray);
    }}>가나다순정렬2</button>

    <button onClick={()=>{
      let newArray = [...a];
      newArray[0]='여자 코트 추천';
      setTitle(newArray);
    }}>👩
    </button> */}

      <div className="list">
        <h4>{a[0]} <span onClick={()=>{setGoodCount(good++)}}>👍</span> {good}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      
      <Modal/>
      <Modal2/>

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

const Modal2 = ()=>{
  return (
    <div className='modal'>
    <h4>제목: 리액트 드가자</h4>
    <p>다음엔 뭐하지</p>
    <p>유료 강의니까 일단 웹 채팅 ㄱㄱ?</p>
  </div>
  )
}

export default App;
