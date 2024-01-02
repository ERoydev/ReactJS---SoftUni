import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './components/MovieList'
import movies from './assets/movies'
import Timer from './components/Timer'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <h1>My first Dynamic React Application</h1>

       <Counter />

      <Timer startTime={1} />

      <MovieList headingText="Movie List" movies={movies}/>
    </div>
  )
}

export default App
