import React, { useState, useEffect } from 'react';

export const TimeCapsule = ({ userData, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const birth = new Date(userData.birthDate);
      const nextBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
      
      if (now > nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
      }
      
      const diff = nextBirthday - now;
      
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [userData]);

  return (
    <div className="time-capsule">
      <div className="capsule-container">
        <div className="capsule-header">
          <h2>⏳ Time Capsule for {userData.name}</h2>
          <p>Your birthday is coming soon!</p>
        </div>
        
        <div className="countdown-grid">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="countdown-item">
              <div className="countdown-value">{value}</div>
              <div className="countdown-unit">{unit}</div>
            </div>
          ))}
        </div>

        <button className="continue-btn" onClick={onComplete}>
          Open Birthday Portal →
        </button>
      </div>
    </div>
  );
};