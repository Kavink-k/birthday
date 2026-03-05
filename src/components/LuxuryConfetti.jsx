import React, { useEffect, useState } from 'react';
import confetti from 'react-confetti';

export const LuxuryConfetti = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Launch multiple confetti patterns
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    
    const colors = {
      gold: '#FFD700',
      rose: '#FF6B6B',
      teal: '#4ECDC4',
      purple: '#9B6B9B',
      peach: '#FFB347'
    };

    const confettiConfigs = [
      { 
        startVelocity: 35, 
        spread: 360, 
        colors: [colors.gold, colors.rose, colors.teal],
        elementCount: 150 
      },
      { 
        startVelocity: 25, 
        spread: 180, 
        colors: [colors.purple, colors.peach, colors.gold],
        elementCount: 100,
        origin: { x: 0.2, y: 0.5 }
      },
      { 
        startVelocity: 25, 
        spread: 180, 
        colors: [colors.teal, colors.rose, colors.gold],
        elementCount: 100,
        origin: { x: 0.8, y: 0.5 }
      }
    ];

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      confettiConfigs.forEach((config) => {
        const particleCount = Math.floor(config.elementCount * (timeLeft / duration));
        
        confetti({
          ...config,
          particleCount,
          origin: config.origin || { x: randomInRange(0.3, 0.7), y: Math.random() - 0.2 }
        });
      });

      // Add some falling stars effect
      if (Math.random() > 0.7) {
        confetti({
          startVelocity: 15,
          spread: 60,
          colors: ['#FFD700', '#FFFFFF'],
          particleCount: 20,
          origin: { x: randomInRange(0.1, 0.9), y: 0 },
          shapes: ['star']
        });
      }
    }, 250);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <confetti.ReactConfetti
      width={windowSize.width}
      height={windowSize.height}
      recycle={false}
      numberOfPieces={500}
      gravity={0.15}
      colors={['#FFD700', '#FF6B6B', '#4ECDC4', '#9B6B9B', '#FFB347']}
      confettiSource={{
        x: 0,
        y: 0,
        w: windowSize.width,
        h: windowSize.height
      }}
      drawShape={ctx => {
        // Custom star shape
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
          const x = Math.cos(angle) * 10;
          const y = Math.sin(angle) * 10;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          
          const innerAngle = angle + (2 * Math.PI) / 10;
          const innerX = Math.cos(innerAngle) * 5;
          const innerY = Math.sin(innerAngle) * 5;
          ctx.lineTo(innerX, innerY);
        }
        ctx.closePath();
        ctx.fill();
      }}
    />
  );
};