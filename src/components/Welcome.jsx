import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/imagem-fundo-quiz.jpg";

import "./Welcome.css";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="welcome">
            <h2>Bem-Vindo ao Meu Quiz</h2>
            <p>Clique no botão abaixo, para começar a jogar</p>
            <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>Inicar</button>
            <img src={Quiz} alt="Imagem de Fundo Quiz" />
        </div>
    )
}

export default Welcome