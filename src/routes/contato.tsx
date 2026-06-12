import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageBanner } from "@/components/PageBanner";
import { MapPin, Send, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Comidas Japonesas" },
      { name: "description", content: "Fale com o ComidasJaponesas: sugestões de receitas, parcerias gastronômicas, aulas de sushi e dúvidas sobre culinária japonesa." },
      { name: "keywords", content: "contato comidas japonesas, aulas de culinária japonesa, aula de sushi" },
      { property: "og:title", content: "Contato | Comidas Japonesas" },
      { property: "og:description", content: "Fale com a equipe do blog de culinária japonesa." },

      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),

  component: ContactPage,
});

const FAQ = [
  { q: "Posso enviar uma receita de família?", a: "Sim! Adoramos receber receitas tradicionais. Use o formulário ao lado contando a história do prato e enviaremos uma resposta em até 5 dias." },
  { q: "Vocês oferecem aulas presenciais?", a: "Oferecemos aulas semanais para grupos de até 8 pessoas no nosso espaço no Bairro Liberdade, em São Paulo." },
  { q: "É possível adaptar receitas para dietas especiais?", a: "Muitas das nossas receitas podem ser adaptadas. Escreva para a gente contando suas restrições e indicaremos a melhor versão." },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageBanner
        title="Contato"
        subtitle="Fale com a nossa cozinha. Sugestões, parcerias, dúvidas técnicas — respondemos cada mensagem."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contato" }]}
      />

      {/* Info cards */}
      <section className="mx-auto mt-12 grid max-w-6xl gap-6 px-4 md:grid-cols-3">
        {[
          { Icon: MapPin, title: "Endereço Físico", lines: ["Rua Liberdade, 123", "Bairro Liberdade, São Paulo"] },
          { Icon: Send, title: "E-mail", lines: ["contato@comidasjaponesas.com", "imprensa@comidasjaponesas.com"] },
          { Icon: Phone, title: "Telefones", lines: ["(11) 4002-8922", "(11) 4002-8923"] },
        ].map(({ Icon, title, lines }) => (
          <div key={title} className="rounded-2xl bg-card p-8 text-center shadow-md">
            <Icon className="mx-auto h-10 w-10 text-primary" />
            <h3 className="mt-4 text-base font-extrabold text-ink">{title}</h3>
            {lines.map((l) => (
              <p key={l} className="mt-1 text-sm text-muted-foreground">{l}</p>
            ))}
          </div>
        ))}
      </section>

      {/* FAQ + form */}
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-extrabold text-ink md:text-3xl">Perguntas Frequentes</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            As dúvidas mais comuns sobre o blog, as receitas e nossas aulas presenciais — tudo num
            único lugar.
          </p>
          <div className="mt-8 space-y-3">
            {FAQ.map((item) => <FAQItem key={item.q} {...item} />)}
          </div>
        </div>

        <div className="rounded-2xl bg-card p-8 shadow-lg">
          <h2 className="text-2xl font-extrabold text-ink md:text-3xl">Entre em contato</h2>
          <p className="mt-2 text-sm text-muted-foreground">Resposta em até 48 horas.</p>
          <form className="mt-6 grid gap-4">
            <input placeholder="Nome *" className="rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
            <input type="email" placeholder="E-mail *" className="rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
            <input placeholder="Assunto" className="rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
            <textarea placeholder="Mensagem *" rows={5} className="rounded-md border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
            <button className="w-fit rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
        <span className="text-sm font-bold text-ink">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-primary transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t border-border px-5 pb-5 pt-3 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}
