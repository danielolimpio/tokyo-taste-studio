import sushi from "@/assets/recipe-sushi.webp";
import ramen from "@/assets/recipe-ramen.webp";
import tempura from "@/assets/recipe-tempura.webp";
import katsu from "@/assets/recipe-katsu.webp";
import miso from "@/assets/recipe-miso.webp";
import yakitori from "@/assets/recipe-yakitori.webp";
import chirashi from "@/assets/recipe-chirashi.webp";
import takoyaki from "@/assets/recipe-takoyaki.webp";
import mochi from "@/assets/recipe-mochi.webp";

export type Recipe = {
  slug: string;
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  cuisine: string;
  difficulty: string;
  servings: string;
  prep: string;
  cook: string;
  calories: string;
  excerpt: string;
  ingredients: string[];
  directions: string[];
  notes: string[];
};

export const recipes: Recipe[] = [
  {
    slug: "sushi-variado-tradicional",
    title: "Sushi Variado Tradicional com Salmão e Atum",
    category: "Sushi",
    image: sushi,
    author: "Akira",
    date: "10 de Junho, 2026",
    cuisine: "Japonesa",
    difficulty: "Médio",
    servings: "4 porções",
    prep: "40 min",
    cook: "20 min",
    calories: "320 kcal",
    excerpt:
      "Uma seleção autêntica de nigiri e maki preparada com arroz shari na medida certa, peixes frescos e o equilíbrio perfeito entre o ácido do vinagre e a maciez do peixe.",
    ingredients: [
      "Arroz para sushi (shari) — 2 xícaras",
      "Vinagre de arroz — 60 ml",
      "Salmão fresco grau sashimi — 200 g",
      "Atum fresco grau sashimi — 200 g",
      "Folhas de nori — 4 unidades",
      "Wasabi, gengibre em conserva e shoyu a gosto",
    ],
    directions: [
      "Lave o arroz até a água sair clara e cozinhe na proporção 1:1 com tampa fechada por 18 minutos.",
      "Tempere o arroz quente com a mistura de vinagre, açúcar e sal, abanando até ficar brilhante.",
      "Corte o peixe em fatias finas no sentido contrário das fibras com faca bem afiada.",
      "Modele os nigiri pressionando levemente o arroz e cobrindo com a fatia de peixe.",
      "Sirva imediatamente com wasabi, gengibre em conserva e shoyu.",
    ],
    notes: [
      "Use sempre peixe de procedência confiável, grau sashimi, mantido refrigerado até o preparo.",
      "Molhe as mãos em água com vinagre antes de moldar o arroz para evitar que grude.",
    ],
  },
  {
    slug: "ramen-tonkotsu-caseiro",
    title: "Ramen Tonkotsu Caseiro com Chashu e Ovo Marinado",
    category: "Ramen",
    image: ramen,
    author: "Akira",
    date: "08 de Junho, 2026",
    cuisine: "Japonesa",
    difficulty: "Difícil",
    servings: "2 porções",
    prep: "30 min",
    cook: "8 horas",
    calories: "680 kcal",
    excerpt:
      "Caldo leitoso de osso de porco cozido por horas, macarrão al dente, chashu derretendo na boca e ajitsuke tamago perfeito.",
    ingredients: [
      "Ossos de porco — 1 kg",
      "Barriga de porco para chashu — 500 g",
      "Macarrão para ramen — 200 g",
      "Ovos — 2 unidades",
      "Shoyu, mirin e missô a gosto",
      "Cebolinha, alga nori e brotos para finalizar",
    ],
    directions: [
      "Branqueie os ossos, escorra e cozinhe em fogo alto com água por no mínimo 8 horas.",
      "Marine a barriga em shoyu, mirin e açúcar e cozinhe lentamente até desfiar.",
      "Cozinhe os ovos por 6 min 30 s e marine no mesmo tare por 4 horas.",
      "Cozinhe o macarrão por 1 minuto a menos do que indica a embalagem.",
      "Monte a tigela: tare no fundo, caldo bem quente, macarrão e finalizações.",
    ],
    notes: [
      "O caldo precisa ferver constantemente para ficar branco e cremoso.",
      "Resfrie o ovo imediatamente em água gelada para parar a cocção e facilitar descascar.",
    ],
  },
  {
    slug: "tempura-de-camarao-crocante",
    title: "Tempura de Camarão e Vegetais Super Crocante",
    category: "Frituras",
    image: tempura,
    author: "Mei",
    date: "05 de Junho, 2026",
    cuisine: "Japonesa",
    difficulty: "Fácil",
    servings: "3 porções",
    prep: "15 min",
    cook: "12 min",
    calories: "420 kcal",
    excerpt:
      "A massa leve como nuvem é o segredo: água gelada, farinha gelada e movimentos rápidos para uma fritura impecável.",
    ingredients: [
      "Camarões grandes limpos — 12 unidades",
      "Farinha de trigo gelada — 1 xícara",
      "Água com gás gelada — 1 xícara",
      "1 gema de ovo",
      "Vegetais (abobrinha, batata-doce, shitake)",
      "Óleo para fritar e tentsuyu para servir",
    ],
    directions: [
      "Faça cortes na barriga do camarão para que não enrole na fritura.",
      "Misture rapidamente a gema, a água gelada e a farinha — deixe alguns grumos.",
      "Aqueça o óleo a 175 °C e frite em pequenas porções por 2 minutos.",
      "Escorra em grelha (nunca papel) e sirva imediatamente com o molho.",
    ],
    notes: [
      "Trabalhe com a massa muito fria — coloque a tigela sobre outra com gelo.",
      "Não mexa demais para a tempura ficar leve e crocante.",
    ],
  },
  {
    slug: "chicken-katsu-curry",
    title: "Chicken Katsu Curry com Arroz Japonês",
    category: "Pratos",
    image: katsu,
    author: "Mei",
    date: "02 de Junho, 2026",
    cuisine: "Japonesa",
    difficulty: "Médio",
    servings: "4 porções",
    prep: "20 min",
    cook: "35 min",
    calories: "720 kcal",
    excerpt:
      "Frango empanado em panko dourado servido sobre arroz com molho curry encorpado, levemente adocicado e profundamente reconfortante.",
    ingredients: [
      "Peito de frango — 4 filés",
      "Farinha panko — 2 xícaras",
      "Tabletes de curry japonês — 1 caixa",
      "Cebola, cenoura e batata",
      "Arroz japonês cozido para servir",
      "Ovos e farinha para empanar",
    ],
    directions: [
      "Refogue cebola, cenoura e batata, cubra com água e cozinhe por 15 min.",
      "Desligue o fogo e dissolva os tabletes de curry mexendo bem.",
      "Empane o frango passando em farinha, ovo e panko.",
      "Frite por 4 min de cada lado até dourar e descansar antes de fatiar.",
      "Sirva sobre o arroz com o curry quente por cima.",
    ],
    notes: ["Bata o filé entre filmes para uma cocção uniforme."],
  },
  {
    slug: "sopa-de-missô-classica",
    title: "Sopa de Missô Clássica com Tofu e Wakame",
    category: "Sopas",
    image: miso,
    author: "Akira",
    date: "30 de Maio, 2026",
    cuisine: "Japonesa",
    difficulty: "Fácil",
    servings: "4 porções",
    prep: "5 min",
    cook: "10 min",
    calories: "90 kcal",
    excerpt:
      "Um cumprimento líquido da culinária japonesa: dashi delicado, missô equilibrado e ingredientes que respeitam a estação.",
    ingredients: [
      "Dashi (água, kombu e katsuobushi) — 1 L",
      "Missô branco — 3 colheres de sopa",
      "Tofu macio em cubos — 200 g",
      "Wakame seca hidratada — 1 colher",
      "Cebolinha picada para finalizar",
    ],
    directions: [
      "Aqueça o dashi sem deixar ferver.",
      "Dissolva o missô em uma concha do caldo morno antes de incorporar.",
      "Adicione o tofu e a wakame e desligue o fogo após 1 minuto.",
      "Sirva imediatamente coberto de cebolinha.",
    ],
    notes: ["Nunca ferva a sopa depois de adicionar o missô — perde aroma e probióticos."],
  },
  {
    slug: "yakitori-de-frango-com-tare",
    title: "Yakitori de Frango com Molho Tare Caramelizado",
    category: "Grelhados",
    image: yakitori,
    author: "Akira",
    date: "26 de Maio, 2026",
    cuisine: "Japonesa",
    difficulty: "Médio",
    servings: "4 porções",
    prep: "20 min",
    cook: "15 min",
    calories: "310 kcal",
    excerpt:
      "Espetinhos grelhados na brasa, pincelados com tare brilhante até criar uma casca levemente caramelizada.",
    ingredients: [
      "Coxa de frango desossada — 600 g",
      "Cebolinha japonesa (negi) — 4 talos",
      "Shoyu, mirin, saquê e açúcar para o tare",
      "Espetinhos de bambu hidratados",
    ],
    directions: [
      "Reduza o tare em fogo baixo até ficar brilhante e encorpado.",
      "Monte os espetinhos alternando frango e cebolinha.",
      "Grelhe primeiro sem molho, depois pincele e finalize.",
      "Sirva com sansho ou shichimi togarashi.",
    ],
    notes: ["A cada camada de molho, deixe formar uma leve crosta antes de pincelar de novo."],
  },
  {
    slug: "chirashi-sushi-colorido",
    title: "Chirashi Sushi Colorido com Salmão e Atum",
    category: "Sushi",
    image: chirashi,
    author: "Mei",
    date: "22 de Maio, 2026",
    cuisine: "Japonesa",
    difficulty: "Fácil",
    servings: "2 porções",
    prep: "25 min",
    cook: "20 min",
    calories: "540 kcal",
    excerpt:
      "Tigela festiva onde os peixes são protagonistas sobre uma cama macia de arroz temperado — celebração em forma de prato.",
    ingredients: [
      "Arroz para sushi temperado — 2 xícaras",
      "Salmão, atum e peixe branco em cubos — 250 g",
      "Tamagoyaki em fatias",
      "Pepino, abacate e ikura",
      "Shoyu e wasabi para acompanhar",
    ],
    directions: [
      "Disponha o arroz ainda morno em uma tigela funda.",
      "Distribua os peixes em leques sobre o arroz.",
      "Finalize com ikura, tamagoyaki e ervas frescas.",
    ],
    notes: ["Sirva o arroz à temperatura ambiente para realçar a textura."],
  },
  {
    slug: "takoyaki-de-polvo",
    title: "Takoyaki de Polvo com Molho e Bonito",
    category: "Petiscos",
    image: takoyaki,
    author: "Mei",
    date: "18 de Maio, 2026",
    cuisine: "Japonesa",
    difficulty: "Médio",
    servings: "4 porções",
    prep: "20 min",
    cook: "15 min",
    calories: "390 kcal",
    excerpt:
      "Bolinhas douradas e cremosas por dentro, finalizadas com molho takoyaki, maionese japonesa e flocos de bonito dançando no calor.",
    ingredients: [
      "Massa de takoyaki (farinha, ovos, dashi)",
      "Polvo cozido em cubos pequenos — 200 g",
      "Cebolinha picada e gengibre em conserva",
      "Molho takoyaki, kewpie e katsuobushi",
    ],
    directions: [
      "Aqueça bem a chapa de takoyaki e unte com óleo.",
      "Despeje a massa preenchendo todo o nicho e adicione recheio.",
      "Vire em 90° quando a borda firmar e finalize girando até dourar.",
      "Sirva com molhos e bonito por cima.",
    ],
    notes: ["A virada é o ritual: paciência forma o formato perfeito."],
  },
  {
    slug: "mochi-dango-tradicional",
    title: "Mochi Dango com Matcha e Anko",
    category: "Doces",
    image: mochi,
    author: "Akira",
    date: "14 de Maio, 2026",
    cuisine: "Japonesa",
    difficulty: "Fácil",
    servings: "6 porções",
    prep: "15 min",
    cook: "20 min",
    calories: "180 kcal",
    excerpt:
      "Bolinhos macios de arroz glutinoso em três cores: matcha, anko e baunilha — pequenos pedaços de Japão para a hora do chá.",
    ingredients: [
      "Farinha de arroz glutinoso (mochiko) — 200 g",
      "Açúcar refinado — 80 g",
      "Água quente — 180 ml",
      "Matcha em pó e pasta de feijão anko",
    ],
    directions: [
      "Misture mochiko, açúcar e água até formar uma massa lisa.",
      "Cozinhe no vapor por 20 min, mexendo na metade.",
      "Divida em três e incorpore matcha em uma parte.",
      "Modele as bolinhas e monte nos espetinhos.",
    ],
    notes: ["Trabalhe com as mãos levemente untadas para a massa não grudar."],
  },
];

export const findRecipe = (slug: string) => recipes.find((r) => r.slug === slug);
