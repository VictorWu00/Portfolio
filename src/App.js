import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Proj from './Pages/Projects'


function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Projects' element={<Proj />} />
      </Routes>
    </div>
  );
}

export default App;
