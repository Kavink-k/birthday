import React, { useState, useEffect } from 'react';

export const FinalCelebration = ({ userData }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Beautiful birthday images array
  const birthdayImages = [
    {
      url: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=1200",
      caption: "Birthday Magic"
    },
    {
      url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1200",
      caption: "Celebration Time"
    },
    {
      url: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200", 
      caption: "Happy Birthday"
    },
    {
      url: "https://images.unsplash.com/photo-1513201099705-a34b89916397?w=1200",
      caption: "Party Time"
    },
    {
      url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200",
      caption: "Celebrate"
    }
  ];

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 500);
    
    // Rotate images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % birthdayImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Simple confetti effect
  const Confetti = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffd700', '#ff99c8', '#a3c4f3'];
    
    return (
      <div className="confetti-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: `${Math.random() * 100}%`,
              backgroundColor: colors[Math.floor(Math.random() * colors.length)],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              width: `${8 + Math.random() * 8}px`,
              height: `${15 + Math.random() * 10}px`,
              opacity: 0.7
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="final-celebration">
      <Confetti />
      
      {/* Background Image with Overlay */}
      <div 
        className="celebration-background"
        style={{
          backgroundImage: `url(${birthdayImages[currentImage].url})`,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
          zIndex: 0
        }}
      >
        {/* Dark overlay for better text readability */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(3px)'
        }} />
        
        {/* Image caption */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.8rem',
          zIndex: 2
        }}>
          {birthdayImages[currentImage].caption}
        </div>
      </div>
      
      <div className="celebration-stage">
        <div className="celebration-content">
          {/* Crown Animation */}
          <div className="crown-wrapper">
            <span className="crown-gold">👑</span>
          </div>

          {/* Birthday Title */}
          <h1 className="celebration-title">
            Happy Birthday, <span className="glow-text">{userData?.name || 'Friend'}</span>!
          </h1>

          {/* Age Display */}
          <div className="age-display">
            <div className="age-number">{userData?.age || '🎂'}</div>
            <div className="age-label">Years of Awesomeness</div>
          </div>

          {/* Zodiac & Birthstone Info */}
          {userData && (
            <div className="birth-info">
              <div className="info-item">
                <span className="info-icon">⭐</span>
                <span>{userData.zodiac || '✨'}</span>
              </div>
              <div className="info-item">
                <span className="info-icon">💎</span>
                <span>{userData.birthstone || '💎'}</span>
              </div>
            </div>
          )}

          {/* Birthday Message with Photo Background */}
          {showMessage && (
            <div className="birthday-message-box">
              <div 
                className="message-background"
                style={{
                  backgroundImage: `url(${birthdayImages[(currentImage + 1) % birthdayImages.length].url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0.2,
                  zIndex: 0
                }}
              />
              <p className="poetic-message">
                Another year around the sun,<br />
                Another journey just begun.<br />
                {userData?.name || 'You'}, you're a shining star,<br />
                Amazing just the way you are!<br />
                <span className="heart-emoji">❤️</span>
              </p>
            </div>
          )}

          {/* Share Button */}
          <button
            className="share-button"
            onClick={() => {
              const message = `🎂 Happy Birthday ${userData?.name || 'Friend'}! 🎉\n${window.location.href}`;
              if (navigator.share) {
                navigator.share({
                  title: 'Birthday Celebration',
                  text: `Happy Birthday ${userData?.name}!`,
                  url: window.location.href,
                });
              } else {
                alert(`🎂 Happy Birthday ${userData?.name || 'Friend'}! 🎉`);
              }
            }}
          >
            📸 Share the Joy
          </button>
        </div>
      </div>

      {/* Add animation keyframes if not in CSS */}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-20px) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
};