import React, { useEffect } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function QuizPage(props) {
  const [allQuestions, setAllQuestions] = React.useState([]);
  const [hasEnded, setHasEnded] = React.useState(false);
  const [numOfCorret, setNumOfCorret] = React.useState(0);



  function newQuiz() {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple&difficulty=easy")
      .then((res) => res.json())
      .then((data) => {
        setAllQuestions(
          data.results.map((item) => {
            return {
              id: nanoid(),
              question: item.question,
              correctAnswer: item.correct_answer,
              answers: [...item.incorrect_answers, item.correct_answer],
            };
          })
        );
      });
 
    setHasEnded((prevState) => !prevState);
  }

  function checkAnswers(  ) {
   setHasEnded((prevState) => !prevState);
   
 
   
  
  }

  useEffect(() => {
    newQuiz();
   
  }, []);

  return (
    <main>
      {allQuestions.forEach(q => console.log(q.correctAnswer))}
      <h1>Quizzical</h1>
      {allQuestions.map((question) => {
        return (
          <Question
            key={question.id}
            question={question.question}
            correctAnswer={question.correctAnswer}
            allAnswers={question.answers}
            hasEnded={hasEnded}
            
          />
        );
      })}
      {hasEnded && <p>Correct Answers (5/5)</p>}
      <button
        className="check-answersBtn"
        onClick={hasEnded ? newQuiz : checkAnswers}
      >
        {hasEnded ? "New game" : "Check Answers"}
      </button>
    </main>
  );
}
