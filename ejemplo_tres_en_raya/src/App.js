import './App.css';
import Header from './Header';
import Board from './Board';
import Reset from './Reset';
import {  useEffect } from 'react';
import { connect } from 'react-redux';
import { playPosition, reset, fetchDataAction } from './redux/actions';

const MYURL = "https://api.npoint.io/c734e05e43c5b87dd971";


function App(props) {

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Turn of ${props.turn}`;
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(MYURL);
      const myjson = await res.json();
      console.log(myjson);
      props.dispatch(fetchDataAction(myjson));
    }

    fetchData();
  }, []);

  function appClick(rowNumber, columnNumber) {
    props.dispatch(playPosition({rowNumber: rowNumber, columnNumber: columnNumber, turn:props.turn}));
  }

  function resetClick() {
    props.dispatch(reset());
  }

  let text = "Turn of " + props.turn;
  return (
    <div className='App'>
      <h2>Tic Tac Toe</h2>
      <Header text={text} />
      <Board values={props.values} appClick={appClick} />
      <h3>Número de movimientos: {props.moves}</h3>
      <Reset resetClick={resetClick}></Reset>
    </div>
  );
}

function mapStateToProps(state) {
  return {...state};
}

export default connect (mapStateToProps)(App);
 