

export default function Question(props){
    





    return(
        <main className="qustion-item">
        <h2 className="question-text">{props.question}</h2>
        <ul className="options-list">
          <li onClick={choose}>{props.correctAnswer}</li>
          <li onClick={choose}>{props.wrongAnswers[0]}</li>
          <li onClick={choose}>{props.wrongAnswers[1]}</li>
          <li onClick={choose}>{props.wrongAnswers[2]}</li>
        </ul>
        <hr/>
      </main>
    )
}