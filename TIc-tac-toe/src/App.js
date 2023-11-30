import { useState } from 'react';
import Square from './Square';

//Top level Component
function Game() {

  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  const handlePlay(nextSquares){
    //updation game board logic
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={ } />
      </div>
      <div className="game-info">
        <ol>
          //History
        </ol>
      </div>
    </div>
  );
}

export default Game;