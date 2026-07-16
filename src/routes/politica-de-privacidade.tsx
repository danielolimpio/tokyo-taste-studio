import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  UtensilsCrossed,
  Fish,
  Soup,
  Cookie,
  Cake,
  Leaf,
  Flame,
  Salad,
  Sprout,
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

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Comidas Japonesas" },
      {
        name: "description",
        content:
          "Como o comidasjaponesas.com coleta, usa e protege seus dados: cookies, newsletter, direitos LGPD e contato do encarregado.",
      },
      { property: "og:title", content: "Política de Privacidade | Comidas Japonesas" },
      {
        property: "og:description",
        content: "Transparência total sobre dados, cookies e seus direitos LGPD.",
      },
      { name: "robots", content: "index,follow" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: PrivacyPage,
});

const sections: LegalSection[] = [
  {
    id: "introducao",
    label: "Introdução",
    icon: UtensilsCrossed,
    content: (
      <>
        <Lead>
          A sua privacidade é tão importante para nós quanto o frescor do peixe no balcão do
          itamae. Esta Política explica, em linguagem clara, como o{" "}
          <strong>comidasjaponesas.com</strong> coleta, utiliza, armazena e protege as informações
          que você compartilha ao navegar pelo site, se inscrever na newsletter ou enviar uma
          receita.
        </Lead>
        <div>
          <Badge>LGPD</Badge>
          <Badge tone="neutral">Lei nº 13.709/2018</Badge>
          <Badge tone="accent">Transparência</Badge>
        </div>
        <P>
          Ao acessar o site, você concorda com as práticas descritas neste documento. Caso não
          concorde com algum ponto, pedimos que interrompa a navegação e entre em contato com nosso
          Encarregado de Dados pelos canais listados ao final desta página.
        </P>
      </>
    ),
  },
  {
    id: "dados-coletados",
    label: "Dados que Coletamos",
    icon: Fish,
    content: (
      <>
        <P>
          Coletamos apenas o essencial para oferecer uma experiência editorial de qualidade e um
          atendimento cordial — nada de excessos, nada de segredos.
        </P>
        <InfoCard title="Dados fornecidos por você" icon={ShieldCheck}>
          Nome, e-mail e mensagem quando você utiliza o formulário de contato, envia uma receita ou
          se inscreve na newsletter semanal.
        </InfoCard>
        <InfoCard title="Dados coletados automaticamente" icon={Leaf}>
          Endereço IP, tipo de dispositivo, navegador, páginas visitadas e tempo de permanência —
          informações agregadas usadas para melhorar performance e conteúdo.
        </InfoCard>
      </>
    ),
  },
  {
    id: "uso-dos-dados",
    label: "Como Usamos seus Dados",
    icon: Flame,
    content: (
      <>
        <P>Seus dados são utilizados exclusivamente para:</P>
        <BulletList
          items={[
            "Responder mensagens enviadas pelo formulário de contato.",
            "Enviar a newsletter semanal com novas receitas e conteúdos da culinária japonesa.",
            "Analisar métricas de navegação para melhorar a experiência do usuário.",
            "Cumprir obrigações legais e regulatórias aplicáveis.",
            "Prevenir fraudes, abusos e proteger a integridade do site.",
          ]}
        />
        <P>
          Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins
          comerciais. Ponto final.
        </P>
      </>
    ),
  },
  {
    id: "cookies",
    label: "Cookies e Tecnologias",
    icon: Cookie,
    content: (
      <>
        <P>
          Utilizamos cookies para lembrar preferências, medir audiência e melhorar continuamente a
          navegação. Você pode desativar cookies nas configurações do seu navegador — algumas
          funcionalidades, porém, podem deixar de funcionar corretamente.
        </P>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-secondary/40 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Essenciais</p>
            <p className="mt-1 text-sm text-ink/80">
              Garantem o funcionamento básico do site e a segurança da navegação.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-secondary/40 p-4">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Analíticos</p>
            <p className="mt-1 text-sm text-ink/80">
              Ajudam a entender quais receitas são mais lidas e como melhorar o conteúdo.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "compartilhamento",
    label: "Compartilhamento",
    icon: Salad,
    content: (
      <>
        <P>Poderemos compartilhar dados apenas nas seguintes hipóteses:</P>
        <BulletList
          items={[
            "Com prestadores de serviço (hospedagem, e-mail marketing) sob rígidas obrigações contratuais de confidencialidade.",
            "Para cumprir ordem judicial, requisição de autoridade competente ou obrigação legal.",
            "Em caso de reestruturação societária, sempre preservando os direitos do titular.",
          ]}
        />
      </>
    ),
  },
  {
    id: "direitos",
    label: "Seus Direitos (LGPD)",
    icon: Sprout,
    content: (
      <>
        <P>
          Como titular dos dados, você pode exercer, a qualquer momento e gratuitamente, os
          seguintes direitos:
        </P>
        <BulletList
          items={[
            <><strong>Confirmação e acesso</strong> aos dados que temos sobre você.</>,
            <><strong>Correção</strong> de dados incompletos, inexatos ou desatualizados.</>,
            <><strong>Anonimização, bloqueio ou eliminação</strong> de dados desnecessários.</>,
            <><strong>Portabilidade</strong> a outro fornecedor de serviço.</>,
            <><strong>Revogação do consentimento</strong> a qualquer momento.</>,
            <><strong>Oposição</strong> a tratamentos realizados com base em legítimo interesse.</>,
          ]}
        />
        <InfoCard title="Como exercer seus direitos" icon={Mail}>
          Envie um e-mail para{" "}
          <a href="mailto:privacidade@comidasjaponesas.com" className="font-semibold text-primary">
            privacidade@comidasjaponesas.com
          </a>{" "}
          com o assunto <em>"LGPD – Solicitação de Titular"</em>. Responderemos em até 15 dias
          úteis.
        </InfoCard>
      </>
    ),
  },
  {
    id: "seguranca",
    label: "Segurança da Informação",
    icon: Soup,
    content: (
      <>
        <P>
          Adotamos medidas técnicas e administrativas compatíveis com as melhores práticas do
          mercado: criptografia em trânsito (HTTPS/TLS), controle de acesso baseado em função,
          registros de auditoria e monitoramento contínuo.
        </P>
        <P>
          Ainda assim, nenhum sistema é 100% invulnerável. Caso identifique qualquer incidente,
          entre em contato imediatamente para que possamos investigar e mitigar impactos.
        </P>
      </>
    ),
  },
  {
    id: "retencao",
    label: "Retenção e Exclusão",
    icon: Cake,
    content: (
      <>
        <P>
          Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades desta
          Política ou obrigações legais. Após esse período, os dados são anonimizados ou eliminados
          de forma segura.
        </P>
        <BulletList
          items={[
            "Newsletter: até o cancelamento da inscrição.",
            "Formulário de contato: por até 24 meses após o último contato.",
            "Logs de acesso: por 6 meses, conforme Marco Civil da Internet.",
          ]}
        />
      </>
    ),
  },
  {
    id: "contato",
    label: "Encarregado (DPO) e Contato",
    icon: Mail,
    content: (
      <>
        <P>
          Nosso Encarregado pelo Tratamento de Dados Pessoais está disponível para esclarecer
          dúvidas, receber reclamações e atender solicitações relacionadas à LGPD.
        </P>
        <div className="mt-4 rounded-xl border border-border bg-gradient-to-br from-primary/10 to-transparent p-5">
          <p className="text-sm">
            <strong className="text-ink">E-mail:</strong>{" "}
            <a href="mailto:privacidade@comidasjaponesas.com" className="text-primary">
              privacidade@comidasjaponesas.com
            </a>
          </p>
          <p className="mt-1 text-sm">
            <strong className="text-ink">Endereço:</strong> Rua Liberdade, 123 — Bairro Liberdade,
            São Paulo/SP
          </p>
        </div>
        <P>
          Esta Política pode ser atualizada periodicamente. Recomendamos revisitá-la de tempos em
          tempos. Alterações relevantes serão comunicadas com destaque na página inicial.
        </P>
      </>
    ),
  },
];

function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Privacidade"
      title="Política de Privacidade"
      intro="Transparência do primeiro corte ao último grão de arroz: entenda como tratamos seus dados no comidasjaponesas.com."
      updatedAt="15 de julho de 2026"
      sections={sections}
    />
  );
}
