import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const GlitchText = ({ text, className }) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`glitch-container ${className || ''}`}>
      <motion.div
        className="glitch-layer"
        animate={glitch ? {
          x: [-2, 2, -2],
          skew: ['0deg', '5deg', '-5deg', '0deg'],
          opacity: [1, 0.8, 1]
        } : {}}
        transition={{ duration: 0.2 }}
      >
        {text}
      </motion.div>
      {glitch && (
        <>
          <motion.div
            className="glitch-layer red"
            initial={{ x: 0 }}
            animate={{ x: [-5, 5, -5] }}
            transition={{ duration: 0.1 }}
          >
            {text}
          </motion.div>
          <motion.div
            className="glitch-layer blue"
            initial={{ x: 0 }}
            animate={{ x: [5, -5, 5] }}
            transition={{ duration: 0.1 }}
          >
            {text}
          </motion.div>
        </>
      )}
    </div>
  );
};