import React, { useState } from "react";
import { birds } from "./birds";
import "./FeatheredFriendExplorer.css";

const FeatheredFriendExplorer = () => {
  const [selectedBird, setSelectedBird] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isCelebrating, setIsCelebrating] = useState(false);

  const birdQuizzes = {
    "Chicken": [
      {
        id: "chicken-diet",
        question: "What do chickens primarily eat?",
        options: ["Fish and meat", "Grains, insects, and vegetation", "Only seeds"],
        correct: "Grains, insects, and vegetation"
      },
      {
        id: "chicken-habitat",
        question: "Where do chickens typically live?",
        options: ["In trees", "Farmyards and coops", "Underwater"],
        correct: "Farmyards and coops"
      },
      {
        id: "chicken-lifespan",
        question: "How long do chickens typically live?",
        options: ["2-3 years", "5-10 years", "15-20 years"],
        correct: "5-10 years"
      }
    ],
    "Pigeon": [
      {
        id: "pigeon-diet",
        question: "What do pigeons eat?",
        options: ["Only bread", "Seeds, grains, and human food scraps", "Only insects"],
        correct: "Seeds, grains, and human food scraps"
      },
      {
        id: "pigeon-habitat",
        question: "Where are pigeons commonly found?",
        options: ["Only in forests", "Urban areas and cliffs", "Only in deserts"],
        correct: "Urban areas and cliffs"
      },
      {
        id: "pigeon-lifespan",
        question: "How long do pigeons typically live?",
        options: ["1-2 years", "3-5 years", "10-15 years"],
        correct: "10-15 years"
      }
    ],
    "Finch": [
      {
        id: "finch-diet",
        question: "What do finches primarily eat?",
        options: ["Meat", "Seeds and insects", "Only fruits"],
        correct: "Seeds and insects"
      },
      {
        id: "finch-habitat",
        question: "Where do finches live?",
        options: ["Only in cities", "Woodlands, grasslands, and gardens", "Only in mountains"],
        correct: "Woodlands, grasslands, and gardens"
      },
      {
        id: "finch-lifespan",
        question: "How long do finches typically live?",
        options: ["1-2 years", "3-6 years", "10-15 years"],
        correct: "3-6 years"
      }
    ],
    "Canary": [
      {
        id: "canary-diet",
        question: "What do canaries eat?",
        options: ["Only meat", "Seeds, fruits, and vegetables", "Only insects"],
        correct: "Seeds, fruits, and vegetables"
      },
      {
        id: "canary-habitat",
        question: "Where do canaries originally come from?",
        options: ["Canary Islands", "Australia", "South America"],
        correct: "Canary Islands"
      },
      {
        id: "canary-lifespan",
        question: "How long do canaries typically live?",
        options: ["2-3 years", "5-10 years", "15-20 years"],
        correct: "5-10 years"
      }
    ],
    "Parrot": [
      {
        id: "parrot-diet",
        question: "What do parrots eat?",
        options: ["Only meat", "Fruits, nuts, seeds, and buds", "Only leaves"],
        correct: "Fruits, nuts, seeds, and buds"
      },
      {
        id: "parrot-habitat",
        question: "Where do parrots live?",
        options: ["Only in cold regions", "Tropical and subtropical regions", "Only in deserts"],
        correct: "Tropical and subtropical regions"
      },
      {
        id: "parrot-lifespan",
        question: "How long can parrots live?",
        options: ["5-10 years", "20-30 years", "50-80 years or more"],
        correct: "50-80 years or more"
      }
    ]
  };

  const birdEmojis = {
    "Chicken": "🐔",
    "Pigeon": "🕊️",
    "Finch": "🐦",
    "Canary": "🐤",
    "Parrot": "🦜"
  };

  const celebrationEmojis = ["🎉", "✨", "🌟", "🎊", "💖", "🎈", "💫", "⭐"];

  const handleQuizAnswer = (questionId, answer) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const submitQuiz = () => {
    if (!selectedBird) return;
    
    const quiz = birdQuizzes[selectedBird];
    let correctAnswers = 0;
    quiz.forEach(question => {
      if (quizAnswers[question.id] === question.correct) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setShowResults(true);
    setIsCelebrating(true);
    
    // Stop celebration after 5 seconds
    setTimeout(() => {
      setIsCelebrating(false);
    }, 5000);
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowResults(false);
    setScore(0);
    setSelectedBird(null);
    setIsCelebrating(false);
  };

  const startBirdQuiz = (birdName) => {
    setSelectedBird(birdName);
    setQuizAnswers({});
    setShowResults(false);
    setScore(0);
    setIsCelebrating(false);
  };

  const getScoreMessage = (score, total) => {
    if (score === total) return "🎉 Perfect! You're a bird expert! 🌟";
    if (score >= 2) return "👍 Great job! You know your birds well! ✨";
    return "📚 Keep learning about our feathered friends! 💪";
  };

  return (
    <div className="explorer-container">
      <header className="explorer-header">
        <h1>Feathered Friends Explorer</h1>
        <p>Discover fascinating facts about our diverse bird companions!</p>
      </header>

      <main className="explorer-main">
        <section id="bird-profiles" className="bird-profiles">
          <h2>Our Feathered Friends</h2>
          
          <div className="bird-cards">
            {birds.map((bird) => (
              <div key={bird.name} className="bird-card">
                <div className="bird-image-container">
                  <div className={`bird-placeholder bird-${bird.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {bird.name}
                  </div>
                </div>
                <h3>{bird.name}</h3>
                <p className="bird-description">{bird.description}</p>
                <ul className="bird-details">
                  <li><strong>Species:</strong> <em>{bird.species}</em></li>
                  <li><strong>Habitat:</strong> {bird.habitat}</li>
                  <li><strong>Diet:</strong> {bird.diet}</li>
                  <li><strong>Fun Fact:</strong> {bird.funFact}</li>
                </ul>
                <button 
                  className="bird-quiz-btn"
                  onClick={() => startBirdQuiz(bird.name)}
                >
                  🧠 Quiz Me About {bird.name}!
                </button>
              </div>
            ))}
          </div>
        </section>

        {selectedBird && (
          <section id="bird-quiz" className="bird-quiz">
            <h2>🐦 {selectedBird} Quiz!</h2>
            <div className="quiz-container">
              {!showResults ? (
                <>
                  <div className="quiz-intro">
                    <p>Test your knowledge about {selectedBird}s! Answer 3 questions about their diet, habitat, and lifespan.</p>
                  </div>
                  {birdQuizzes[selectedBird].map((question) => (
                    <div key={question.id} className="question">
                      <p>{question.question}</p>
                      {question.options.map((option) => (
                        <label key={option} className="quiz-option">
                          <input
                            type="radio"
                            name={question.id}
                            value={option}
                            checked={quizAnswers[question.id] === option}
                            onChange={() => handleQuizAnswer(question.id, option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  ))}
                  <button 
                    className="submit-quiz-btn"
                    onClick={submitQuiz}
                    disabled={Object.keys(quizAnswers).length < birdQuizzes[selectedBird].length}
                  >
                    Submit {selectedBird} Quiz
                  </button>
                </>
              ) : (
                <div className="quiz-results">
                  <h3>🎊 {selectedBird} Quiz Results! 🎊</h3>
                  <div className="bird-emoji-result">
                    {birdEmojis[selectedBird]} {selectedBird} {birdEmojis[selectedBird]}
                  </div>
                  <p>You scored {score} out of {birdQuizzes[selectedBird].length}!</p>
                  <div className="score-message">
                    {getScoreMessage(score, birdQuizzes[selectedBird].length)}
                  </div>
                  <button className="reset-quiz-btn" onClick={resetQuiz}>
                    🎯 Try Another Bird Quiz
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {isCelebrating && (
          <div className="celebration">
            {celebrationEmojis.map((emoji, index) => (
              <div 
                key={index} 
                className="confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="explorer-footer">
        <p>&copy; 2025 Feathered Friends Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FeatheredFriendExplorer; 