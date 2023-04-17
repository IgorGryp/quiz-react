import React from "react";

const Game = ({ step, question, questions, onClickVariant }) => {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <h1 className="heading">Quiz App</h1>

      {/* progress bar */}
      <div className="progress-bar">
        <div
          style={{ width: `${percentage}%` }}
          className="progress-bar-inner"
        ></div>
      </div>
      {/* question title */}
      <h1>{question.title}</h1>

      {/* list of questions */}
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
