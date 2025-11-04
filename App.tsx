
import React, { useState, useMemo } from 'react';
import { QUIZ_QUESTIONS } from './constants';
import type { Question } from './types';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import ScoreScreen from './components/ScoreScreen';

const App: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>(() => [...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);
  const isCorrect = selectedAnswerIndex === currentQuestion?.correctAnswerIndex;

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswerIndex(answerIndex);
    setIsAnswered(true);
    if (answerIndex === currentQuestion.correctAnswerIndex) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswerIndex(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuestions([...QUIZ_QUESTIONS].sort(() => Math.random() - 0.5));
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
    setQuizFinished(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-cyan-400">Revisão de Gestão Estratégica</h1>
        
        {quizFinished ? (
          <ScoreScreen score={score} totalQuestions={questions.length} onRestart={handleRestartQuiz} />
        ) : (
          <>
            <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
            <QuestionCard 
              question={currentQuestion}
              selectedAnswerIndex={selectedAnswerIndex}
              isAnswered={isAnswered}
              isCorrect={isCorrect}
              onAnswerSelect={handleAnswerSelect}
            />

            {isAnswered && (
              <div className="flex flex-col items-center space-y-4">
                <div className={`w-full p-4 rounded-lg ${isCorrect ? 'bg-green-900/50 border-green-500' : 'bg-red-900/50 border-red-500'} border`}>
                  <p className="font-bold text-lg mb-2">{isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta!'}</p>
                  <p className="text-gray-300">{currentQuestion.explanation}</p>
                </div>
                <button
                  onClick={handleNextQuestion}
                  className="w-full md:w-auto px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>Desenvolvido para fins educacionais.</p>
      </footer>
    </div>
  );
};

export default App;
