import { createFileRoute } from "@tanstack/react-router";
import {
  ScrollText,
  UtensilsCrossed,
  Fish,
  Soup,
  Cookie,
  Flame,
  Leaf,
  Sprout,
  Salad,
  Cake,
  Mail,
} from "lucide-react";
import {
  LegalLayout,
  Lead,
  P,
  Badge,
  BulletList,
  InfoCard,
  type LegalSection,
} from "@/components/LegalLayout";

export const Route = createFileRoute("/termos-e-condicoes")({
  head: () => ({
    meta: [
      { title: "Termos e Condições | Comidas Japonesas" },
      {
        name: "description",
        content:
          "Regras de uso do comidasjaponesas.com: propriedade intelectual, receitas enviadas, responsabilidades e limitações.",
      },
      { property: "og:title", content: "Termos e Condições | Comidas Japonesas" },
      {
        property: "og:description",
        content: "Condições de uso do blog de culinária japonesa comidasjaponesas.com.",
      },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/termos-e-condicoes" }],
  }),
  component: TermsPage,
});

const sections: LegalSection[] = [
  {
    id: "aceitacao",
    label: "Aceitação dos Termos",
    icon: ScrollText,
    content: (
      <>
        <Lead>
          Bem-vindo ao <strong>comidasjaponesas.com</strong>. Ao acessar, navegar ou utilizar
          qualquer funcionalidade deste site, você declara ter lido, compreendido e concordado
          integralmente com estes Termos e Condições de Uso.
        </Lead>
        <div>
          <Badge>Vigente</Badge>
          <Badge tone="neutral">Versão 1.0</Badge>
          <Badge tone="accent">Uso pessoal</Badge>
        </div>
        <P>
          Se você não concorda com qualquer disposição, por favor, não utilize o site. O uso
          continuado implica aceitação de eventuais atualizações destes Termos.
        </P>
      </>
    ),
  },
  {
    id: "objeto",
    label: "Objeto do Serviço",
    icon: UtensilsCrossed,
    content: (
      <>
        <P>
          O <strong>comidasjaponesas.com</strong> é um blog editorial dedicado à culinária
          japonesa: receitas passo a passo, técnicas tradicionais, guias de ingredientes e
          curadoria cultural. Todo o conteúdo tem finalidade informativa e educacional.
        </P>
        <InfoCard title="Não somos" icon={Fish}>
          um restaurante, um serviço de delivery, uma consultoria nutricional ou um curso
          certificado. As receitas são apresentadas como referência culinária, sem garantia de
          resultado específico.
        </InfoCard>
      </>
    ),
  },
  {
    id: "propriedade",
    label: "Propriedade Intelectual",
    icon: Cookie,
    content: (
      <>
        <P>
          Todo o conteúdo publicado — textos, fotos, ilustrações, ícones, layout, código, marca e
          identidade visual — é protegido pela Lei nº 9.610/98 (Direitos Autorais) e é de
          titularidade exclusiva do comidasjaponesas.com ou licenciado a nós.
        </P>
        <BulletList
          items={[
            "É permitido compartilhar links das páginas em redes sociais e citar trechos curtos com atribuição visível.",
            "É proibido copiar, reproduzir, modificar ou revender total ou parcialmente o conteúdo sem autorização prévia por escrito.",
            "O uso comercial requer contrato formal com a nossa equipe editorial.",
          ]}
        />
      </>
    ),
  },
  {
    id: "receitas-enviadas",
    label: "Receitas Enviadas por Usuários",
    icon: Soup,
    content: (
      <>
        <P>
          Ao enviar uma receita, comentário, foto ou qualquer conteúdo através dos nossos canais,
          você declara ser o autor ou possuir os direitos necessários, e nos concede licença não
          exclusiva, gratuita e mundial para publicar, editar e divulgar o material em nossas
          plataformas e redes.
        </P>
        <InfoCard title="Créditos" icon={Leaf}>
          Sempre que possível, publicamos o nome do autor ao lado da receita. Você pode solicitar a
          remoção do conteúdo a qualquer momento via nosso canal de contato.
        </InfoCard>
      </>
    ),
  },
  {
    id: "conduta",
    label: "Conduta do Usuário",
    icon: Flame,
    content: (
      <>
        <P>Ao utilizar o site, você se compromete a NÃO:</P>
        <BulletList
          items={[
            "Publicar conteúdo ilegal, ofensivo, discriminatório ou que viole direitos de terceiros.",
            "Utilizar robôs, scrapers ou qualquer meio automatizado para extrair conteúdo em massa.",
            "Interferir na segurança, integridade ou performance do site.",
            "Praticar spam, phishing ou engenharia social contra outros usuários.",
          ]}
        />
        <P>
          O descumprimento pode resultar em bloqueio de acesso e responsabilização civil e
          criminal.
        </P>
      </>
    ),
  },
  {
    id: "responsabilidade",
    label: "Limitação de Responsabilidade",
    icon: Salad,
    content: (
      <>
        <P>
          O conteúdo é oferecido "no estado em que se encontra". Embora nossa equipe teste e revise
          as receitas com dedicação, não garantimos que os resultados obtidos por você em casa
          serão idênticos aos nossos.
        </P>
        <BulletList
          items={[
            "Verifique sempre alergias, restrições alimentares e origem dos ingredientes antes de preparar.",
            "Consulte um profissional de saúde para orientações nutricionais individualizadas.",
            "Manuseie facas, fogo e peixes crus com atenção e responsabilidade.",
          ]}
        />
        <P>
          Não nos responsabilizamos por eventuais prejuízos decorrentes do uso indevido das
          receitas ou informações publicadas.
        </P>
      </>
    ),
  },
  {
    id: "links-terceiros",
    label: "Links de Terceiros",
    icon: Sprout,
    content: (
      <>
        <P>
          O site pode conter links para sites de terceiros (fornecedores de ingredientes, canais
          parceiros, redes sociais). Não temos controle sobre o conteúdo dessas páginas e não nos
          responsabilizamos por seus termos, práticas ou disponibilidade.
        </P>
      </>
    ),
  },
  {
    id: "modificacoes",
    label: "Modificações e Encerramento",
    icon: Cake,
    content: (
      <>
        <P>
          Reservamo-nos o direito de atualizar, suspender ou encerrar qualquer funcionalidade,
          conteúdo ou o próprio site a qualquer momento, sem aviso prévio. Alterações substanciais
          nestes Termos serão publicadas nesta página com nova data de atualização.
        </P>
      </>
    ),
  },
  {
    id: "foro",
    label: "Lei Aplicável e Foro",
    icon: Mail,
    content: (
      <>
        <P>
          Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro
          da Comarca de São Paulo/SP para dirimir quaisquer controvérsias, com renúncia expressa a
          qualquer outro, por mais privilegiado que seja.
        </P>
        <div className="mt-4 rounded-xl border border-border bg-gradient-to-br from-primary/10 to-transparent p-5">
          <p className="text-sm">
            <strong className="text-ink">Dúvidas ou sugestões?</strong> Fale com nosso time em{" "}
            <a href="mailto:contato@comidasjaponesas.com" className="text-primary">
              contato@comidasjaponesas.com
            </a>
          </p>
        </div>
      </>
    ),
  },
];

function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Termos"
      title="Termos e Condições de Uso"
      intro="As regras claras que orientam a relação entre você, leitor apaixonado por culinária japonesa, e o comidasjaponesas.com."
      updatedAt="15 de julho de 2026"
      sections={sections}
    />
  );
}
