import { recipes } from "./recipes";

export type CategoryFAQ = { q: string; a: string };

export type Category = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  keywords: string;
  summary: string;
  items: string[];
  recipeSlugs: string[];
  intro: string[];
  longDescription: string[];
  faq: CategoryFAQ[];
};

export const categories: Category[] = [
  {
    slug: "sushis-e-sashimis",
    name: "Sushis e Sashimis",
    title: "Sushis e Sashimis: Receitas de Culinária Japonesa",
    metaDescription:
      "Aprenda a fazer sushi, sashimi, temaki, hot roll, uramaki, nigiri e hossomaki em casa com receitas japonesas passo a passo, dicas de arroz shari e cortes.",
    keywords:
      "sushi, sashimi, temaki, hot roll, uramaki, nigiri, hossomaki, receita de sushi, como fazer sushi em casa, comida japonesa",
    summary:
      "Reunimos as receitas de sushi e sashimi mais buscadas da culinária japonesa: do nigiri clássico ao temaki cremoso, passando por hot roll, uramaki e hossomaki, com passo a passo detalhado, cortes corretos de peixe e o ponto exato do arroz shari.",
    items: ["Sushi", "Sashimi", "Temaki", "Hot Roll", "Uramaki", "Nigiri", "Hossomaki"],
    recipeSlugs: ["sushi-variado-tradicional", "chirashi-sushi-colorido"],
    intro: [
      "Poucos pratos representam tão bem a culinária japonesa quanto o sushi e o sashimi. Nesta categoria você encontra receitas testadas de sushi caseiro, sashimi de salmão e atum, temaki cremoso, hot roll empanado em panko, uramaki com recheios coloridos, nigiri tradicional e hossomaki finos — todos preparados com técnicas autênticas e ingredientes acessíveis no Brasil.",
    ],
    longDescription: [
      "O universo dos sushis e sashimis é um dos pilares da comida japonesa e também um dos mais pesquisados por quem quer aprender a cozinhar em casa. Cada tipo tem uma técnica própria: o nigiri exige o ponto perfeito do arroz shari e uma fatia de peixe cortada no sentido correto das fibras; o hossomaki é o rolinho fino com um único recheio; o uramaki é o inside-out coberto por gergelim ou ovas; o temaki é o cone crocante de alga nori com recheio farto; o hot roll é a versão empanada e frita, servida bem quente; e o sashimi celebra o peixe puro, sem arroz, apenas com wasabi e shoyu.",
      "Para reproduzir esse resultado em casa, três pilares fazem diferença: peixe grau sashimi de procedência confiável, arroz japonês de grão curto lavado até a água sair clara e o tempero do shari com vinagre de arroz, açúcar e sal na proporção certa. Uma faca bem afiada, uma esteira de bambu (makisu) e uma tigela larga (hangiri ou similar) completam o kit básico. Com esses fundamentos, qualquer receita de sushi ou sashimi desta categoria fica tão bonita quanto as servidas nos melhores restaurantes japoneses de São Paulo.",
      "As receitas aqui vão além do sushi de salmão tradicional. Você aprende a montar combinados variados, chirashi sushi colorido, temaki de kani, hot roll de camarão, uramaki Filadélfia com cream cheese, niguiri de atum e até opções vegetarianas com pepino, abacate e cogumelos. Cada passo a passo traz dicas de corte, temperatura ideal do arroz, ordem de montagem, molhos de acompanhamento e truques para o rolinho não desmanchar. É a forma mais prática de dominar a arte do sushi caseiro sem depender de curso presencial.",
    ],
    faq: [
      {
        q: "Qual a diferença entre sushi e sashimi?",
        a: "O sushi sempre leva arroz temperado (shari), podendo vir em formato de bolinho (nigiri) ou rolinho (maki). O sashimi é apenas o peixe fresco fatiado, servido puro com shoyu e wasabi, sem arroz.",
      },
      {
        q: "Qual peixe usar para fazer sushi em casa?",
        a: "Sempre peixe grau sashimi de fornecedor confiável, mantido refrigerado. Salmão, atum, robalo e vieira são as opções mais comuns. Evite peixes crus de origem desconhecida.",
      },
      {
        q: "Como fazer o arroz de sushi ficar no ponto?",
        a: "Lave o arroz japonês até a água sair transparente, cozinhe na proporção 1:1 com água e tempere ainda quente com vinagre de arroz, açúcar e sal, abanando até ficar brilhante e soltinho.",
      },
      {
        q: "Qual a diferença entre hossomaki, uramaki e temaki?",
        a: "O hossomaki é o rolinho fino com nori por fora e um único recheio. O uramaki é o rolinho invertido, com arroz por fora. O temaki é um cone de alga nori enrolado à mão com recheio farto.",
      },
    ],
  },
  {
    slug: "pratos-quentes",
    name: "Pratos Quentes",
    title: "Pratos Quentes Japoneses: Ramen, Yakisoba, Tempurá e Mais",
    metaDescription:
      "Receitas de pratos quentes da culinária japonesa: ramen tonkotsu, yakisoba, udon, curry japonês, gyoza, tempurá, tonkatsu, okonomiyaki e takoyaki passo a passo.",
    keywords:
      "ramen, lamen, yakisoba, udon, curry japonês, gyoza, tempurá, tonkatsu, okonomiyaki, takoyaki, comida japonesa quente",
    summary:
      "Os pratos quentes mais amados da cozinha japonesa reunidos em um só lugar: ramen tonkotsu cremoso, yakisoba na chapa, udon reconfortante, curry japonês encorpado, gyoza selado, tempurá crocante, tonkatsu suculento, okonomiyaki e takoyaki de festival.",
    items: [
      "Yakisoba",
      "Lámen (Ramen)",
      "Udon",
      "Curry Japonês",
      "Gyoza",
      "Tempurá",
      "Tonkatsu",
      "Okonomiyaki",
      "Takoyaki",
    ],
    recipeSlugs: [
      "ramen-tonkotsu-caseiro",
      "tempura-de-camarao-crocante",
      "chicken-katsu-curry",
      "yakitori-de-frango-com-tare",
      "takoyaki-de-polvo",
    ],
    intro: [
      "Os pratos quentes japoneses são sinônimo de conforto, umami e técnica. Desta categoria fazem parte o ramen tonkotsu de caldo leitoso, o yakisoba puxado na chapa, o udon com caldo dashi, o curry japonês adocicado, o gyoza selado, o tempurá extra crocante, o tonkatsu de porco empanado em panko, o okonomiyaki de Osaka e o takoyaki com pedacinhos de polvo.",
    ],
    longDescription: [
      "Quando o assunto é comida japonesa quente, cada receita carrega uma história regional. O ramen ganhou o mundo com quatro caldos principais — shoyu, missô, shio e tonkotsu — e é hoje um dos pratos japoneses mais pesquisados no Google. O yakisoba nasceu nos festivais de rua com macarrão salteado na chapa e molho tonkatsu adocicado. O udon, com seu macarrão grosso de trigo, é servido em caldo quente no inverno ou gelado no verão. Já o curry japonês, herdado da culinária britânica e reinventado no Japão, virou prato de casa com tabletes de roux, cenoura, batata e carne cozida lentamente.",
      "As frituras japonesas também têm técnica própria. O tempurá exige massa gelada, óleo a 175 °C e fritura em pequenas porções para preservar a leveza. O tonkatsu, filé de porco empanado em panko, é servido em tirinhas sobre repolho fatiado com molho agridoce. O gyoza, primo japonês do jiaozi chinês, é selado por baixo e cozido no vapor por cima, ganhando textura dupla. E o okonomiyaki e o takoyaki, ícones de Osaka, aproximam a comida japonesa da cultura de rua com toppings de katsuobushi, kewpie e molhos escuros.",
      "Nesta categoria você encontra o passo a passo completo para reproduzir esses clássicos em casa: como fazer ramen tonkotsu do zero com ossos de porco, chashu marinado e ovo ajitama; como montar yakisoba de frango na frigideira; como acertar o ponto do curry japonês; como selar gyoza sem grudar; como fritar tempurá crocante sem óleo pesado; e como preparar takoyaki mesmo sem a chapa tradicional. É a base perfeita para qualquer pessoa que quer aprender culinária japonesa de forma prática.",
    ],
    faq: [
      {
        q: "Qual a diferença entre ramen, udon e yakisoba?",
        a: "O ramen é um macarrão fino de trigo alcalino servido em caldo quente e temperado. O udon é um macarrão grosso de trigo, servido em caldo dashi. O yakisoba é macarrão salteado na chapa com legumes, proteína e molho tonkatsu.",
      },
      {
        q: "Qual óleo usar para fritar tempurá?",
        a: "Óleo de soja, canola ou uma mistura com óleo de gergelim funcionam bem. O importante é manter a temperatura entre 170 °C e 180 °C e não sobrecarregar a panela.",
      },
      {
        q: "É difícil fazer gyoza em casa?",
        a: "Não. Você pode comprar as massinhas prontas em mercados orientais, rechear com carne moída e legumes, selar no fundo da frigideira e finalizar com vapor por 5 minutos.",
      },
      {
        q: "O que é curry japonês e como se diferencia do curry indiano?",
        a: "O curry japonês é mais suave, encorpado e levemente adocicado, feito a partir de tabletes de roux. O indiano usa mais especiarias frescas, é mais picante e menos espesso.",
      },
    ],
  },
  {
    slug: "acompanhamentos-e-entradas",
    name: "Acompanhamentos e Entradas",
    title: "Acompanhamentos e Entradas Japonesas: Missoshiru, Sunomono e Mais",
    metaDescription:
      "Receitas de entradas e acompanhamentos da culinária japonesa: missoshiru, sunomono, edamame, onigiri, tamagoyaki, saladas japonesas e conservas tsukemono.",
    keywords:
      "missoshiru, sopa de missô, sunomono, edamame, onigiri, tamagoyaki, salada japonesa, tsukemono, entrada japonesa, acompanhamento japonês",
    summary:
      "Os acompanhamentos e entradas japonesas equilibram qualquer refeição: sopa de missô delicada, sunomono refrescante, edamame no vapor, onigiri para levar, tamagoyaki dobrado em camadas e tsukemono para cortar a gordura.",
    items: [
      "Missoshiru",
      "Sunomono",
      "Edamame",
      "Onigiri",
      "Tamagoyaki",
      "Saladas Japonesas",
      "Conservas (Tsukemono)",
    ],
    recipeSlugs: ["sopa-de-missô-classica"],
    intro: [
      "Nenhuma refeição japonesa completa fica sem acompanhamentos: eles equilibram sabor, textura e temperatura no prato. Nesta categoria estão as receitas essenciais de missoshiru (sopa de missô), sunomono de pepino, edamame no vapor, onigiri (bolinho de arroz), tamagoyaki (omelete japonesa), saladas japonesas e tsukemono (conservas), todas fáceis de preparar em casa.",
    ],
    longDescription: [
      "Na culinária japonesa, o conceito de ichijū-sansai (uma sopa, três acompanhamentos) organiza a refeição em pequenas porções que se complementam. A sopa de missô, ou missoshiru, é a base líquida com dashi, tofu, wakame e cebolinha, servida quente em quase todas as casas do Japão. O sunomono é a saladinha agridoce de pepino em fatias finíssimas com vinagre de arroz, ideal para cortar a gordura de frituras e pratos mais pesados. E o edamame, aquele grão de soja cozido no vapor com flor de sal, virou o petisco favorito para acompanhar cerveja e saquê.",
      "O onigiri é o bolinho de arroz japonês, moldado em triângulos ou bolas e recheado com salmão desfiado, atum com maionese, umeboshi ou katsuobushi. É prático, aguenta bem transporte e faz parte da lancheira japonesa clássica. Já o tamagoyaki é a omelete doce enrolada em camadas, feita em uma frigideira retangular, com sabor equilibrado entre açúcar, shoyu e dashi. Aparece no café da manhã, no bentô e como cobertura de sushi.",
      "As conservas tsukemono e as saladas japonesas completam o cardápio com crocância e acidez. Pepino em conserva, rabanete daikon, gengibre em conserva (gari), acelga com sal e kombu — cada tsukemono tem uma função digestiva e sensorial. As saladas japonesas, como a de algas wakame ou a de repolho fatiado com molho de gergelim, provam que verduras podem ser protagonistas quando bem temperadas. Todas as receitas desta categoria trazem quantidades exatas, dicas de armazenamento e sugestões de combinação com pratos principais.",
    ],
    faq: [
      {
        q: "Como fazer sopa de missô sem ferver o missô?",
        a: "Aqueça o dashi até quase ferver, desligue o fogo e dissolva o missô em uma concha do caldo morno antes de misturar. Ferver o missô destrói aroma, sabor e probióticos.",
      },
      {
        q: "Qual arroz usar para onigiri?",
        a: "Arroz japonês de grão curto (tipo koshihikari) é ideal porque fica pegajoso e mantém o formato. Molhe as mãos em água com sal antes de moldar.",
      },
      {
        q: "Tamagoyaki é doce ou salgado?",
        a: "Existem as duas versões. A mais tradicional (dashimaki) usa dashi e é levemente salgada; a versão para bentô costuma ter mais açúcar e um leve toque de shoyu.",
      },
      {
        q: "Tsukemono é saudável?",
        a: "Sim. As conservas japonesas em geral são pouco processadas, ajudam na digestão e trazem probióticos naturais quando fermentadas em sal ou farelo de arroz.",
      },
    ],
  },
  {
    slug: "sobremesas-japonesas",
    name: "Sobremesas Japonesas",
    title: "Sobremesas Japonesas: Mochi, Dorayaki, Taiyaki e Cheesecake",
    metaDescription:
      "Receitas de sobremesas japonesas: mochi, dorayaki, taiyaki, anmitsu, cheesecake japonês fofinho, daifuku e kakigori para fazer em casa.",
    keywords:
      "sobremesa japonesa, mochi, dorayaki, taiyaki, anmitsu, cheesecake japonês, daifuku, kakigori, doces japoneses",
    summary:
      "As sobremesas japonesas equilibram doçura sutil e texturas surpreendentes: mochi macio, dorayaki recheado, taiyaki em formato de peixinho, anmitsu com gelatina, cheesecake japonês aerado, daifuku e o refrescante kakigori.",
    items: ["Mochi", "Dorayaki", "Taiyaki", "Anmitsu", "Cheesecake Japonês", "Daifuku", "Kakigori"],
    recipeSlugs: ["mochi-dango-tradicional"],
    intro: [
      "As sobremesas japonesas são doces sem exageros — preferem o equilíbrio, a textura e o aroma. Aqui você encontra receitas de mochi tradicional, dorayaki com anko, taiyaki em formato de peixinho, anmitsu com gelatina de ágar-ágar, cheesecake japonês fofinho, daifuku recheado e kakigori de raspadinha para o verão.",
    ],
    longDescription: [
      "Os doces japoneses, conhecidos como wagashi quando são tradicionais, valorizam ingredientes como arroz glutinoso, feijão azuki, matcha e frutas da estação. O mochi é o mais icônico: uma massinha macia e elástica feita de arroz mochigome, servida pura, recheada com anko ou coberta com farinha de kinako. O daifuku é justamente o mochi recheado com pasta de feijão doce, morango ou creme, e virou febre nas confeitarias asiáticas do Brasil.",
      "As sobremesas japonesas modernas também têm seu espaço. O cheesecake japonês fofinho, também chamado de soufflé cheesecake, conquistou o mundo pela textura leve como algodão, resultado de claras batidas em neve e assamento em banho-maria. O dorayaki, dois discos de panqueca recheados com anko, ficou famoso pelo personagem Doraemon. O taiyaki é a versão em formato de peixinho, com massa crocante e recheios que variam de feijão doce a creme, chocolate ou matcha.",
      "Para os dias quentes, o kakigori entra em cena: gelo raspado ultrafino coberto com xaropes de matcha, morango, leite condensado ou frutas. O anmitsu combina cubinhos de gelatina de ágar-ágar (kanten), frutas frescas, sorvete e melado kuromitsu em uma tigela colorida. Cada receita desta categoria vem com dicas para encontrar ingredientes no Brasil, adaptações práticas e explicações sobre a cultura por trás do doce.",
    ],
    faq: [
      {
        q: "O que é anko usado nos doces japoneses?",
        a: "Anko é a pasta doce de feijão azuki, ingrediente base de vários doces japoneses como dorayaki, daifuku e taiyaki. Pode ser lisa (koshian) ou com pedaços (tsubuan).",
      },
      {
        q: "Como o cheesecake japonês fica tão fofo?",
        a: "As claras são batidas em neve e incorporadas delicadamente à massa, e o bolo é assado em banho-maria a temperatura mais baixa, o que garante a textura aerada.",
      },
      {
        q: "Posso fazer mochi sem máquina?",
        a: "Sim. Basta usar farinha de arroz glutinoso (mochiko), açúcar e água, cozinhar no vapor ou no micro-ondas, mexer bem e modelar com as mãos untadas com maisena.",
      },
      {
        q: "Qual a diferença entre mochi e daifuku?",
        a: "Mochi é a massinha em si. Daifuku é o mochi recheado — normalmente com anko, morango ou creme.",
      },
    ],
  },
  {
    slug: "bebidas-e-molhos-japoneses",
    name: "Bebidas e Molhos Japoneses",
    title: "Bebidas e Molhos Japoneses: Matcha, Saquê, Teriyaki e Ponzu",
    metaDescription:
      "Receitas de bebidas e molhos da culinária japonesa: chá verde, matcha, saquê, molho teriyaki, molho ponzu, molho de gergelim e caldos dashi caseiros.",
    keywords:
      "matcha, chá verde japonês, saquê, molho teriyaki, molho ponzu, molho de gergelim, dashi, caldo japonês, bebida japonesa",
    summary:
      "As bebidas e molhos japoneses são a alma da culinária: matcha vibrante, chá verde delicado, saquê equilibrado, molho teriyaki brilhante, ponzu cítrico, molho de gergelim cremoso e dashi como base de tudo.",
    items: [
      "Chá Verde",
      "Matcha",
      "Saquê",
      "Molho Teriyaki",
      "Molho Ponzu",
      "Molho de Gergelim",
      "Caldos e Bases",
    ],
    recipeSlugs: [],
    intro: [
      "Bebidas e molhos são a espinha dorsal da culinária japonesa. O chá verde acompanha refeições e cerimônias; o matcha vira sobremesa, bebida e até tempero; o saquê equilibra pratos salgados; e molhos como teriyaki, ponzu, molho de gergelim e caldo dashi transformam qualquer receita em comida japonesa autêntica.",
    ],
    longDescription: [
      "O chá verde japonês (ryokucha) tem várias faces: sencha do dia a dia, gyokuro sombreado, hojicha tostado e o matcha em pó, batido com chasen no chawan durante a cerimônia do chá. O matcha atravessou fronteiras e virou ingrediente de latte, sorvete, bolo e frappé — mas seu preparo tradicional segue rigoroso, com água a 70-80 °C e movimentos em W para formar a espuma perfeita.",
      "O saquê, ou nihonshu, é uma bebida fermentada de arroz que acompanha tanto pratos leves quanto refeições robustas. Pode ser servido gelado (reishu), à temperatura ambiente ou aquecido (atsukan), dependendo da qualidade e do estilo. É também um ingrediente-chave em marinadas, molhos e caldos, e ajuda a suavizar aromas fortes de proteínas.",
      "Já os molhos e caldos são o que dão identidade à comida japonesa. O teriyaki, mistura brilhante de shoyu, mirin, saquê e açúcar, envolve frango, salmão e legumes com aquele glaze caramelizado. O ponzu combina shoyu com cítricos como yuzu ou limão-siciliano, ideal para sashimi e nabemono. O molho de gergelim, cremoso e levemente adocicado, é o parceiro clássico de saladas e shabu-shabu. E o dashi, feito de kombu e katsuobushi, é o caldo-base que sustenta sopas, molhos, arrozes e cozidos. Nesta categoria você aprende cada preparo do zero, com proporções exatas e dicas de conservação.",
    ],
    faq: [
      {
        q: "Como preparar matcha corretamente?",
        a: "Peneire 1 a 2 colheres de chá de matcha em uma tigela, adicione 60-70 ml de água a cerca de 75 °C e bata com o chasen em movimentos rápidos em forma de W até formar espuma cremosa.",
      },
      {
        q: "Qual a proporção clássica do molho teriyaki caseiro?",
        a: "Uma proporção fácil é 1:1:1:1 de shoyu, mirin, saquê e açúcar, reduzida em fogo baixo até engrossar levemente e ficar brilhante.",
      },
      {
        q: "O que é dashi e como fazer em casa?",
        a: "Dashi é o caldo japonês feito com alga kombu e katsuobushi (flocos de bonito seco). Deixe o kombu de molho na água, aqueça sem ferver, retire, adicione o katsuobushi, desligue o fogo e coe.",
      },
      {
        q: "Saquê é forte como cachaça?",
        a: "Não. O saquê costuma ter entre 14% e 17% de álcool, semelhante a um vinho, com sabor mais suave e delicado.",
      },
    ],
  },
];

export const findCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const recipesForCategory = (slug: string) => {
  const cat = findCategory(slug);
  if (!cat) return [];
  return recipes.filter((r) => cat.recipeSlugs.includes(r.slug));
};
