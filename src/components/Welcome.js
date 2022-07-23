import React  from "react";
import QuizPage from "./QuizPage";

export default function Welcome() {

const [page , setPage] = React.useState(true)

  return page? 
    <div className="welcome-warpper">
      <h1 className="welcome-title">Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={() => setPage(false)}  className="start-Btn">Start Quiz</button>
    </div> : <QuizPage run = {page}/>
  
}
