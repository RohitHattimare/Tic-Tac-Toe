import { useState } from 'react';
import Board from './Board';
//Top level Component
function Game() {
  const [currentMove, setCurrentMove] = useState(0);
  let xIsNext = currentMove % 2 === 0;
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [gameState, setGameState] = useState(null);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    //updation game board logic
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    xIsNext = !xIsNext;
    console.log(currentMove); //To check current Move
  }

  function resetGame() {
    setCurrentMove(0);
    setHistory(Array(9).fill(null));
    setGameState(null);
  }

  function jumpTo(nextMove) {
    //Logic to move to that point in a game
    setCurrentMove(nextMove);
    setHistory(history.slice(0, nextMove + 1));
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0)
      description = 'Go to move #' + move;
    else
      description = 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}> {description}</button>
      </li >
    )
  })

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} statusHandler={setGameState} />
      </div>
      <div className="game-info">
        <p>History : </p>
        <ol className='logs'>
          {moves}
        </ol>
        <div className='logFooter'>
          {(gameState || history.length === 10) && <h1 className='gameOver'>Game Over</h1>}
          {(gameState || history.length === 10) && <button onChange={resetGame}>Start New Game</button>}
        </div>
      </div>
    </div>
  );
}

export default Game;