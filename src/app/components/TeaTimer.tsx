'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const teaTypes = [
  { name: 'Green Tea', time: 180 },
  { name: 'Oolong Tea', time: 240 },
  { name: 'Black Tea', time: 300 },
  { name: 'White Tea', time: 180 },
  { name: 'Herbal Tea', time: 300 },
];

export default function TeaTimer() {
  const [selectedTea, setSelectedTea] = useState(teaTypes[0]);
  const [timeLeft, setTimeLeft] = useState(selectedTea.time);
  const [isRunning, setIsRunning] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      setShowNotification(true);
      // Play a gentle sound
      const audio = new Audio('/tea-bell.mp3');
      audio.play();
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setTimeLeft(selectedTea.time);
    setIsRunning(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto"
    >
      <h3 className="text-2xl font-semibold text-center mb-6">Tea Brewing Timer</h3>
      
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {teaTypes.map((tea) => (
            <motion.button
              key={tea.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedTea(tea);
                setTimeLeft(tea.time);
                setIsRunning(false);
              }}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedTea.name === tea.name
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-50 text-emerald-600'
              }`}
            >
              {tea.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="text-center"
          animate={{ scale: isRunning ? [1, 1.02, 1] : 1 }}
          transition={{ duration: 2, repeat: isRunning ? Infinity : 0 }}
        >
          <div className="text-6xl font-bold text-emerald-800 mb-4">
            {formatTime(timeLeft)}
          </div>
        </motion.div>

        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsRunning(!isRunning)}
            className="btn-primary"
          >
            {isRunning ? 'Pause' : 'Start'}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={resetTimer}
            className="btn-secondary"
          >
            Reset
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 right-4 bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            <p>Your tea is ready! 🍵</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowNotification(false)}
              className="text-sm underline mt-1"
            >
              Dismiss
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 