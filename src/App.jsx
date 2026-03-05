import React, { useState } from 'react';
import './styles/ProApp.css';

// ========== IMPORT ALL COMPONENTS ==========
import { LuxuryDateEntry } from './components/LuxuryDateEntry';
import { TimeCapsule } from './components/TimeCapsule';
import { RevealPortal } from './components/RevealPortal';
import { FinalCelebration } from './components/FinalCelebration';

// ========== MAIN APP COMPONENT ==========
function App() {
  const [stage, setStage] = useState('entry');
  const [userData, setUserData] = useState(null);

  const handleEntryComplete = (data) => {
    console.log('Entry complete:', data);
    setUserData(data);
    setStage('capsule');
  };

  const handleCapsuleComplete = () => {
    setStage('reveal');
  };

  const handleRevealComplete = () => {
    setStage('celebration');
  };

  const handleReset = () => {
    setStage('entry');
    setUserData(null);
  };

  // Background component
  const CinematicBackground = () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'radial-gradient(circle at 30% 30%, #2a1a3a, #0a0a1a, #000)',
      zIndex: -1
    }} />
  );

  return (
    <div className="pro-app">
      <CinematicBackground />
      
      {/* Using imported components with props */}
      {stage === 'entry' && (
        <LuxuryDateEntry onComplete={handleEntryComplete} />
      )}

      {stage === 'capsule' && userData && (
        <TimeCapsule 
          userData={userData} 
          onComplete={handleCapsuleComplete}
        />
      )}

      {stage === 'reveal' && userData && (
        <RevealPortal 
          userData={userData} 
          onComplete={handleRevealComplete}
        />
      )}

      {stage === 'celebration' && userData && (
        <FinalCelebration userData={userData} />
      )}

      {stage !== 'entry' && (
        <button className="global-reset" onClick={handleReset}>
          ← Start Over
        </button>
      )}
    </div>
  );
}

export default App;