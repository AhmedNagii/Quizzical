import React, { useEffect } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function QuizPage() {
  const [allQuestions, setAllQuestions] = React.useState([]);
  const [hasEnded , setHasEnded] = React.useState(false)

  useEffect(() => {
    newQuiz ()
  }, []);

  function newQuiz (){
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then((res) => res.json())
    .then((data) =>
      setAllQuestions(
        data.results.map((item) => {
          return {
            id: nanoid(),
            question: item.question,
            correctAnswer: item.correct_answer,
            answers: [...item.incorrect_answers, item.correct_answer],
          };
        })
      )
    );
    setHasEnded(prevState => !prevState)
 console.log(hasEnded)
  }


function checkAnswers (){
  setHasEnded(prevState => !prevState)
}

  return (
    <main>
      <h1>Quizzical</h1>
      {allQuestions.map((question) => {
        return (
          <Question
            key={question.id}
            question={question.question}
            correctAnswer={question.correctAnswer}
            allAnswers={question.answers}
            hasEnded= {hasEnded}
          />
        );
      })}
     {hasEnded  && <p>Correct Answers (5/10)</p>}
      <button className="check-answersBtn" onClick={hasEnded? checkAnswers : newQuiz }>
      { hasEnded?"New game" : "Check Answers"}</button>
    </main>
  );
}
