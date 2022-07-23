import React from "react";
import { nanoid } from "nanoid";

export default function Question(props) {

  const answers =shuffle(props.allAnswers).map((answer) => {
    return {
      id: nanoid(),
      answer: answer,
      isChoosen: false,
      isCorrect: answer === props.correctAnswer ? true : false,
    };
  });


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



  const [answersState, setAnswersState] = React.useState(answers);
  
  

  function choose(id , isCorrect, isChoosen) {
    
 let any = 0
    if(isCorrect){
      any++
      console.log(any)
    }
    
  

    props.hasEnded === false &&  setAnswersState((prevAnswersState) => {
          return prevAnswersState.map((answerState) => {
            if (id === answerState.id) {
              return {
                ...answerState,
                isChoosen: !answerState.isChoosen,
              };
            } else {
              {
                return { ...answerState, isChoosen: false };
              }
            }
          });
        })
    }

  return (
    <div className="qustion-item">
      <h2 className="question-text">{props.question}</h2>
      <ul className="options-list">
        {answersState.map((answer) => {
          return (
            <li
              key={answer.id}
              onClick={() => choose(answer.id ,answer.isCorrect, answer.isChoosen) }
              style={props.hasEnded? {
                backgroundColor: answer.isCorrect
                  ? "#94D7A2"
                  : answer.isChoosen && !answer.isCorrect
                  ? "#F8BCBC"
                  : "#fff",
              } :{backgroundColor: answer.isChoosen ? "#D6DBF5" : "#fff" }}
            >
              {answer.answer}
            </li>
          );
        })}
      </ul>
      <hr />
    </div>
  );
}
