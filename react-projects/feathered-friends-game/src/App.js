import React, { useState, useEffect } from 'react';

// Data for the birds, their images, and facts
const birdData = [
    {
        id: 'pigeon',
        name: 'Pigeon',
        image: 'https://placehold.co/200x200/4F46E5/FFFFFF?text=Pigeon',
        facts: {
            habits: ["Often found in cities", "Flies in large flocks", "Excellent navigators", "Coos rather than sings"],
            food: ["Seeds, grains", "Breadcrumbs and human food scraps", "Small invertebrates"],
            habitat: ["Urban areas, buildings", "Cliffs and rocky coasts", "Parks and public squares"]
        }
    },
    {
        id: 'chicken',
        name: 'Chicken',
        image: 'https://placehold.co/200x200/F97316/FFFFFF?text=Chicken',
        facts: {
            habits: ["Scratches the ground for food", "Lays eggs regularly", "Roosts at night", "Dust bathes for hygiene"],
            food: ["Grains, seeds", "Insects and worms", "Leafy greens and kitchen scraps"],
            habitat: ["Farms and rural areas", "Coops and sheltered enclosures", "Domesticated worldwide"]
        }
    },
    {
        id: 'parrot',
        name: 'Parrot',
        image: 'https://placehold.co/200x200/22C55E/FFFFFF?text=Parrot',
        facts: {
            habits: ["Highly intelligent and social", "Can mimic human speech", "Climbs with beak and feet", "Often lives in flocks"],
            food: ["Fruits, nuts, seeds", "Nectar and flowers", "Some insects"],
            habitat: ["Tropical and subtropical forests", "Rainforests", "Savannas around the equator"]
        }
    },
    {
        id: 'canary',
        name: 'Canary',
        image: 'https://placehold.co/200x200/EAB307/FFFFFF?text=Canary',
        facts: {
            habits: ["Known for beautiful singing (males)", "Active fliers in open spaces", "Can be social or solitary", "Builds small cup-shaped nests"],
            food: ["Small seeds (like canary seed)", "Greens and some small fruits", "Insects (in wild)"],
            habitat: ["Wild: Canary Islands, Azores, Madeira (forests, gardens)", "Commonly kept in cages as pets"]
        }
    },
    {
        id: 'finch',
        name: 'Finch',
        image: 'https://placehold.co/200x200/EF4444/FFFFFF?text=Finch',
        facts: {
            habits: ["Small and active birds", "Often found in large flocks", "Fast and agile fliers", "Build intricate nests"],
            food: ["Tiny seeds", "Some insects and berries", "Nectar from flowers"],
            habitat: ["Diverse: grasslands, forests, deserts", "Gardens and suburban areas", "Popular cage birds globally"]
        }
    },
];

// Component for the Welcome Screen
const WelcomeScreen = ({ onStart }) => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4 font-inter text-gray-800">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg text-center border-b-4 border-indigo-500">
            <h1 className="text-5xl font-extrabold text-indigo-700 mb-6 drop-shadow-md">Feathered Friends Explorer</h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Welcome to the world of birds! Explore fascinating facts about their habits, food, and habitats, then test your knowledge with a fun puzzle game.
            </p>
            <button
                onClick={onStart}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75"
            >
                Start Exploring!
            </button>
        </div>
    </div>
);

// Component for displaying a single bird's detailed information
const BirdDetail = ({ bird, onBack, onStartQuiz }) => (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-4 font-inter text-gray-800">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-2xl w-full text-center border-b-4 border-purple-500 my-8">
            <h2 className="text-4xl font-bold text-purple-700 mb-6">{bird.name}</h2>
            <img src={bird.image} alt={bird.name} className="w-48 h-48 object-cover rounded-full mx-auto mb-6 border-4 border-purple-300 shadow-md" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-8">
                <div>
                    <h3 className="text-2xl font-semibold text-purple-600 mb-3">Habits:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {bird.facts.habits.map((fact, index) => (
                            <li key={index}>{fact}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-purple-600 mb-3">Food:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {bird.facts.food.map((fact, index) => (
                            <li key={index}>{fact}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-purple-600 mb-3">Habitat:</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {bird.facts.habitat.map((fact, index) => (
                            <li key={index}>{fact}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                    onClick={onBack}
                    className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
                >
                    Back to Gallery
                </button>
                <button
                    onClick={onStartQuiz}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                >
                    Start the Quiz!
                </button>
            </div>
        </div>
    </div>
);

// Component for the Bird Gallery (overview of birds)
const BirdGallery = ({ onSelectBird, onStartQuiz }) => (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-green-100 to-lime-200 p-4 font-inter text-gray-800">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-4xl w-full text-center border-b-4 border-green-500 my-8">
            <h2 className="text-4xl font-bold text-green-700 mb-8">Meet Our Feathered Friends!</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {birdData.map(bird => (
                    <div
                        key={bird.id}
                        onClick={() => onSelectBird(bird)}
                        className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer border-2 border-transparent hover:border-green-400"
                    >
                        <img src={bird.image} alt={bird.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-gray-300" />
                        <h3 className="text-xl font-semibold text-gray-900">{bird.name}</h3>
                        <p className="text-sm text-gray-600 mt-2">Click to learn more!</p>
                    </div>
                ))}
            </div>
            <button
                onClick={onStartQuiz}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75"
            >
                Ready for the Quiz!
            </button>
        </div>
    </div>
);

// Component for the Quiz Game
const QuizScreen = ({ onEndQuiz }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const generatedQuestions = [];
        const factCategories = ['habits', 'food', 'habitat'];
        const numBirds = birdData.length;

        for (let i = 0; i < 10; i++) {
            const correctBird = birdData[Math.floor(Math.random() * numBirds)];
            const category = factCategories[Math.floor(Math.random() * factCategories.length)];
            const correctFact = correctBird.facts[category][Math.floor(Math.random() * correctBird.facts[category].length)];

            let options = [correctFact];
            while (options.length < 3) {
                const randomBird = birdData[Math.floor(Math.random() * numBirds)];
                const randomFact = randomBird.facts[category][Math.floor(Math.random() * randomBird.facts[category].length)];
                if (!options.includes(randomFact)) {
                    options.push(randomFact);
                }
            }
            options.sort(() => Math.random() - 0.5);

            let questionText = '';
            if (category === 'habits') {
                questionText = `Which of these is a habit of the ${correctBird.name}?`;
            } else if (category === 'food') {
                questionText = `What does the ${correctBird.name} typically eat?`;
            } else if (category === 'habitat') {
                questionText = `Where would you typically find the ${correctBird.name}'s habitat?`;
            }

            generatedQuestions.push({
                bird: correctBird,
                question: questionText,
                options: options,
                correctAnswer: correctFact,
            });
        }
        setQuestions(generatedQuestions);
    }, []);

    const handleAnswerClick = (option) => {
        if (selectedAnswer !== null) return;

        setSelectedAnswer(option);
        const currentQuestion = questions[currentQuestionIndex];

        if (option === currentQuestion.correctAnswer) {
            setScore(prevScore => prevScore + 1);
            setFeedback('correct');
        } else {
            setFeedback('incorrect');
        }

        setTimeout(() => {
            setFeedback(null);
            setSelectedAnswer(null);
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            } else {
                onEndQuiz(score + (option === currentQuestion.correctAnswer ? 1 : 0));
            }
        }, 1500);
    };

    if (questions.length === 0) {
        return <div className="flex items-center justify-center min-h-screen bg-gray-100 font-inter">Loading Quiz...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 p-4 font-inter text-gray-800">
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-xl w-full text-center border-b-4 border-orange-500">
                <h2 className="text-3xl font-bold text-orange-700 mb-6">Quiz Time!</h2>
                <div className="text-xl text-gray-700 mb-4">
                    Question {currentQuestionIndex + 1} of {questions.length}
                </div>
                {currentQuestion.bird.image && (
                    <img src={currentQuestion.bird.image} alt={currentQuestion.bird.name} className="w-36 h-36 object-cover rounded-full mx-auto mb-6 border-4 border-orange-300 shadow-md" />
                )}
                <p className="text-2xl font-semibold mb-8">{currentQuestion.question}</p>

                <div className="space-y-4">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswerClick(option)}
                            disabled={selectedAnswer !== null}
                            className={`w-full py-3 px-6 rounded-lg text-lg font-medium transition duration-200 ease-in-out
                                ${selectedAnswer === option
                                    ? (feedback === 'correct' ? 'bg-green-200 border-green-500' : 'bg-red-200 border-red-500')
                                    : 'bg-orange-100 hover:bg-orange-200 border-orange-300'
                                }
                                ${selectedAnswer !== null && option === currentQuestion.correctAnswer ? 'border-green-500 bg-green-200 animate-pulse' : ''}
                                border-2 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75
                            `}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {feedback && (
                    <div className={`mt-8 text-2xl font-bold ${feedback === 'correct' ? 'text-green-600' : 'text-red-600'}`}>
                        {feedback === 'correct' ? 'Correct!' : 'Incorrect!'}
                    </div>
                )}
            </div>
        </div>
    );
};

// Component for the Results Screen
const ResultScreen = ({ score, totalQuestions, onRestart }) => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-200 p-4 font-inter text-gray-800">
        <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg text-center border-b-4 border-pink-500">
            <h2 className="text-4xl font-bold text-pink-700 mb-6">Quiz Results!</h2>
            <p className="text-3xl text-gray-700 mb-8">
                You scored <span className="font-extrabold text-pink-600">{score}</span> out of <span className="font-extrabold text-pink-600">{totalQuestions}</span>!
            </p>
            <button
                onClick={onRestart}
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-75"
            >
                Play Again
            </button>
        </div>
    </div>
);

// Main App Component
const App = () => {
    const [currentScreen, setCurrentScreen] = useState('welcome');
    const [selectedBird, setSelectedBird] = useState(null);
    const [finalScore, setFinalScore] = useState(0);

    const handleStartGame = () => setCurrentScreen('gallery');
    const handleSelectBird = (bird) => {
        setSelectedBird(bird);
        setCurrentScreen('detail');
    };
    const handleBackToGallery = () => {
        setSelectedBird(null);
        setCurrentScreen('gallery');
    };
    const handleStartQuiz = () => setCurrentScreen('quiz');
    const handleEndQuiz = (score) => {
        setFinalScore(score);
        setCurrentScreen('results');
    };
    const handleRestartGame = () => {
        setFinalScore(0);
        setSelectedBird(null);
        setCurrentScreen('welcome');
    };

    return (
        <div className="min-h-screen">
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
                .font-inter {
                    font-family: 'Inter', sans-serif;
                }
                `}
            </style>
            {currentScreen === 'welcome' && <WelcomeScreen onStart={handleStartGame} />}
            {currentScreen === 'gallery' && <BirdGallery onSelectBird={handleSelectBird} onStartQuiz={handleStartQuiz} />}
            {currentScreen === 'detail' && selectedBird && (
                <BirdDetail bird={selectedBird} onBack={handleBackToGallery} onStartQuiz={handleStartQuiz} />
            )}
            {currentScreen === 'quiz' && <QuizScreen onEndQuiz={handleEndQuiz} />}
            {currentScreen === 'results' && (
                <ResultScreen score={finalScore} totalQuestions={10} onRestart={handleRestartGame} />
            )}
        </div>
    );
};

export default App;
