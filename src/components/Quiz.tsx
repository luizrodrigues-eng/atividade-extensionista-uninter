import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Leaf, RotateCcw, Trophy } from "lucide-react";
import { quizQuestions } from "@/data/quiz";
import { Button } from "@/components/ui/button";

const letters = ["A", "B", "C", "D"];

export function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = quizQuestions.length;
  const q = quizQuestions[current];
  const answered = selected !== null;
  const progress = Math.round(((current + (answered ? 1 : 0)) / total) * 100);

  function choose(index: number) {
    if (answered) return;
    setSelected(index);
    if (index === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (current + 1 < total) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  if (finished) {
    const pct = Math.round((score / total) * 100);
    const message =
      pct >= 80
        ? "Parabéns! Você é um verdadeiro guardião do planeta! 🌎"
        : pct >= 50
          ? "Muito bem! Você já cuida bastante do meio ambiente. 🌱"
          : "Vamos continuar aprendendo a cuidar do nosso planeta! 🌿";
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl bg-card p-8 text-center shadow-[var(--shadow-eco)] sm:p-12"
      >
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-accent/30">
          <Trophy className="size-10 text-accent-foreground" />
        </div>
        <h2 className="mt-6 text-3xl font-bold text-foreground">Quiz concluído!</h2>
        <p className="mt-2 text-muted-foreground">{message}</p>
        <div className="mt-8 rounded-2xl bg-secondary p-6">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Sua pontuação
          </p>
          <p className="mt-1 text-5xl font-extrabold text-primary">
            {score}
            <span className="text-2xl text-muted-foreground"> / {total}</span>
          </p>
          <p className="mt-1 text-lg font-semibold text-success">{pct}% de acertos</p>
        </div>
        <Button onClick={restart} size="lg" className="mt-8 gap-2 rounded-full">
          <RotateCcw className="size-4" /> Jogar novamente
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow-eco)] sm:p-8">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm font-medium text-muted-foreground">
          <span>
            Pergunta {current + 1} de {total}
          </span>
          <span className="flex items-center gap-1 text-success">
            <Leaf className="size-4" /> {score} acertos
          </span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="h-full rounded-full bg-primary"
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.25 }}
        >
          <h2 className="text-xl font-bold leading-snug text-foreground sm:text-2xl">
            {q.question}
          </h2>

          <div className="mt-6 grid gap-3">
            {q.options.map((option, i) => {
              const isCorrect = i === q.answer;
              const isChosen = i === selected;
              let state = "idle";
              if (answered && isCorrect) state = "correct";
              else if (answered && isChosen) state = "wrong";

              return (
                <button
                  key={i}
                  onClick={() => choose(i)}
                  disabled={answered}
                  className={[
                    "flex items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all",
                    state === "idle" &&
                      "border-border bg-background hover:border-primary hover:bg-secondary",
                    state === "correct" && "border-success bg-success/10",
                    state === "wrong" && "border-destructive bg-destructive/10",
                    answered && "cursor-default",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <span
                    className={[
                      "flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                      state === "correct"
                        ? "bg-success text-success-foreground"
                        : state === "wrong"
                          ? "bg-destructive text-destructive-foreground"
                          : "bg-secondary text-secondary-foreground",
                    ].join(" ")}
                  >
                    {state === "correct" ? (
                      <Check className="size-5" />
                    ) : state === "wrong" ? (
                      <X className="size-5" />
                    ) : (
                      letters[i]
                    )}
                  </span>
                  <span className="font-medium text-foreground">{option}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {answered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-5 overflow-hidden"
              >
                <div className="rounded-2xl bg-secondary p-4 text-sm text-secondary-foreground">
                  <span className="font-semibold">
                    {selected === q.answer ? "Correto! " : "Quase lá! "}
                  </span>
                  {q.explanation}
                </div>
                <Button onClick={next} size="lg" className="mt-4 w-full rounded-full sm:w-auto">
                  {current + 1 < total ? "Próxima pergunta" : "Ver resultado"}
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}