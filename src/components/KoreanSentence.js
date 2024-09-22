import "../koreanbox.css";

const KoreanSentence = (prop) => {
  console.log(prop);
  return <div className="koreanbox words">{prop.Wordbook.koreanSentence}</div>;
};

export default KoreanSentence;
