import './App.css'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'
import ControlledFormRaw from './components/ControlledFormRaw'
import { useRef } from 'react'

function App() {

  const formRef = useRef({});

  return (
    <div>
        <ControlledFormRaw formRef={formRef}/>

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
