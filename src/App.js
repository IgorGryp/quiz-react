import { useState } from "react";
import "./index.css";
/* components */
import Result from "./components/Result";
import Game from "./components/Game";
/* JSON */
import questions from "./Data.json";

function App() {
  const [step, setStep] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    /* checks if the answer is correct */
    if (index === question.correct_answer) {
      setCorrectAnswer(correctAnswer + 1);
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
        <Result correctAnswer={correctAnswer} questions={questions} />
      )}
    </div>
  );
}

export default App;
