import Navigation from './components/Navigation'
import { Routes, Route  } from 'react-router-dom'
import Home from './components/Home' 
import About from './components/About'
import Contacts from './components/Contacts';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
import NotFound from './components/NotFound';

import AboutUs from './components/AboutUs';
import Mission from './components/Mission';
import OurValues from './components/OurValues';

function App() {


  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />}>
            <Route path='us' element={<AboutUs />} />
            <Route path='missions' element={< Mission />} />
            <Route path='values' element={< OurValues />} />
        </Route>
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/characters/:id' element={<CharacterDetails />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <footer>All rights reserved &copy;</footer>
    </>
  )
}

export default App
