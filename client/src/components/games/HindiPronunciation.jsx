import React, { useState, useEffect } from "react";
import { Volume2 } from "lucide-react";
import data from "../../constants/HindiPronunciation.json";
/**
 * HindiPronunciation - A pronunciation game with audio playback
 */
const HindiPronunciation = () => {
  // Sample Hindi phrases with audio URLs (these would be replaced with actual audio files)
  const phrases = data;
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [practiceCount, setPracticeCount] = useState(0);

  const currentPhrase = phrases[currentPhraseIndex];

  const playAudio = (audioUrl) => {
    if (!audioUrl) {
      alert("No audio available for this phrase.");
      return;
    }

    const audio = new Audio(audioUrl);
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
      alert("Failed to play audio.");
    });
  };

  const nextPhrase = () => {
    setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
    setShowTransliteration(false);
    setPracticeCount(0);
  };

  const prevPhrase = () => {
    setCurrentPhraseIndex(
      (currentPhraseIndex - 1 + phrases.length) % phrases.length
    );
    setShowTransliteration(false);
    setPracticeCount(0);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-center">
        Hindi Pronunciation Practice
      </h2>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Listen, practice, and perfect your Hindi pronunciation
      </p>

      <div className="bg-blue-50 p-6 rounded-lg text-center mb-4">
        <div className="text-3xl font-bold mb-2">{currentPhrase.hindi}</div>

        {showTransliteration ? (
          <div className="text-xl text-blue-700 mb-2">
            {currentPhrase.transliteration}
          </div>
        ) : (
          <button
            onClick={() => setShowTransliteration(true)}
            className="text-sm text-blue-600 underline mb-2"
          >
            Show pronunciation guide
          </button>
        )}

        <div className="text-gray-600">{currentPhrase.translation}</div>
      </div>

      <div className="flex justify-center mb-4">
        <button
          onClick={() => playAudio(currentPhrase.audioUrl)}
          className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
        >
          <Volume2 size={24} className="mr-2" />
          Listen
        </button>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={prevPhrase}
          className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Previous
        </button>

        <div className="text-sm text-gray-600">
          Phrase {currentPhraseIndex + 1} of {phrases.length}
          {practiceCount > 0 && (
            <span className="ml-2">• Practiced {practiceCount} times</span>
          )}
        </div>

        <button
          onClick={nextPhrase}
          className="flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default HindiPronunciation;
