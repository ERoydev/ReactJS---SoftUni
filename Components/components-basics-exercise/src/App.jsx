import './App.css'
import MovieList from '../components/MovieList';


const movies = [
  {
    title: "The matrix",
    description: "Neo pills",
  },
  {
    title: "Steel Robot",
    description: "Boxing robots"
  }
]


function App() {
  return (
   <div>
      <h1>Hello it works</h1>
      <MovieList headingText="Movie List" movies={movies}/>
   </div>
  )
}

export default App
