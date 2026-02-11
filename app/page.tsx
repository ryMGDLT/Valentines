'use client';

import { useState } from 'react';

export default function ValentinePage() {
  const [noClicks, setNoClicks] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);

  // Array of GIF URLs for each state
  const gifs = [
    '/love.gif', // Initial - cute romantic
    '/sad-anxious (1).gif', // Ayaw? - slightly sad
    '/tkthao219-bubududu.gif', // Ayaw Talaga? - more dramatic
    '/rabbit-bunny.gif', // Sure na? - pleading
    '/love-you-cute.gif', // Final na talaga? - very dramatic
    '/cute-cry.gif', // joke lng - crying
    '/tonton-tonton-friends (1).gif' // papayag ka o - final dramatic
  ];

  // Array of messages for each state
  const messages = [
    "Will you be my Valentine?",
    "Ayaw?",
    "Ayaw Talaga?",
    "Sure na?",
    "Final na talaga? Ayaw? Last na to pag nag no ka wla na kasunod",
    "joke lng meron pa. Pleaaaaase payag ka na 😢 paiyak na ako oh",
    "Papayag ka or tatagiliran kita? 🤨"
  ];

  // Button sizes based on noClicks count
  const getYesButtonSize = () => {
    switch (noClicks) {
      case 0:
        return "px-8 py-4 text-lg";
      case 1:
        return "px-12 py-6 text-2xl";
      case 2:
        return "px-16 py-8 text-4xl";
      case 3:
        return "px-20 py-10 text-6xl";
      case 4:
        return "px-24 py-12 text-8xl";
      case 5:
        return "px-28 py-14 text-9xl";
      case 6:
        return "px-32 py-16 text-[10rem]";
      case 7:
        return "fixed inset-0 w-screen h-screen text-[12rem] bg-red-600 hover:bg-red-700 rounded-none";
      default:
        return "px-8 py-4 text-lg";
    }
  };

  // No button gets smaller with each click (uniform square with circular edges)
  const getNoButtonSize = () => {
    switch (noClicks) {
      case 0:
        return "w-24 h-16 text-lg";
      case 1:
        return "w-20 h-14 text-base";
      case 2:
        return "w-18 h-12 text-sm";
      case 3:
        return "w-16 h-10 text-xs";
      case 4:
        return "w-14 h-8 text-[10px]";
      case 5:
        return "w-12 h-6 text-[8px]";
      case 6:
        return "w-10 h-4 text-[6px]";
      default:
        return "w-24 h-16 text-lg";
    }
  };

  const handleNoClick = () => {
    if (noClicks < 7) {
      setNoClicks(prev => prev + 1);
    }
  };

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  // Button texts based on noClicks count
  const getYesButtonText = () => {
    switch (noClicks) {
      case 0:
        return "Yes";
      case 1:
        return "Yes na";
      case 2:
        return "Yes na";
      case 3:
        return "Yes na";
      case 4:
        return "Yes na";
      case 5:
        return "Yes na nga";
      case 6:
        return "Yes na";
      default:
        return "Yes";
    }
  };

  const getNoButtonText = () => {
    switch (noClicks) {
      case 0:
        return "No";
      case 1:
        return "Ayoko nga";
      case 2:
        return "Ayaw ngani";
      case 3:
        return "Ayoko nga duhh d-_-b";
      case 4:
        return "Balakajan d-_-b";
      case 5:
        return "hay nako bruce d-_-b";
      case 6:
        return "Please Sige na";
      default:
        return "No";
    }
  };

  const handleTryAgain = () => {
    setNoClicks(0);
    setShowSuccess(false);
    setHasMoved(false);
    setNoButtonPosition({ x: 0, y: 0 });
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300 via-red-200 to-pink-300 flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="text-center">
          <div className="mb-6 md:mb-8 lg:mb-10">
            <img 
              src="/bubuiak14kiss1.gif" 
              alt="Celebration"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto"
            />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-4 md:mb-6 lg:mb-8">Yaayyyy!!</h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 lg:mb-10">See u 💕</p>
          <button
            onClick={handleTryAgain}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 rounded-full transition-colors duration-200 text-base md:text-lg lg:text-xl"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-red-200 to-pink-300 flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      {/* GIF Section */}
      <div className="mb-6 md:mb-8 lg:mb-10">
        <img 
          src={gifs[noClicks]} 
          alt="Valentine GIF"
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto object-cover"
        />
      </div>

      {/* Main Message */}
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-6 md:mb-8 lg:mb-10 leading-relaxed text-center px-4">
        {messages[noClicks]}
      </h1>

      {/* Buttons Container */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 justify-center items-center">
        {/* Yes Button Container */}
        <div>
          <button
            onClick={handleYesClick}
            className={`bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${getYesButtonSize()}`}
          >
            {getYesButtonText()}
          </button>
        </div>

        {/* No Button Container */}
        {noClicks < 7 && (
          <div className="relative">
            <button
              onClick={(e) => {
                // Move to random position on screen every time it's clicked
                const randomX = Math.random() * (window.innerWidth - 64);
                const randomY = Math.random() * (window.innerHeight - 64);
                setNoButtonPosition({ x: randomX, y: randomY });
                setHasMoved(true);
                handleNoClick();
              }}
              onMouseEnter={() => {
                if (!hasMoved && noClicks > 0) {
                  // Move to random position on hover
                  const randomX = Math.random() * (window.innerWidth - 64);
                  const randomY = Math.random() * (window.innerHeight - 64);
                  setNoButtonPosition({ x: randomX, y: randomY });
                  setHasMoved(true);
                }
              }}
              className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-full transition-all duration-300 ${getNoButtonSize()}`}
              style={{
                position: hasMoved ? 'fixed' : 'relative',
                left: hasMoved ? `${noButtonPosition.x}px` : 'auto',
                top: hasMoved ? `${noButtonPosition.y}px` : 'auto',
                zIndex: hasMoved ? 9999 : 'auto'
              }}
            >
              {getNoButtonText()}
            </button>
          </div>
        )}
      </div>

      {/* Reset Button */}
      {noClicks > 0 && (
        <button
          onClick={() => setNoClicks(0)}
          className="mt-6 text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Start Over
        </button>
      )}
    </div>
  );
}