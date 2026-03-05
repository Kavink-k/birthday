import React, { useState } from 'react';

export const LuxuryDateEntry = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [step, setStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNext = () => {
    if (step === 1 && name) setStep(2);
    else if (step === 2 && birthDate) setStep(3);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    if (name && birthDate) {
      setShowConfetti(true);
      const birth = new Date(birthDate);
      const today = new Date();
      let age = today.getFullYear() - birth.getFullYear();
      
      setTimeout(() => {
        onComplete({
          name,
          birthDate,
          age,
          month: birth.toLocaleString('default', { month: 'long' }),
          day: birth.getDate(),
          year: birth.getFullYear(),
          zodiac: '♏ Scorpio',
          birthstone: 'Topaz',
          formattedDate: birth.toLocaleDateString('en-US', { 
            month: 'long', day: 'numeric', year: 'numeric' 
          })
        });
      }, 1500);
    }
  };

  return (
    <div className="luxury-entry">
      {showConfetti && <div className="simple-confetti">🎉 🎊 ✨</div>}
      
      <div className="luxury-card">
        <div className="card-header">
          <h1 className="glitch-title"> SOMETHING</h1>
          <p className="subtitle">Your Majesty's Special Day Awaits</p>
        </div>

        <div className="step-indicator">
          {[1, 2, 3].map((num) => (
            <div 
              key={num} 
              className={`step ${step >= num ? 'active' : ''}`}
              onClick={() => {
                if (num === 1) setStep(1);
                else if (num === 2 && name) setStep(2);
                else if (num === 3 && name && birthDate) setStep(3);
              }}
            >
              {num}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="step-content">
            <input
              type="text"
              placeholder="Your Royal Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="luxury-input"
              autoFocus
            />
            <button 
              className="next-btn"
              onClick={handleNext}
              disabled={!name}
            >
              Next →
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="step-content">
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="luxury-input"
              max={new Date().toISOString().split('T')[0]}
              autoFocus
            />
            <div className="button-group">
              <button className="prev-btn" onClick={handlePrev}>← Back</button>
              <button className="next-btn" onClick={handleNext} disabled={!birthDate}>
                Next →
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step-content">
            <h3>Ready to Celebrate, {name}?</h3>
            <div className="preview-details">
              <p>👑 <strong>{name}</strong></p>
              <p>📅 {new Date(birthDate).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</p>
            </div>
            <div className="button-group">
              <button className="prev-btn" onClick={handlePrev}>← Back</button>
              <button className="celebrate-btn" onClick={handleSubmit}>
                Begin Celebration 🎉
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="entry-instructions">
        ✨ Step {step} of 3: {
          step === 1 ? 'Enter your royal name' : 
          step === 2 ? 'Select your birth date' : 
          'Review and celebrate'
        } ✨
      </div>
    </div>
  );
};