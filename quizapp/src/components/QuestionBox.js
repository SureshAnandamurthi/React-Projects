import React, { useState } from 'react';

const QuestionBox = ({question, options, selected})=>{
  const [answer, setAnswer] = useState(options);
  return(
    <div className="questionBox">
      <div className="question">{question}</div>
      {answer.map((option, index)=>{
        return (
          <button className="answerBtn" key={index} onClick={()=>{
            setAnswer([option]);
            selected(option);
          }}>
            {option}
          </button>
        )})
      }
    </div>
  );
};

export default QuestionBox;