import React from 'react';
import { useState } from 'react';
import './App.css';
import Question1 from './quiz/question1';
import Question2 from './quiz/question2';

const App: React.FC = () => {
  const [question, setQuestion] = useState(0);

  const renderQuestion = () => {
    switch (question) {
      case -1:
        break;
      case 0:
        return <Question1 question={question} setQuestion={setQuestion} />;
      case 1:
        return <Question2 question={question} setQuestion={setQuestion} />;
      default:
        close();
        setQuestion(-1);
        alert('全ての回答が完了しました。タブを閉じてください');

        return null;
    }
  };

  return (
    <div>
      <header>
        <h1>クイズアプリ</h1>
      </header>
      <button onClick={() => console.log(question)}>デバッグ</button>
      {renderQuestion()}
    </div>
  );
};

export default App;
