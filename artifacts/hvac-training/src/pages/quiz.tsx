import { useState } from "react";
import { quizQuestions } from "@/data/content";
import { useSubmitQuizResult, useGetQuizResults } from "@workspace/api-client-react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, CheckCircle, XCircle } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import confetti from "canvas-confetti";

export default function Quiz() {
  const queryClient = useQueryClient();
  const { data: previousResults } = useGetQuizResults();
  const { mutate: submitResult, isPending } = useSubmitQuizResult();

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = quizQuestions[currentIdx];
  const isCorrect = selectedAnswer === question?.correctIndex;

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);
    if (idx === question.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(c => c + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
    
    // final score uses current score + 1 if last question was correct
    const finalScore = isCorrect ? score + 1 : score;
    const isPassing = (finalScore / quizQuestions.length) >= 0.7;

    if (isPassing) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3b82f6', '#06b6d4', '#10b981']
      });
    }

    submitResult({
      data: {
        quizId: "final_exam",
        quizName: "Final HVAC Assessment",
        score: finalScore,
        totalQuestions: quizQuestions.length
      }
    }, {
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["/api/quiz/results"] })
    });
  };

  return (
    <div className="p-8 md:p-12 max-w-4xl mx-auto h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" /> Assessment
          </h1>
          <p className="text-muted-foreground mt-2">Test your knowledge of the training modules.</p>
          <p className="text-xs text-muted-foreground/60 mt-1">Questions are based on Australian HVAC/R standards and Queensland legislation.</p>
        </div>
        
        {previousResults && previousResults.length > 0 && (
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Previous Best</p>
            <p className="text-lg font-bold text-primary">
              {Math.max(...previousResults.map(r => r.score))} / {previousResults[0].totalQuestions}
            </p>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="w-full glass-panel rounded-3xl p-8 md:p-12 border-primary/20"
            >
              <div className="flex justify-between items-center mb-6 text-sm text-muted-foreground">
                <span className="font-mono">Question {currentIdx + 1} of {quizQuestions.length}</span>
                <span>Score: {score}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-8 text-foreground leading-relaxed">
                {question.question}
              </h2>

              <div className="space-y-4">
                {question.options.map((opt, idx) => {
                  let btnClass = "bg-black/20 border-white/10 hover:border-primary/50 text-gray-200";
                  if (isAnswered) {
                    if (idx === question.correctIndex) {
                      btnClass = "bg-emerald-500/20 border-emerald-500/50 text-emerald-400 font-bold";
                    } else if (idx === selectedAnswer) {
                      btnClass = "bg-destructive/20 border-destructive/50 text-destructive font-bold";
                    } else {
                      btnClass = "opacity-50 bg-black/20 border-white/5";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex justify-between items-center ${btnClass}`}
                    >
                      <span>{opt}</span>
                      {isAnswered && idx === question.correctIndex && <CheckCircle className="w-5 h-5 text-emerald-400" />}
                      {isAnswered && idx === selectedAnswer && idx !== question.correctIndex && <XCircle className="w-5 h-5 text-destructive" />}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 shadow-lg shadow-primary/20 transition-all"
                  >
                    {currentIdx === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-lg glass-panel rounded-3xl p-12 text-center"
            >
              <GraduationCap className="w-20 h-20 mx-auto text-primary mb-6" />
              <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
              <p className="text-muted-foreground mb-8">You answered {score} out of {quizQuestions.length} correctly.</p>
              
              <div className="text-6xl font-display font-bold text-primary mb-8 text-glow">
                {Math.round((score / quizQuestions.length) * 100)}%
              </div>

              {isPending && <p className="text-sm text-muted-foreground animate-pulse">Saving results...</p>}

              <button 
                onClick={() => {
                  setCurrentIdx(0);
                  setScore(0);
                  setIsFinished(false);
                  setIsAnswered(false);
                  setSelectedAnswer(null);
                }}
                className="w-full py-4 rounded-xl bg-card border border-white/10 hover:bg-white/10 transition-colors font-semibold"
              >
                Retake Quiz
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
