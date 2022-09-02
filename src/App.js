import './App.css';
import {Routes, Route} from 'react-router-dom'

import Header from './componentes/Header';
import Game from './componentes/Game'
import Regras from './componentes/Regras'
import Sobre from './componentes/Sobre';

function App() {
  return(
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Game/>}/>
        <Route path='/regras' element={<Regras/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
    </div>
  )
}

export default App;
