import "../englishbox.css";

const EnglishSentence = (prop) => {
  console.log(prop);
  return <div className="englishbox">{prop.Wordbook.englishSentence}</div>;
};

export default EnglishSentence;
