import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Heart from "./components/Heart";
import Wordbook from "./components/Wordbook";
import Keyword from "./components/Keyword";
import EnglishSentence from "./components/EnglishSentence";

const data = {
  userName: "임소언",
  age: 23,
};

const wordbook = {
  Wordbook: "단어장",
  Keyword: "영단어",
  word_mean: "뜻",
  englishSentence: "영어 예문",
  koreanSentence: "한국어 예문",
};

function App() {
  return (
    <div>
      <Heart></Heart>
      <Wordbook Wordbook={wordbook}></Wordbook>
      <Keyword Wordbook={wordbook}></Keyword>
      <EnglishSentence Wordbook={wordbook}></EnglishSentence>
      <Welcome data={data}></Welcome>
      <Heart></Heart>
    </div>
  );
}

export default App;
