import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import Option from "./Option";

import "./Questions.css"

const Questions = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestions];

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option },
        });
    };

    console.log(quizState);

    return (
        <div id="question">
            <p>Pergunta {quizState.currentQuestions + 1} de {quizState.questions.length} :</p>
            <h2>{currentQuestion.question}</h2>
            <div className="options-container">
                {currentQuestion.options.map((option) => (
                    <Option 
                    key={option} 
                    option={option} 
                    answer={currentQuestion.answer} 
                    selectOption={() => onSelectOption(option)} />
                ))}
            </div>
            {!quizState.answerSelected && !quizState.help && (
                <>
                    {currentQuestion.tip && <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>}
                    
                </>
            )}
            {!quizState.answerSelected && quizState.help === 'tip' && (
                        <p>{currentQuestion.tip}</p>
                    )}
            {quizState.answerSelected && 
            <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>Continuar</button>}
        </div>
    )
}

export default Questions