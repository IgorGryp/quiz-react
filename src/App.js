import { useState } from "react";
import "./index.scss";
import Result from "./components/Result";
import Game from "./components/Game";

const questions = [
  {
    title: "What is React?",
    variants: ["library", "framework", "application"],
    correct: 0,
  },
  {
    title: "What is component?",
    variants: [
      "application",
      "a part of an application or a webpage",
      "somthing else",
    ],
    correct: 1,
  },
  {
    title: "What is JSX?",
    variants: [
      "simple HTML",
      "a function",
      "it's HTML, but with the ability to execute JS code.",
    ],
    correct: 2,
  },
];

/* function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="" />
      <h2>
        You have {correct} out of {questions.length} correct answers.
      </h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  );
} */

/* function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
} */

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step, index);
    setStep(step + 1);
    /* checks if the answer is correct */
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          onClickVariant={onClickVariant}
          step={step}
          question={question}
          questions={questions}
        />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </div>
  );
}

export default App;
