import { useContext, useEffect } from 'react'
import { QuizContext } from './context/quiz'

import './App.css'

import Welcome from './components/Welcome'
import Questions from './components/Questions'
import GameOver from './components/GameOver'
import Category from './components/Category'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  
  return (  
    <>
      <div className='app'>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Category" && <Category />}
        {quizState.gameStage === "Playing" && <Questions />}
        {quizState.gameStage === "End" && <GameOver />}
      </div>
    </>
  )
}

export default App
