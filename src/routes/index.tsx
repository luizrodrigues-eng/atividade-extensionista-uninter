import { createFileRoute } from "@tanstack/react-router";
import { Leaf, GraduationCap, MapPin } from "lucide-react";
import { Quiz } from "@/components/Quiz";
import heroImg from "@/assets/quiz-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quiz da Sustentabilidade | Escolas de Pindamonhangaba" },
      {
        name: "description",
        content:
          "Quiz interativo de educação ambiental para alunos das escolas estaduais de Pindamonhangaba/SP. Aprenda sobre reciclagem, energia limpa e consumo consciente.",
      },
      { property: "og:title", content: "Quiz da Sustentabilidade" },
      {
        property: "og:description",
        content: "Aprenda sobre sustentabilidade brincando — feito para as escolas estaduais de Pindamonhangaba/SP.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-90"
          style={{ background: "var(--gradient-soft)" }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:py-16 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              <Leaf className="size-4" /> ODS 04 · Educação de Qualidade
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              Quiz da Sustentabilidade
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              Um desafio interativo para alunos das escolas estaduais aprenderem,
              brincando, a cuidar do nosso planeta.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-secondary-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Pindamonhangaba/SP
              </span>
              <span className="inline-flex items-center gap-2">
                <GraduationCap className="size-4 text-primary" /> Escolas Estaduais
              </span>
            </div>
          </div>
          <img
            src={heroImg}
            alt="Estudantes cuidando do meio ambiente: plantando árvores, andando de bicicleta e usando energia solar"
            width={1280}
            height={768}
            className="w-full rounded-3xl shadow-[var(--shadow-eco)]"
          />
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 pb-20">
        <Quiz />
      </main>

      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        Projeto de Educação Ambiental · Objetivo de Desenvolvimento Sustentável 04
      </footer>
    </div>
  );
}
