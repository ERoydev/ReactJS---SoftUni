import { useRef } from 'react'
import './App.css'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'

function App() {
  const formRef = useRef();

  return (
    <div>
      <ControlledForm formRef={formRef}/>
      
      <button 
        type="button"
        onClick={() => formRef.current.requestSubmit()}
      >
      Submit
      </button>
    </div>
  )
}

export default App
