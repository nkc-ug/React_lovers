import React from 'react';
import './quiz.css';

interface Question2Props {
  question: number;
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
}

//こいつに正解を入れる
let correct = 3;

const Question2: React.FC<Question2Props> = ({ question, setQuestion }) => {
  return (
    <div className="quiz">
      <h2 className="question">私の好きなお菓子は？</h2>
      <div className="table">
        <ol>
          <li>ピレーネ</li>
          <li>じゃがりこ</li>
          <li>ブラックサンダー</li>
          <li>堅あげポテト</li>
        </ol>
      </div>
      {[1, 2, 3, 4].map((item, index) => {
        return (
          <button
            className="answer"
            key={index}
            onClick={() => {
              if (item !== correct) {
                alert('惜しい！けど、天才では！？');
              } else {
                alert('正解！天才では！？');
              }
              setQuestion(question + 1);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Question2;
