import React from 'react'
import './App.css'
import Joke from './Joke'
import JokesData from './JokesData'

function App() {

  const  jokeComponents = JokesData.map((joke) => {
    return (
      <Joke key={joke.id} question={joke.question} answer={joke.punchLine} />
    )
  })

  return (
    <div>
      {jokeComponents}
    </div>
  )
}

export default App
