import React, { useEffect } from "react";
import Question  from "./Question";

export default function QuizPage() {

  // const [question, setQuestion] = React.useState({
  //   question: "",
  //   correctAnswer: "",
  //   wrongAnswers: [] 
//})

  const [allQuestions, setAllQuestions] = React.useState([])
  
  
useEffect(() =>{
  fetch('https://opentdb.com/api.php?amount=5&type=multiple&difficulty=easy')
  .then(res =>  res.json())
  .then(data => setAllQuestions(data.results))
 
} , [])



  return (
    <main>
      {allQuestions.map(question => {
return <Question
question = {question.question}
correctAnswer = {question.correct_answer}
wrongAnswers = {question.incorrect_answers}/>
      })}

    </main>
  
  );
}
