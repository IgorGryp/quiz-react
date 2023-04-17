import React from 'react'

const Result = ({ questions, correctAnswer }) => {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt=""
      />
      <h2>
        You have {correctAnswer} out of {questions.length} correct answers.
      </h2>
      <a href="/">
        <button>Play again</button>
      </a>
    </div>
  );
};

export default Result