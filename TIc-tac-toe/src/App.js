import { useState } from 'react';
import Board from './Board';
//Top level Component
function Game() {

  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    //updation game board logic
    const nextHistory = [...history, nextSquares];
    setHistory(nextHistory);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
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