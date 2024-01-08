import Header from './components/Header'
import Footer from './components/Footer'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <div>
      <Header />
      
      <main className="main">
        <ToDoList />
      </main>

      <Footer />
    </div>

  )
}

export default App
