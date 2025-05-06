import React, { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

/**
 * MemoryGame - A card matching game for Hindi vocabulary with proper 3D flip animation
 */
const HindiMemoryGame = () => {
  // Sample Hindi words with meanings and transliteration
  const wordPairs = [
    { hindi: "नमस्ते", translation: "Hello", transliteration: "Namaste" },
    {
      hindi: "धन्यवाद",
      translation: "Thank you",
      transliteration: "Dhanyavaad",
    },
    { hindi: "पानी", translation: "Water", transliteration: "Paani" },
    { hindi: "खाना", translation: "Food", transliteration: "Khaana" },
    { hindi: "एक", translation: "One", transliteration: "Ek" },
    { hindi: "दो", translation: "Two", transliteration: "Do" },
    { hindi: "तीन", translation: "Three", transliteration: "Teen" },
    { hindi: "चार", translation: "Four", transliteration: "Chaar" },
  ];

  // Create cards from word pairs (Hindi and English)
  const createCards = () => {
    const cards = [];
    wordPairs.forEach((pair, index) => {
      cards.push({
        id: index * 2,
        content: pair.hindi,
        type: "hindi",
        matchId: index,
        flipped: false,
        matched: false,
        transliteration: pair.transliteration,
      });
      cards.push({
        id: index * 2 + 1,
        content: pair.translation,
        type: "english",
        matchId: index,
        flipped: false,
        matched: false,
      });
    });
    return shuffleCards(cards);
  };

  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [difficulty, setDifficulty] = useState("easy"); // easy, medium, hard

  // Initialize game
  useEffect(() => {
    startNewGame();
  }, [difficulty]);

  // Shuffle cards using Fisher-Yates algorithm
  const shuffleCards = (cardsArray) => {
    const shuffled = [...cardsArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Start a new game
  const startNewGame = () => {
    // Select a subset of word pairs based on difficulty
    let gameWordPairs;
    if (difficulty === "easy") {
      gameWordPairs = wordPairs.slice(0, 4); // 4 pairs = 8 cards
    } else if (difficulty === "medium") {
      gameWordPairs = wordPairs.slice(0, 6); // 6 pairs = 12 cards
    } else {
      gameWordPairs = wordPairs; // All 8 pairs = 16 cards
    }

    // Create and initialize cards
    const gameCards = [];
    gameWordPairs.forEach((pair, index) => {
      gameCards.push({
        id: index * 2,
        content: pair.hindi,
        type: "hindi",
        matchId: index,
        flipped: false,
        matched: false,
        transliteration: pair.transliteration,
      });
      gameCards.push({
        id: index * 2 + 1,
        content: pair.translation,
        type: "english",
        matchId: index,
        flipped: false,
        matched: false,
      });
    });

    setCards(shuffleCards(gameCards));
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setGameComplete(false);
  };

  // Handle card click
  const handleCardClick = (id) => {
    // Ignore click if already two cards flipped or if card is already flipped/matched
    if (flippedCards.length === 2) return;

    const cardIndex = cards.findIndex((card) => card.id === id);
    if (cards[cardIndex].flipped || cards[cardIndex].matched) return;

    // Flip this card
    const updatedCards = [...cards];
    updatedCards[cardIndex].flipped = true;
    setCards(updatedCards);

    // Add to flipped cards
    const newFlippedCards = [...flippedCards, cardIndex];
    setFlippedCards(newFlippedCards);

    // If this is the second card, check for a match
    if (newFlippedCards.length === 2) {
      setMoves((prevMoves) => prevMoves + 1);

      const firstCard = cards[newFlippedCards[0]];
      const secondCard = cards[newFlippedCards[1]];

      if (firstCard.matchId === secondCard.matchId) {
        // It's a match!
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[newFlippedCards[0]].matched = true;
          matchedCards[newFlippedCards[1]].matched = true;
          setCards(matchedCards);
          setFlippedCards([]);
          setMatchedPairs((prevPairs) => {
            const newPairs = prevPairs + 1;
            // Check if all pairs are matched
            if (
              newPairs ===
              (difficulty === "easy" ? 4 : difficulty === "medium" ? 6 : 8)
            ) {
              setGameComplete(true);
            }
            return newPairs;
          });
        }, 500);
      } else {
        // Not a match, flip back after delay
        setTimeout(() => {
          const resetCards = [...cards];
          resetCards[newFlippedCards[0]].flipped = false;
          resetCards[newFlippedCards[1]].flipped = false;
          setCards(resetCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Function to play pronunciation of Hindi word
  const speakWord = (text, event) => {
    event.stopPropagation(); // Prevent card flip when clicking the speak button
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hi-IN";
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Hindi Memory Match</h2>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Match Hindi words with their English translations
      </p>

      <div className="flex justify-between items-center mb-4">
        <div className="text-sm">
          <span className="font-semibold">Moves:</span> {moves}
        </div>
        <div className="text-sm">
          <span className="font-semibold">Matches:</span> {matchedPairs}/
          {difficulty === "easy" ? 4 : difficulty === "medium" ? 6 : 8}
        </div>
        <button
          onClick={startNewGame}
          className="flex items-center text-sm px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md"
        >
          <RefreshCw size={16} className="mr-1" /> Reset
        </button>
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
      </div>

      {/* Card grid with perspective for 3D effect */}
      <div
        className={`grid gap-3 mb-4 ${
          difficulty === "easy"
            ? "grid-cols-2 sm:grid-cols-4"
            : difficulty === "medium"
            ? "grid-cols-3 sm:grid-cols-4"
            : "grid-cols-4"
        }`}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="h-32 perspective-500"
            style={{ perspective: "1000px" }}
          >
            <div
              onClick={() => handleCardClick(card.id)}
              className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${
                card.flipped || card.matched ? "rotate-y-180" : ""
              }`}
              style={{
                transformStyle: "preserve-3d",
                transform:
                  card.flipped || card.matched ? "rotateY(180deg)" : "",
              }}
            >
              {/* Front face (question mark) */}
              <div
                className="absolute w-full h-full bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center backface-hidden"
                style={{ backfaceVisibility: "hidden" }}
              >
                <span className="text-white text-3xl font-bold">?</span>
              </div>

              {/* Back face (content) */}
              <div
                className={`absolute w-full h-full rounded-lg flex items-center justify-center p-2 backface-hidden rotate-y-180 ${
                  card.matched
                    ? "bg-green-100 border-2 border-green-500"
                    : "bg-white border-2 border-blue-500"
                }`}
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <span
                    className={`font-bold ${
                      card.type === "hindi" ? "text-2xl mb-1" : "text-lg"
                    }`}
                  >
                    {card.content}
                  </span>
                  {card.type === "hindi" && (
                    <>
                      <span className="text-sm text-gray-600">
                        {card.transliteration}
                      </span>
                      <button
                        onClick={(e) => speakWord(card.content, e)}
                        className="mt-1 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 py-1 rounded-full"
                      >
                        🔊
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {gameComplete && (
        <div className="bg-green-100 text-green-800 p-3 rounded-md text-center">
          <p className="font-bold">Congratulations! 🎉</p>
          <p className="text-sm">You completed the game in {moves} moves.</p>
          <button
            onClick={startNewGame}
            className="mt-2 px-4 py-2 bg-green-200 hover:bg-green-300 text-green-800 rounded-md text-sm font-medium"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default HindiMemoryGame;
