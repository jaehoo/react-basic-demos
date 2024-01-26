
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Juego2 from './Juego2';
import { Link, Route, Routes } from 'react-router-dom';
import TicTaeToe from './TicTaeToe';

export default function App(props) {
  return <div>
    <h1>Mis juegos</h1>
    <nav style={{borderBottom: "solid 1px", paddingBottom: "10px"}}>
      <Link to="/">Home</Link> | { " " }
      <Link to="/tictaetoe">Tres en Raya</Link> | { " " }
      <Link to="/juego2">Otro</Link> | { " " }
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/tictaetoe' element={<TicTaeToe/>}/>
      <Route path='/juego2' element={<Juego2/>}/>
    </Routes>

  </div>
}


