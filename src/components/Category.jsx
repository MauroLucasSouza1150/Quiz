import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Category.css"

const Category = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    const chooseCategoryAndReorderQuestions = (category) => {
        dispatch({ type: "START_GAME", payload: category });

        dispatch({ type: "REORDER_QUESTIONS" });
    };

  return (
    <div id="category">
        <h2>Escolha uma Categoria</h2>
        <p>As perguntas serão de acordo com a Categoria escolhida.</p>
        <p>Categorias :</p>
        <div>
            {quizState.questions.map((question) => (
                <button onClick={() => chooseCategoryAndReorderQuestions(question.category)} 
                key={question.category}>{question.category}</button>
            ))}
        </div>
    </div>
  )
}

export default Category