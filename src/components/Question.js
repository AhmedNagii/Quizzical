import React from "react";
import { nanoid } from "nanoid";

export default function Question(props) {
  const answers = props.allAnswers.map((answer) => {
    return {
      id: nanoid(),
      answer: answer,
      isChoosen: false,
    };
  });

  const [answersState, setAnswersState] = React.useState(answers);

  function choose(id) {
    console.log(props.hasEnded)
    props.hasEnded && setAnswersState((prevAnswersState) => {
      return prevAnswersState.map((answerState) => {
       
        if (id === answerState.id) {
          return {
            ...answerState,
             isChoosen: !answerState.isChoosen
          }
        }else{
            {
                return {...answerState,isChoosen: false}
            }
        }
      });
    }
    
    
    
    
    );
  }



  return (
    <main className="qustion-item">
      <h2 className="question-text">{props.question}</h2>
      <ul className="options-list">
        {answersState.map((answer) => {
          return (
            <li
              key={answer.id}
              onClick={() => choose(answer.id)}
              style={{backgroundColor: answer.isChoosen? "#D6DBF5" : "#fff"}}
            >
              {answer.answer}
            </li>
          );
        })}
      </ul>
      <hr />
    </main>
  );
}
