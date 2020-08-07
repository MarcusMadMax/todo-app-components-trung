import React, {Component} from 'react'
import './App.css'
import Joke from './Joke'

function App(){
  return(
    <div>
    <Joke
    question='How are you today?'
    answer='Good tanks.'
    />

    <Joke
    answer='Good tanks.'
    />
    </div>
  )
}

export default App
