"use client"

import { useState, useEffect } from 'react';
import Circle from './circle';
import X from './x';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const calculateWinner = (grid: (string | null)[]) => {
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
      if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
        return grid[a];
      }
    }
    return null;
  };

  const getBotMove = (grid: (string | null)[]) => {
    const availableMoves = grid.map((square, index) => square === null ? index : null).filter(val => val !== null);
    const moveCount = 9 - availableMoves.length;
    
    for (let move of availableMoves) {
      const testBoard = [...grid];
      testBoard[move!] = 'O';
      if (calculateWinner(testBoard) === 'O') {
        return move!;
      }
    }
    
    for (let move of availableMoves) {
      const testBoard = [...grid];
      testBoard[move!] = 'X';
      if (calculateWinner(testBoard) === 'X') {
        return move!;
      }
    }
    
    if (moveCount === 1) {
      return availableMoves[Math.floor(Math.random() * availableMoves.length)]!;
    }
    
    if (grid[4] === null) return 4;
    
    const corners = [0, 2, 6, 8];
    const emptyCorners = corners.filter(corner => grid[corner] === null);
    if (emptyCorners.length > 0) {
      return emptyCorners[Math.floor(Math.random() * emptyCorners.length)];
    }
    
    return availableMoves[Math.floor(Math.random() * availableMoves.length)]!;
  };

  useEffect(() => {
    if (!isPlayerTurn && !gameOver) {
      const timer = setTimeout(() => {
        const botMove = getBotMove(board);
        if (botMove !== undefined) {
          const newBoard = [...board];
          newBoard[botMove] = 'O';
          setBoard(newBoard);
          setIsPlayerTurn(true);
          
          if (calculateWinner(newBoard) || newBoard.every(square => square !== null)) {
            setGameOver(true);
          }
        }
      }, 600);
      
      return () => clearTimeout(timer);
    }
  }, [board, isPlayerTurn, gameOver]);

  const handleClick = (i: number) => {
    if (board[i] || gameOver || !isPlayerTurn) return;
    
    const newBoard = board.slice();
    newBoard[i] = 'X'; 
    setBoard(newBoard);
    setIsPlayerTurn(false); 
    
    if (calculateWinner(newBoard) || newBoard.every(square => square !== null)) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setGameOver(false);
  };

  const winner = calculateWinner(board);
  const isDraw = board.every(square => square !== null) && !winner;
  
  const getStatus = () => {
    if (winner) {
      return winner === 'X' ? 'You Win! 🎉' : 'Bot Wins! 🤖';
    }
    if (isDraw) return "It's a draw! 🤝";
    return isPlayerTurn ? 'Your turn' : 'Bot thinking...';
  };

  const render = (i: number) => (
    <button
      key={i}
      className={`w-9 h-9 lg:w-11 lg:h-11 2xl:w-12 2xl:h-12 bg-transparent relative flex items-center justify-center ${
        isPlayerTurn && !board[i] && !gameOver ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={() => handleClick(i)}
      disabled={!isPlayerTurn || gameOver}
    >
      {board[i] === 'X' && <X />}
      {board[i] === 'O' && <Circle />}
    </button>
  );

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="mb-1 text-left w-full">
        <p className="text-xs text-[#616161]">{getStatus()}</p>
      </div>
      
      {/* Game Board */}
      <div className="relative mb-4 flex justify-center">
        <div className="relative grid grid-cols-3 w-28 lg:w-32 2xl:w-36 h-28 lg:h-32 2xl:h-36 gap-0">
          {Array(9).fill(null).map((_, i) => render(i))}
          
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute left-1/3 top-0 w-1.5 h-full line-shadow rounded-full bg-[#E8E8E8] transform -translate-x-1/2"></div>
            <div className="absolute left-2/3 top-0 w-1.5 h-full line-shadow rounded-full bg-[#E8E8E8] transform -translate-x-1/2"></div>
            <div className="absolute top-1/3 left-0 w-full h-1.5 line-shadow rounded-full bg-[#E8E8E8] transform -translate-y-1/2"></div>
            <div className="absolute top-2/3 left-0 w-full h-1.5 line-shadow rounded-full bg-[#E8E8E8] transform -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    
      <button onClick={resetGame} className='custom-shadow-center custom-button w-[80px] px-4 py-1.5 bg-[#E8E8E8] rounded-[30px] text-[12px] text-[#616161]'>
        {gameOver ? 'PLAY AGAIN' : 'RESET'}
      </button>
    </div>
  );
}