'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const questions = [
  {
    question: "What's your preferred taste profile?",
    options: [
      { text: "Light and delicate", tea: "White Tea" },
      { text: "Fresh and grassy", tea: "Green Tea" },
      { text: "Rich and bold", tea: "Black Tea" },
      { text: "Complex and floral", tea: "Oolong Tea" },
    ],
  },
  {
    question: "When do you usually enjoy tea?",
    options: [
      { text: "Morning pick-me-up", tea: "Black Tea" },
      { text: "Afternoon relaxation", tea: "Oolong Tea" },
      { text: "Evening wind-down", tea: "Herbal Tea" },
      { text: "Anytime", tea: "Green Tea" },
    ],
  },
  {
    question: "What's your ideal tea experience?",
    options: [
      { text: "Traditional ceremony", tea: "Matcha" },
      { text: "Quick and convenient", tea: "Black Tea" },
      { text: "Meditative moment", tea: "Oolong Tea" },
      { text: "Social gathering", tea: "Herbal Tea" },
    ],
  },
];

type TeaType = "White Tea" | "Green Tea" | "Black Tea" | "Oolong Tea" | "Herbal Tea" | "Matcha";

const teaRecommendations: Record<TeaType, string> = {
  "White Tea": "Perfect for those who appreciate subtle, delicate flavors. Try our Silver Needle White Tea for a premium experience.",
  "Green Tea": "Ideal for those seeking fresh, invigorating flavors. Our Dragon Well Green Tea offers a perfect balance of sweetness and astringency.",
  "Black Tea": "Great for those who enjoy robust, full-bodied teas. Our Golden Yunnan Black Tea provides rich, malty notes.",
  "Oolong Tea": "Perfect for those who love complex, evolving flavors. Our Tie Guan Yin Oolong offers beautiful floral notes.",
  "Herbal Tea": "Excellent for those seeking caffeine-free options. Our Chamomile & Lavender blend provides perfect relaxation.",
  "Matcha": "Ideal for those who appreciate traditional Japanese tea culture. Our Ceremonial Grade Matcha offers the perfect balance of umami and sweetness.",
};

export default function TeaQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<TeaType[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (tea: TeaType) => {
    const newAnswers = [...answers, tea];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getMostFrequentTea = (): TeaType => {
    const teaCounts = answers.reduce((acc, tea) => {
      acc[tea] = (acc[tea] || 0) + 1;
      return acc;
    }, {} as Record<TeaType, number>);

    return Object.entries(teaCounts).sort((a, b) => b[1] - a[1])[0][0] as TeaType;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-semibold text-center mb-6">Find Your Perfect Tea</h3>

      <AnimatePresence mode="wait">
        {!showResult ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <p className="text-lg text-center text-gray-700">
              {questions[currentQuestion].question}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option) => (
                <motion.button
                  key={option.text}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option.tea as TeaType)}
                  className="p-4 bg-emerald-50 rounded-lg text-emerald-800 hover:bg-emerald-100 transition-colors"
                >
                  {option.text}
                </motion.button>
              ))}
            </div>

            <div className="flex justify-center gap-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentQuestion
                      ? 'bg-emerald-600'
                      : index < currentQuestion
                      ? 'bg-emerald-300'
                      : 'bg-emerald-100'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-center space-y-6"
          >
            <h4 className="text-xl font-semibold text-emerald-800">
              Your Perfect Tea Match
            </h4>
            <p className="text-lg text-gray-700">
              {teaRecommendations[getMostFrequentTea()]}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetQuiz}
              className="btn-primary"
            >
              Take Quiz Again
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 