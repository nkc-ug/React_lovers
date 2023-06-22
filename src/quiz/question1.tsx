import React from 'react';
import './quiz.css';

interface Question1Props {
  question: number;
  setQuestion: React.Dispatch<React.SetStateAction<number>>;
}

//こいつに正解を入れる
let correct = 2;

const Question1: React.FC<Question1Props> = ({ question, setQuestion }) => {
  return (
    <div className="quiz">
      <h2 className="question">１＋１＝？</h2>
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

export default Question1;
