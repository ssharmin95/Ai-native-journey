import React, { useState, useRef } from 'react';
import './PuzzleComponent.css';

const PuzzleComponent = () => {
  const [words, setWords] = useState([
    { id: 1, text: 'protect', isDragging: false },
    { id: 2, text: 'each', isDragging: false },
    { id: 3, text: 'and', isDragging: false },
    { id: 4, text: 'other.', isDragging: false },
    { id: 5, text: 'Love', isDragging: false }
  ]);
  
  const [message, setMessage] = useState('');
  const [draggedItem, setDraggedItem] = useState(null);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [showReward, setShowReward] = useState(false);
  const puzzleRef = useRef(null);

  const correctOrder = ['Love', 'and', 'protect', 'each', 'other.'];

  const handleDragStart = (e, wordId) => {
    setDraggedItem(wordId);
    setWords(prev => prev.map(word => 
      word.id === wordId ? { ...word, isDragging: true } : word
    ));
  };

  const handleDragEnd = (e) => {
    setDraggedItem(null);
    setWords(prev => prev.map(word => ({ ...word, isDragging: false })));
    checkOrder();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!draggedItem) return;

    const afterElement = getDragAfterElement(puzzleRef.current, e.clientX);
    const current = words.find(word => word.id === draggedItem);
    
    if (afterElement) {
      const afterIndex = words.findIndex(word => word.id === afterElement.id);
      const currentIndex = words.findIndex(word => word.id === draggedItem);
      
      if (currentIndex !== afterIndex) {
        const newWords = [...words];
        newWords.splice(currentIndex, 1);
        newWords.splice(afterIndex, 0, current);
        setWords(newWords);
      }
    } else {
      const currentIndex = words.findIndex(word => word.id === draggedItem);
      const newWords = [...words];
      const current = newWords.splice(currentIndex, 1)[0];
      newWords.push(current);
      setWords(newWords);
    }
  };

  const getDragAfterElement = (container, x) => {
    const elements = [...container.querySelectorAll('.word:not(.dragging)')];
    return elements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;
      return offset < 0 && offset > closest.offset
        ? { offset: offset, element: { id: parseInt(child.dataset.id) } }
        : closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  };

  const checkOrder = () => {
    const currentWords = words.map(word => word.text);
    if (JSON.stringify(currentWords) === JSON.stringify(correctOrder)) {
      setIsCelebrating(true);
      setShowReward(true);
      setMessage('🎉 Congratulations! You solved the puzzle! 🎉');
      
      // Hide celebration after 5 seconds
      setTimeout(() => {
        setIsCelebrating(false);
      }, 5000);
    } else {
      setMessage('');
      setShowReward(false);
    }
  };

  const resetPuzzle = () => {
    setWords([
      { id: 1, text: 'protect', isDragging: false },
      { id: 2, text: 'each', isDragging: false },
      { id: 3, text: 'and', isDragging: false },
      { id: 4, text: 'other.', isDragging: false },
      { id: 5, text: 'Love', isDragging: false }
    ]);
    setMessage('');
    setShowReward(false);
    setIsCelebrating(false);
  };

  return (
    <div className="puzzle-container">
      <h2 className="puzzle-title">🧩 Arrange the words: Love and protect each other.</h2>
      
      <div 
        className="puzzle-area"
        ref={puzzleRef}
        onDragOver={handleDragOver}
      >
        {words.map((word) => (
          <div
            key={word.id}
            className={`word ${word.isDragging ? 'dragging' : ''}`}
            draggable={true}
            data-id={word.id}
            onDragStart={(e) => handleDragStart(e, word.id)}
            onDragEnd={handleDragEnd}
          >
            {word.text}
          </div>
        ))}
      </div>

      {showReward && (
        <div className="reward-container">
          <div className="reward-message">
            <h3>🎊 Amazing Job! 🎊</h3>
            <p>You've mastered the art of love and protection!</p>
            <div className="reward-emoji">💖✨🌟💝🎈</div>
            <p className="reward-quote">"Love and protect each other - the greatest lesson of all."</p>
            <button className="reset-btn" onClick={resetPuzzle}>
              🎯 Play Again
            </button>
          </div>
        </div>
      )}

      {isCelebrating && (
        <div className="celebration">
          <div className="confetti">🎉</div>
          <div className="confetti">✨</div>
          <div className="confetti">💖</div>
          <div className="confetti">🌟</div>
          <div className="confetti">🎊</div>
          <div className="confetti">💝</div>
          <div className="confetti">🎈</div>
          <div className="confetti">💕</div>
        </div>
      )}

      <div className="puzzle-message">{message}</div>
    </div>
  );
};

export default PuzzleComponent; 