import React, { useState } from "react";
import { X } from "lucide-react";
import HindiMemoryGame from "./HindiMemoryGame";
import HindiWordScramble from "./HindiWordScramble";
import HindiPronunciation from "./HindiPronunciation";

/**
 * Modal component to display games in a popup overlay
 */
const GameModal = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-bold">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

/**
 * Game card component that opens the respective game when clicked
 */
const GameCard = ({ title, description, icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center justify-center mb-4">
        <div className="bg-blue-100 text-blue-600 p-3 rounded-full">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
      <div className="text-center mt-4">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Play Now
        </button>
      </div>
    </div>
  );
};

/**
 * Main component that displays game cards and handles modal state
 */
const HindiGamesSection = () => {
  const [activeGame, setActiveGame] = useState(null);

  const gameComponents = {
    memory: {
      title: "Hindi Memory Match",
      component: <HindiMemoryGame />,
      description: "Match Hindi words with their English translations",
      icon: <span className="text-2xl">🔤</span>,
    },
    scramble: {
      title: "Hindi Word Unscramble",
      component: <HindiWordScramble />,
      description: "Unscramble Hindi words to improve your vocabulary",
      icon: <span className="text-2xl">🔡</span>,
    },
    pronunciation: {
      title: "Hindi Pronunciation Practice",
      component: <HindiPronunciation />,
      description: "Listen and practice Hindi pronunciation",
      icon: <span className="text-2xl">🔊</span>,
    },
  };

  const openGame = (gameKey) => {
    setActiveGame(gameKey);
  };

  const closeGame = () => {
    setActiveGame(null);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-4">
          Interactive Hindi Learning Games
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Make learning Hindi fun and engaging with these interactive games
          designed specifically for children and beginners. Click on any game to
          start playing!
        </p>

        {/* Game cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {Object.entries(gameComponents).map(([key, game]) => (
            <GameCard
              key={key}
              title={game.title}
              description={game.description}
              icon={game.icon}
              onClick={() => openGame(key)}
            />
          ))}
        </div>

        {/* Game modals */}
        {Object.entries(gameComponents).map(([key, game]) => (
          <GameModal
            key={key}
            isOpen={activeGame === key}
            onClose={closeGame}
            title={game.title}
          >
            {game.component}
          </GameModal>
        ))}
      </div>
    </div>
  );
};

export default HindiGamesSection;
