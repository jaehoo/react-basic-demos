
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Board from './Board';

import Reset from './Reset';

const PLAYERX="Player 1 - Xs";
const PLAYER0="Player 2 - 0s";



function TicTaeToe(props) {

  const [turn, setTurn]=useState(PLAYERX);
  const [values, setValues] = useState([
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
  ]);

  const [moves, setMoves]= useState(0);
  const [loading, setLoading] = useState (true);

  useEffect(()=>{
    async function fetchData(){
      const res = await fetch("https://api.npoint.io/c734e05e43c5b87dd971");
      const jsonRes = await res.json();
       console.log( jsonRes);
      setTurn(jsonRes.turn);
      setValues(jsonRes.values);
      setMoves(jsonRes.moves);
      setLoading(false);
    }

    fetchData();

  }, []);


  function appClick(rowNumber, columnNumber){
    
    
    let valuesCopy = JSON.parse(JSON.stringify(values));;
    console.info(valuesCopy);

    let newMovement = turn === PLAYERX ? 'X':'0';
    
    valuesCopy[rowNumber][columnNumber] = newMovement;

    setTurn(turn=== PLAYERX? PLAYER0:PLAYERX);
    setValues(valuesCopy);
    setMoves(moves=> moves +1);
 
  }

  function resetClick(){
    
    setTurn(PLAYERX);
    setValues([
      ['-','-','-'],
      ['-','-','-'],
      ['-','-','-']
    ]);
    setMoves(0);
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      { loading ?<div>LOADING...</div>:<div>
        <Header turn={turn}/>
        <Board values={values} appClick={appClick}/>
        <h3>Número de movimientos: {moves}</h3>
        <Reset resetClick={resetClick}/>
        
        </div>}
    </div>
  );
}

export default TicTaeToe;
