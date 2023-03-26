import React, { useState } from 'react';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  // Xử lý khi click vào ô trên bàn cờ
  function handleSquareClick(index) {
    if (winner || board[index]) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  }

  // Kiểm tra xem có người thắng cuộc hay không
  function checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
    if (board.every((square) => square !== null)) {
      setWinner('draw');
    }
  }

  // Khởi tạo lại trò chơi
  function resetGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  }

  // Render bàn cờ
  function renderSquare(index) {
    return (
      <button
        className="square"
        onClick={() => handleSquareClick(index)}
      >
        {board[index]}
      </button>
    );
  }

  // Render trạng thái của trò chơi
  function renderStatus() {
    if (winner) {
      if (winner === 'draw') {
        return <p>It's a draw!</p>;
      }
      return <p>Player {winner} wins!</p>;
    }
    return <p>Player {currentPlayer}'s turn.</p>;
  }

  // Render nội dung của trò chơi
  return (
    <div className="game">
      <div className="board">
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="info">
        {renderStatus()}
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}

export default TicTacToe;