import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Fim from "../img/parabens.jpg"

import "./GameOver.css"

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
        <h2>Fim do Quiz</h2>
        <p>Sua Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={Fim} alt="Imagem de Fim de jogo" />
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reinicar</button>
    </div>
  )
}

export default GameOver