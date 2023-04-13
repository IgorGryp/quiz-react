import { useState } from "react";
import "./index.scss";
import Result from "./components/Result";
import Game from "./components/Game";
import questions from "./Data.json";


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
