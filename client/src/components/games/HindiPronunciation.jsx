import React, { useState, useEffect } from "react";
import { Shuffle, Check, X, RefreshCw, Volume2 } from "lucide-react";

/**
 * HindiPronunciation - A pronunciation game with audio playback
 */
const HindiPronunciation = () => {
  // Sample Hindi phrases with audio URLs (these would be replaced with actual audio files)
  const phrases = [
    {
      hindi: "नमस्ते",
      transliteration: "Namaste",
      translation: "Hello",
      audioUrl: "#", // Replace with actual audio URL
    },
    {
      hindi: "आप कैसे हैं?",
      transliteration: "Aap kaise hain?",
      translation: "How are you?",
      audioUrl: "#", // Replace with actual audio URL
    },
    {
      hindi: "मेरा नाम ... है",
      transliteration: "Mera naam ... hai",
      translation: "My name is ...",
      audioUrl: "#", // Replace with actual audio URL
    },
    {
      hindi: "धन्यवाद",
      transliteration: "Dhanyavaad",
      translation: "Thank you",
      audioUrl: "#", // Replace with actual audio URL
    },
    {
      hindi: "फिर मिलेंगे",
      transliteration: "Phir milenge",
      translation: "See you again",
      audioUrl: "#", // Replace with actual audio URL
    },
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [practiceCount, setPracticeCount] = useState(0);

  const currentPhrase = phrases[currentPhraseIndex];

  const playAudio = () => {
    // In a real implementation, this would play the audio file
    // For now, we'll just increment the practice count
    setPracticeCount(practiceCount + 1);
    alert(
      "In a real implementation, this would play audio of the Hindi phrase."
    );
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
          onClick={playAudio}
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
