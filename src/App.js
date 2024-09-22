import logo from "./logo.svg";
import "./App.css";
import "./Damon.css";
import Heart from "./components/Heart";
import Heart2 from "./components/Heart2";
import Wordbook from "./components/Wordbook";
import EnglishSentence from "./components/EnglishSentence";
import KoreanSentence from "./components/KoreanSentence";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [wordbook, setWordbook] = useState({
    Wordbook: "단어장",
    keyword: "pen",
    word_mean: "펜, 울타리",
    englishSentence:
      "The word 'pen' can be used in a sentence like: 'She found the craic irresistible and joined in the laughter.'",
    koreanSentence:
      "'pen'라는 단어는 다음과 같은 문장에서 사용할 수 있습니다: '그녀는 재미를 참을 수 없어 웃음에 동참했습니다.'",
  });

  const [answer, setAnswer] = useState(" ");
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/word/Sheet1/test").then(({ data }) => {
      setWordbook(data);
    });
  }, []);

  const handleChange = (event) => {
    setAnswer(event.target.value);
    console.log(answer);
  };

  const checkAnswer = () => {
    let isAnswer = answer == wordbook.keyword;
    if (isAnswer) {
      alert("정답");
      axios.get("http://127.0.0.1:8000/word/Sheet1/test").then(({ data }) => {
        setWordbook(data);
      });
    } else {
      alert("오답");
    }
  };

  const handleClick = (event) => {
    checkAnswer();
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      checkAnswer();
    }
  };
  return (
    <div className="Damon">
      <div className="white">
        <Heart></Heart>
        <Wordbook Wordbook={wordbook}></Wordbook>
        <KoreanSentence Wordbook={wordbook}></KoreanSentence>
        <EnglishSentence Wordbook={wordbook}></EnglishSentence>
        <p>{answer}</p>
        <input onChange={handleChange} onKeyDown={handleEnter}></input>
        <button onClick={handleClick}>정답확인</button>
        <Heart2></Heart2>
      </div>
    </div>
  );
}

export default App;
