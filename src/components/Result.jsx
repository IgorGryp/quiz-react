import React from 'react'

const Result = ({ questions, correct }) => {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt=""
      />
      <h2>
        You have {correct} out of {questions.length} correct answers.
      </h2>
      <a href="/">
        <button>Play again</button>
      </a>
    </div>
  );
};

export default Result