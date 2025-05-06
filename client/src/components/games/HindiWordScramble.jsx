import React, { useState, useEffect } from "react";
import { Shuffle, Check, X, RefreshCw, Volume2 } from "lucide-react";

/**
 * HindiWordScramble - A word unscrambling game
 */
const HindiWordScramble = () => {
  // Sample Hindi words with meanings, transliteration, and difficulty
  const wordsList = [
    {
      hindi: "नमस्ते",
      translation: "Hello",
      transliteration: "Namaste",
      difficulty: "easy",
    },
    {
      hindi: "धन्यवाद",
      translation: "Thank you",
      transliteration: "Dhanyavaad",
      difficulty: "medium",
    },
    {
      hindi: "पानी",
      translation: "Water",
      transliteration: "Paani",
      difficulty: "easy",
    },
    {
      hindi: "खाना",
      translation: "Food",
      transliteration: "Khaana",
      difficulty: "easy",
    },
    {
      hindi: "स्कूल",
      translation: "School",
      transliteration: "School",
      difficulty: "easy",
    },
    {
      hindi: "किताब",
      translation: "Book",
      transliteration: "Kitaab",
      difficulty: "easy",
    },
    {
      hindi: "मित्र",
      translation: "Friend",
      transliteration: "Mitra",
      difficulty: "medium",
    },
    {
      hindi: "परिवार",
      translation: "Family",
      transliteration: "Parivaar",
      difficulty: "medium",
    },
    {
      hindi: "आसमान",
      translation: "Sky",
      transliteration: "Aasmaan",
      difficulty: "medium",
    },
    {
      hindi: "स्वतंत्रता",
      translation: "Freedom",
      transliteration: "Swatantrata",
      difficulty: "hard",
    },
  ];

  const [currentWord, setCurrentWord] = useState(null);
  const [scrambledTransliteration, setScrambledTransliteration] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [gameMode, setGameMode] = useState("english"); // "english" or "hindi"
  const [difficulty, setDifficulty] = useState("easy"); // "easy", "medium", "hard"

  // Initialize the game
  useEffect(() => {
    newWord();
  }, [gameMode, difficulty]);

  // Get filtered words based on difficulty
  const getFilteredWords = () => {
    if (difficulty === "all") {
      return wordsList;
    }
    return wordsList.filter((word) => word.difficulty === difficulty);
  };

  // Scramble a string
  const scrambleString = (str) => {
    const arr = str.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
  };

  // Get a new word
  const newWord = () => {
    const filteredWords = getFilteredWords();
    if (filteredWords.length === 0) return;

    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    const selectedWord = filteredWords[randomIndex];

    setCurrentWord(selectedWord);

    // Scramble the transliteration
    let scrambled;
    do {
      scrambled = scrambleString(selectedWord.transliteration);
    } while (scrambled === selectedWord.transliteration);

    setScrambledTransliteration(scrambled);
    setUserGuess("");
    setFeedback(null);
  };

  // Check user's answer
  const checkAnswer = () => {
    if (!userGuess.trim()) return;

    const correctAnswer = currentWord.transliteration.toLowerCase();
    const userAnswer = userGuess.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
      setFeedback({
        correct: true,
        message: "Correct! Well done! 👏",
      });
      setScore(score + (hintsUsed === 0 ? 10 : 5));
    } else {
      setFeedback({
        correct: false,
        message: `Not quite! The correct answer is "${currentWord.transliteration}".`,
      });
    }
  };

  // Provide a hint (reveal first letter)
  const giveHint = () => {
    if (hintsUsed >= currentWord.transliteration.length - 1) return;

    const correctAnswer = currentWord.transliteration;
    const hintedGuess =
      correctAnswer.substring(0, hintsUsed + 1) +
      "_".repeat(correctAnswer.length - (hintsUsed + 1));

    setUserGuess(hintedGuess);
    setHintsUsed(hintsUsed + 1);
  };

  // Next word
  const handleNextWord = () => {
    setHintsUsed(0);
    newWord();
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-center">
        Hindi Word Unscramble
      </h2>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Unscramble the Hindi words to improve your vocabulary
      </p>

      <div className="flex justify-between items-center mb-4">
        <div className="text-sm">
          <span className="font-semibold">Score:</span> {score}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setGameMode("english")}
            className={`px-3 py-1 text-xs rounded-md ${
              gameMode === "english"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            English → Hindi
          </button>
          <button
            onClick={() => setGameMode("hindi")}
            className={`px-3 py-1 text-xs rounded-md ${
              gameMode === "hindi"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Hindi → English
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setDifficulty("easy")}
          className={`px-3 py-1 text-xs rounded-md ${
            difficulty === "easy"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Easy
        </button>
        <button
          onClick={() => setDifficulty("medium")}
          className={`px-3 py-1 text-xs rounded-md ${
            difficulty === "medium"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Medium
        </button>
        <button
          onClick={() => setDifficulty("hard")}
          className={`px-3 py-1 text-xs rounded-md ${
            difficulty === "hard"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Hard
        </button>
        <button
          onClick={() => setDifficulty("all")}
          className={`px-3 py-1 text-xs rounded-md ${
            difficulty === "all"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          All
        </button>
      </div>

      {currentWord && (
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg w-full text-center">
            <div className="mb-2">
              {gameMode === "english" ? (
                <>
                  <span className="font-semibold">Translate to Hindi:</span>
                  <div className="text-xl mt-1">{currentWord.translation}</div>
                </>
              ) : (
                <>
                  <span className="font-semibold">Translate to English:</span>
                  <div className="text-2xl mt-1">{currentWord.hindi}</div>
                </>
              )}
            </div>

            <div>
              <span className="text-sm text-gray-600">Unscramble:</span>
              <div className="text-lg font-bold tracking-wide mt-1 flex justify-center">
                {scrambledTransliteration.split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block bg-blue-100 text-blue-800 px-2 py-1 mx-1 rounded"
                  >
                    {char}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full">
            <input
              type="text"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              placeholder="Type your answer here"
              className="w-full p-2 border border-gray-300 rounded-md"
              disabled={feedback !== null}
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={checkAnswer}
              disabled={feedback !== null}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 flex items-center"
            >
              <Check size={16} className="mr-1" /> Check
            </button>
            <button
              onClick={giveHint}
              disabled={
                feedback !== null ||
                hintsUsed >= currentWord.transliteration.length - 1
              }
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 disabled:bg-gray-400 flex items-center"
            >
              Hint (-5 pts)
            </button>
          </div>

          {feedback && (
            <div
              className={`w-full p-3 rounded-md text-center ${
                feedback.correct
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              <p>{feedback.message}</p>
              <button
                onClick={handleNextWord}
                className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Next Word
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HindiWordScramble;
