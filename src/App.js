import logo from "./logo.svg";
import "./App.css";
import "./Damon.css";
import Heart from "./components/Heart";
import Heart2 from "./components/Heart2";
import Wordbook from "./components/Wordbook";
import EnglishSentence from "./components/EnglishSentence";
import KoreanSentence from "./components/KoreanSentence";

const wordbook = {
  Wordbook: "내 단어장",
  word_mean: "Happy",
  englishSentence: "I'm ____.",
  koreanSentence: "나는 행복해요.",
};

function App() {
  return (
    <div className="Damon">
      <div className="white">
        <Heart></Heart>
        <Wordbook Wordbook={wordbook}></Wordbook>
        <KoreanSentence Wordbook={wordbook}></KoreanSentence>
        <EnglishSentence Wordbook={wordbook}></EnglishSentence>
        <Heart2></Heart2>
      </div>
    </div>
  );
}

export default App;
