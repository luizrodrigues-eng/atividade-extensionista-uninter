export interface Question {
  id: number;
  question: string;
  options: string[];
  /** index of the correct option (0 = A, 1 = B, 2 = C) */
  answer: number;
  explanation: string;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Qual destes materiais deve ser descartado na lixeira AZUL da coleta seletiva?",
    options: ["Metais e latas", "Papel e papelão", "Vidros e garrafas"],
    answer: 1,
    explanation: "A lixeira azul é destinada ao papel e papelão, como cadernos, jornais e caixas.",
  },
  {
    id: 2,
    question: "Qual atitude ajuda a economizar água no dia a dia?",
    options: [
      "Tomar banhos bem demorados",
      "Lavar a calçada com mangueira",
      "Fechar a torneira enquanto ensaboa a louça",
    ],
    answer: 2,
    explanation: "Fechar a torneira enquanto ensaboa a louça evita o desperdício de litros de água.",
  },
  {
    id: 3,
    question: "Qual destas é uma fonte de energia limpa e renovável?",
    options: ["Carvão mineral", "Petróleo", "Energia solar"],
    answer: 2,
    explanation: "A energia solar vem do sol, é renovável e não polui o meio ambiente.",
  },
  {
    id: 4,
    question: "O que significa a política dos 3 R's da sustentabilidade?",
    options: [
      "Repor, Regar, Recolher",
      "Reduzir, Reutilizar, Reciclar",
      "Reformar, Repintar, Repetir",
    ],
    answer: 1,
    explanation: "Os 3 R's são Reduzir, Reutilizar e Reciclar — pilares do consumo consciente.",
  },
  {
    id: 5,
    question: "Qual meio de transporte NÃO polui o meio ambiente?",
    options: ["Bicicleta", "Carro a gasolina", "Motocicleta"],
    answer: 0,
    explanation: "A bicicleta não emite poluentes e ainda faz bem para a saúde.",
  },
  {
    id: 6,
    question: "Onde devemos descartar pilhas e baterias usadas?",
    options: [
      "No lixo comum de casa",
      "Na pia ou no vaso sanitário",
      "Em pontos de coleta específicos",
    ],
    answer: 2,
    explanation: "Pilhas e baterias têm metais tóxicos e precisam ir a pontos de coleta específicos.",
  },
  {
    id: 7,
    question: "Qual é uma das principais consequências do desmatamento?",
    options: [
      "Aumento da quantidade de chuvas",
      "Mais alimentos para todos",
      "Perda de habitat natural para os animais e plantas",
    ],
    answer: 2,
    explanation: "O desmatamento destrói o habitat de animais e plantas, ameaçando a biodiversidade.",
  },
  {
    id: 8,
    question: "Para que serve a compostagem?",
    options: [
      "Para queimar o lixo da cidade",
      "Para produzir mais plástico",
      "Para transformar lixo orgânico em adubo",
    ],
    answer: 2,
    explanation: "A compostagem transforma restos orgânicos em adubo natural para as plantas.",
  },
  {
    id: 9,
    question: "Qual tipo de lâmpada consome MENOS energia elétrica?",
    options: ["Lâmpada incandescente", "Lâmpada de LED", "Lâmpada halógena"],
    answer: 1,
    explanation: "A lâmpada de LED ilumina gastando muito menos energia e dura mais tempo.",
  },
  {
    id: 10,
    question: "Como podemos reduzir o uso de sacolas plásticas nas compras?",
    options: [
      "Pedindo mais sacolas no caixa",
      "Usando duas sacolas por item",
      "Levar suas próprias sacolas de pano ou ecobags",
    ],
    answer: 2,
    explanation: "Levar sacolas de pano ou ecobags reduz muito o consumo de plástico descartável.",
  },
];