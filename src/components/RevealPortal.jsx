import React, { useState } from 'react';
import { getNameData } from '../data/birthdayData';

export const RevealPortal = ({ userData, onComplete }) => {
  const [unlocked, setUnlocked] = useState([]);

  // Get all name-based data
  const nameData = getNameData(userData?.name || 'Friend');
  
  // Use name data for revelations
  const zodiac = nameData.zodiac;
  const birthstone = nameData.birthstone;
  const spiritAnimal = nameData.spiritAnimal;
  const element = nameData.element;
  const lifePath = nameData.lifePath;
  const greeting = nameData.greeting;
  const destiny = nameData.destiny;
  const power = nameData.power;

  const revelations = [
    { 
      id: 1, 
      title: "🔮 Your Cosmic Sign", 
      content: `${greeting}! Your cosmic sign is ${zodiac.sign}! You are a ${zodiac.trait} ruled by ${zodiac.ruler}. Your element is ${zodiac.element}.`,
      funFact: `Your cosmic power is ${zodiac.power}!`,
      color: "#ff6b6b"
    },
    { 
      id: 2, 
      title: "💎 Your Sacred Stone", 
      content: `Your birthstone is ${birthstone.name}! This ${birthstone.color} stone represents ${birthstone.meaning}. It activates your ${birthstone.chakra}.`,
      funFact: `The stone's power: ${birthstone.power}!`,
      color: "#4ecdc4"
    },
    { 
      id: 3, 
      title: "🦊 Your Spirit Animal", 
      content: `Your spirit animal is the ${spiritAnimal.animal}! You have the spirit of a ${spiritAnimal.trait}.`,
      funFact: `Animal message: ${spiritAnimal.message}`,
      color: "#45b7d1"
    },
    { 
      id: 4, 
      title: "🌟 Your Life Path", 
      content: `You are Life Path ${lifePath.number} - ${lifePath.meaning}! You are destined to be a ${lifePath.destiny}.`,
      funFact: `Your special power is to ${power}!`,
      color: "#96ceb4"
    },
    { 
      id: 5, 
      title: "⚡ Your Element", 
      content: `Your element is ${element}. This shapes your personality and destiny.`,
      funFact: `Your destiny: ${destiny}!`,
      color: "#ff9a9e"
    },
    { 
      id: 6, 
      title: "✨ Your Special Day", 
      content: `Born on ${userData?.formattedDate || 'your special day'}, you arrived with a unique purpose.`,
      funFact: `You share this day with many wonderful souls!`,
      color: "#a8e6cf"
    }
  ];

  const handleReveal = (index) => {
    if (!unlocked.includes(index)) {
      setUnlocked([...unlocked, index]);
    }
  };

  if (!userData) {
    return <div className="loading">Loading your cosmic data...</div>;
  }

  return (
    <div className="reveal-portal">
      <div className="portal-header">
        <h2>✨ {userData.name}'s Cosmic Profile ✨</h2>
        <p className="personalized-greeting">{greeting}</p>
        <p>{unlocked.length} of {revelations.length} cosmic secrets revealed</p>
      </div>

      <div className="reveal-grid">
        {revelations.map((reveal, index) => (
          <div 
            key={reveal.id}
            className={`reveal-item ${unlocked.includes(index) ? 'unlocked' : ''}`}
            onClick={() => handleReveal(index)}
          >
            <div 
              className="reveal-card-pro"
              style={{ background: reveal.color }}
            >
              {!unlocked.includes(index) ? (
                <div className="reveal-locked">
                  <div className="lock-icon">🔒</div>
                  <h3>{reveal.title}</h3>
                  <p>Click to reveal</p>
                </div>
              ) : (
                <div className="reveal-unlocked">
                  <h3>{reveal.title}</h3>
                  <p className="reveal-content">{reveal.content}</p>
                  <div className="reveal-funfact">
                    <span>✨</span>
                    <p>{reveal.funFact}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {unlocked.length === revelations.length && (
        <div className="portal-complete">
          <h3>🎉 All Cosmic Secrets Unlocked, {userData.name}! 🎉</h3>
          <p className="completion-message">
            You've discovered your true cosmic identity!
          </p>
          <button className="final-reveal-btn" onClick={onComplete}>
            Continue to Celebration →
          </button>
        </div>
      )}
    </div>
  );
};