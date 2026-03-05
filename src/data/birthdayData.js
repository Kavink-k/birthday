// Name-based Zodiac Signs
export const getNameZodiac = (name) => {
  const nameZodiacs = {
    'Barath': { 
      sign: '♌ Leo', 
      element: 'Fire 🔥',
      ruler: 'Sun ☀️',
      trait: 'natural born leader',
      power: 'royal dignity'
    },
    'dihravish': { 
      sign: '♐ Sagittarius', 
      element: 'Fire 🔥',
      ruler: 'Jupiter ⭐',
      trait: 'wisdom seeker',
      power: 'philosophical insight'
    },
    'John': { 
      sign: '♓ Pisces', 
      element: 'Water 💧',
      ruler: 'Neptune 🌊',
      trait: 'compassionate healer',
      power: 'emotional depth'
    },
    'Sarah': { 
      sign: '♎ Libra', 
      element: 'Air 💨',
      ruler: 'Venus ♀️',
      trait: 'graceful diplomat',
      power: 'perfect balance'
    },
    'Mike': { 
      sign: '♈ Aries', 
      element: 'Fire 🔥',
      ruler: 'Mars 🔴',
      trait: 'courageous warrior',
      power: 'unstoppable energy'
    },
    'Lisa': { 
      sign: '♉ Taurus', 
      element: 'Earth 🌍',
      ruler: 'Venus ♀️',
      trait: 'artistic soul',
      power: 'creative abundance'
    },
    'David': { 
      sign: '♒ Aquarius', 
      element: 'Air 💨',
      ruler: 'Uranus ⚡',
      trait: 'visionary thinker',
      power: 'revolutionary ideas'
    },
    'Emma': { 
      sign: '♊ Gemini', 
      element: 'Air 💨',
      ruler: 'Mercury ☿',
      trait: 'brilliant communicator',
      power: 'versatile genius'
    },
    'Chris': { 
      sign: '♐ Sagittarius', 
      element: 'Fire 🔥',
      ruler: 'Jupiter ⭐',
      trait: 'adventurous spirit',
      power: 'boundless optimism'
    }
  };
  
  return nameZodiacs[name] || { 
    sign: '✨ Cosmic Spirit', 
    element: 'Universal Energy 🌌',
    ruler: 'The Universe ✨',
    trait: 'unique and special',
    power: 'infinite potential'
  };
};

// Name-based Birthstones
export const getNameBirthstone = (name) => {
  const nameStones = {
    'Barath': { 
      name: 'Ruby', 
      color: 'Red 🔴',
      meaning: 'passion and power',
      power: 'royal protection',
      chakra: 'Heart Chakra'
    },
    'dihravish': { 
      name: 'Sapphire', 
      color: 'Blue 🔵',
      meaning: 'wisdom and truth',
      power: 'spiritual insight',
      chakra: 'Third Eye'
    },
    'John': { 
      name: 'Aquamarine', 
      color: 'Sea Blue 🌊',
      meaning: 'peace and healing',
      power: 'emotional balance',
      chakra: 'Throat Chakra'
    },
    'Sarah': { 
      name: 'Pearl', 
      color: 'White ⚪',
      meaning: 'purity and grace',
      power: 'divine femininity',
      chakra: 'Crown Chakra'
    },
    'Mike': { 
      name: 'Garnet', 
      color: 'Deep Red ❤️',
      meaning: 'strength and survival',
      power: 'warrior energy',
      chakra: 'Root Chakra'
    },
    'Lisa': { 
      name: 'Emerald', 
      color: 'Green 💚',
      meaning: 'love and creativity',
      power: 'artistic vision',
      chakra: 'Heart Chakra'
    },
    'David': { 
      name: 'Amethyst', 
      color: 'Purple 💜',
      meaning: 'wisdom and spirituality',
      power: 'divine connection',
      chakra: 'Third Eye'
    },
    'Emma': { 
      name: 'Opal', 
      color: 'Rainbow 🌈',
      meaning: 'hope and inspiration',
      power: 'creative magic',
      chakra: 'Sacral Chakra'
    },
    'Chris': { 
      name: 'Topaz', 
      color: 'Gold ✨',
      meaning: 'joy and abundance',
      power: 'manifestation',
      chakra: 'Solar Plexus'
    }
  };
  
  return nameStones[name] || { 
    name: 'Diamond', 
    color: 'Clear ✨',
    meaning: 'unique beauty',
    power: 'infinite potential',
    chakra: 'All Chakras'
  };
};

// Name-based Spirit Animals
export const getNameSpiritAnimal = (name) => {
  const nameAnimals = {
    'Barath': { 
      animal: 'Lion 🦁', 
      trait: 'royal and courageous',
      message: 'Lead with pride and dignity',
      power: 'king of your domain'
    },
    'dihravish': { 
      animal: 'Owl 🦉', 
      trait: 'wise and perceptive',
      message: 'Trust your inner wisdom',
      power: 'see what others miss'
    },
    'John': { 
      animal: 'Dolphin 🐬', 
      trait: 'compassionate and playful',
      message: 'Heal with joy and love',
      power: 'emotional intelligence'
    },
    'Sarah': { 
      animal: 'Swan 🦢', 
      trait: 'graceful and elegant',
      message: 'Embrace your inner beauty',
      power: 'transformative grace'
    },
    'Mike': { 
      animal: 'Wolf 🐺', 
      trait: 'loyal and brave',
      message: 'Protect your pack',
      power: 'unshakeable loyalty'
    },
    'Lisa': { 
      animal: 'Butterfly 🦋', 
      trait: 'creative and transformative',
      message: 'Embrace your evolution',
      power: 'beautiful transformation'
    },
    'David': { 
      animal: 'Eagle 🦅', 
      trait: 'visionary and free',
      message: 'Soar to new heights',
      power: 'see the big picture'
    },
    'Emma': { 
      animal: 'Fox 🦊', 
      trait: 'clever and adaptable',
      message: 'Find creative solutions',
      power: 'quick thinking'
    },
    'Chris': { 
      animal: 'Horse 🐎', 
      trait: 'adventurous and strong',
      message: 'Run towards your dreams',
      power: 'unstoppable spirit'
    }
  };
  
  return nameAnimals[name] || { 
    animal: 'Phoenix 🔥', 
    trait: 'unique and resilient',
    message: 'Rise from every challenge',
    power: 'eternal renewal'
  };
};

// Name-based Element
export const getNameElement = (name) => {
  const elements = {
    'Barath': 'Fire 🔥 - Passion and Energy',
    'dihravish': 'Air 💨 - Wisdom and Thought',
    'John': 'Water 💧 - Emotion and Intuition',
    'Sarah': 'Earth 🌍 - Stability and Grace',
    'Mike': 'Fire 🔥 - Courage and Action',
    'Lisa': 'Earth 🌍 - Creativity and Growth',
    'David': 'Air 💨 - Innovation and Ideas',
    'Emma': 'Air 💨 - Communication and Wit',
    'Chris': 'Fire 🔥 - Adventure and Optimism'
  };
  return elements[name] || 'Cosmic Energy ✨ - Everything and Anything';
};

// Name-based Life Path
export const getNameLifePath = (name) => {
  // Simple hash function to get consistent number from name
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const number = (hash % 9) + 1;
  
  const lifePaths = {
    1: { number: '1', meaning: 'The Leader', destiny: 'pioneer and innovator' },
    2: { number: '2', meaning: 'The Diplomat', destiny: 'peacemaker and healer' },
    3: { number: '3', meaning: 'The Creator', destiny: 'artist and communicator' },
    4: { number: '4', meaning: 'The Builder', destiny: 'architect and organizer' },
    5: { number: '5', meaning: 'The Adventurer', destiny: 'explorer and freedom seeker' },
    6: { number: '6', meaning: 'The Nurturer', destiny: 'teacher and caregiver' },
    7: { number: '7', meaning: 'The Seeker', destiny: 'philosopher and mystic' },
    8: { number: '8', meaning: 'The Powerhouse', destiny: 'leader and achiever' },
    9: { number: '9', meaning: 'The Humanitarian', destiny: 'visionary and idealist' }
  };
  
  return lifePaths[number] || lifePaths[1];
};

// Name-based Greeting
export const getNameGreeting = (name) => {
  const greetings = {
    'Barath': '👑 Your Royal Highness',
    'dihravish': '🌍 Wise Traveler',
    'John': '💫 Gentle Soul',
    'Sarah': '👸 Princess of Grace',
    'Mike': '⚔️ Brave Warrior',
    'Lisa': '🎨 Creative Spirit',
    'David': '📚 Wise Storyteller',
    'Emma': '⭐ Shining Star',
    'Chris': '🌟 Adventurous Spirit'
  };
  return greetings[name] || '✨ Magnificent Being';
};

// Name-based Destiny
export const getNameDestiny = (name) => {
  const destinies = {
    'Barath': 'lead and inspire nations',
    'dihravish': 'collect ancient wisdom and share it',
    'John': 'heal hearts and bring peace',
    'Sarah': 'create beauty and inspire grace',
    'Mike': 'protect the innocent and fight for justice',
    'Lisa': 'create art that touches souls',
    'David': 'write stories that change lives',
    'Emma': 'shine bright and light up the world',
    'Chris': 'explore unknown and discover treasures'
  };
  return destinies[name] || 'achieve greatness in your own unique way';
};

// Name-based Power
export const getNamePower = (name) => {
  const powers = {
    'Barath': 'command respect and inspire loyalty',
    'dihravish': 'see truth and understand mysteries',
    'John': 'heal with a single touch',
    'Sarah': 'bring peace to any situation',
    'Mike': 'overcome any obstacle',
    'Lisa': 'create beauty from nothing',
    'David': 'move hearts with words',
    'Emma': 'charm and captivate anyone',
    'Chris': 'find adventure everywhere'
  };
  return powers[name] || 'unlock your infinite potential';
};

// Get all name-based data at once
export const getNameData = (name) => {
  return {
    zodiac: getNameZodiac(name),
    birthstone: getNameBirthstone(name),
    spiritAnimal: getNameSpiritAnimal(name),
    element: getNameElement(name),
    lifePath: getNameLifePath(name),
    greeting: getNameGreeting(name),
    destiny: getNameDestiny(name),
    power: getNamePower(name)
  };
};

// Default export with all functions
export default {
  getNameZodiac,
  getNameBirthstone,
  getNameSpiritAnimal,
  getNameElement,
  getNameLifePath,
  getNameGreeting,
  getNameDestiny,
  getNamePower,
  getNameData
};