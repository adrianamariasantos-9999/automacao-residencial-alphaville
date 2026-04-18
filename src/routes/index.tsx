import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Atlantic | Automação Residencial em Alphaville" },
      {
        name: "description",
        content:
          "Automação residencial de luxo em Alphaville e São Paulo. Iluminação, segurança, áudio, climatização e muito mais.",
      },
      { property: "og:title", content: "Smart Atlantic | Automação Residencial em Alphaville" },
      {
        property: "og:description",
        content: "Transforme sua casa em um ambiente inteligente, seguro e confortável.",
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: "💡",
    title: "Iluminação Inteligente",
    desc: 'Controle intensidade, cor e estado de cada luz. Crie cenas como "Cinema", "Jantar" ou "Leitura", agende desligamentos e simule presença ao viajar. Economia de energia e atmosfera sob medida.',
  },
  {
    icon: "🎵",
    title: "Áudio e Vídeo Multicômodo",
    desc: "Música em qualquer cômodo, com controle individual de volume e fonte. Streaming integrado em todos os televisores, com controle único e intuitivo para uma experiência imersiva.",
  },
  {
    icon: "🛡️",
    title: "Segurança e Monitoramento 24h",
    desc: "Câmeras HD, sensores de movimento, fechaduras inteligentes e alarmes integrados. Notificações instantâneas no celular e visualização remota de qualquer lugar do mundo.",
  },
  {
    icon: "🌡️",
    title: "Climatização Automatizada",
    desc: "Temperatura ideal o tempo todo. Ajuste automático de ar-condicionado e aquecedores conforme programação, presença e clima — máximo conforto com eficiência energética.",
  },
  {
    icon: "🎭",
    title: "Cortinas e Persianas Motorizadas",
    desc: "Abertura programada ao nascer do sol, proteção UV nos horários de pico e controle integrado a cenas. Praticidade com sofisticação.",
  },
  {
    icon: "🚰",
    title: "Irrigação e Piscina Inteligentes",
    desc: "Jardim sempre verde e piscina perfeita sem esforço. Irrigação baseada em umidade e clima, controle de temperatura, filtragem e iluminação da piscina pelo celular.",
  },
];

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5511975596711&text=Venho+pelo+site+Automa%C3%A7%C3%A3o+Residencial+Alphaville+LOV+Tenho+Duvidas+e+preciso+de+um+or%C3%A7amento+Podemos+Conversar?";

const testimonials = [
  {
    name: "Ricardo Almeida",
    location: "Alphaville Residencial 10",
    text: "Instalaram automação completa na minha casa. Iluminação, cortinas e segurança funcionando perfeitamente. Equipe extremamente profissional e atenciosa!",
  },
  {
    name: "Camila Furlan",
    location: "Tamboré, Santana de Parnaíba",
    text: "Projeto impecável de áudio multicômodo e cinema. A Smart Atlantic superou todas as expectativas. Recomendo de olhos fechados para os vizinhos do condomínio.",
  },
  {
    name: "Eduardo Vasconcelos",
    location: "Alphaville Burle Marx",
    text: "Climatização e piscina inteligente transformaram minha rotina. Suporte rápido e instalação limpa. Melhor empresa de automação da região, sem dúvida.",
  },
];

const WhatsappButton = ({ className = "" }: { className?: string }) => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-[oklch(0.35_0.12_150)] px-8 py-4 font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[oklch(0.30_0.13_150)] hover:shadow-xl ${className}`}
  >
    💬 Orçamento pelo WhatsApp - Clique Aqui
  </a>
);

const Stars = () => (
  <div className="mb-3 flex gap-1 text-xl text-accent" aria-label="5 estrelas">
    {"★★★★★"}
  </div>
);

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <nav className="mx-auto flex w-[90%] max-w-6xl items-center justify-between py-4">
          <div className="text-2xl font-bold text-accent">Smart Atlantic</div>
          <ul className="hidden gap-8 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-medium transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="px-4 py-24 text-center text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold drop-shadow-md md:text-6xl">
            Automação Residencial em Alphaville 🏡
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
            Transforme sua casa em um ambiente inteligente, seguro e confortável com a mais alta
            tecnologia. Moradores de Alphaville e região descobrem o verdadeiro luxo da automação.
          </p>
          <a
            href="https://www.smartatlanticsbr.com.br/automacao-residencial-em-alphaville/"
            className="inline-block rounded-full bg-accent px-8 py-3 font-bold text-primary transition-all hover:-translate-y-1 hover:brightness-110"
            style={{ boxShadow: "var(--shadow-cta)" }}
          >
            Descubra Nossas Soluções
          </a>
          <div className="mt-6 flex justify-center">
            <WhatsappButton />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-card px-4 py-16 text-center">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-semibold text-primary md:text-4xl">
            Bem-vindo ao Futuro da Sua Casa
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Na <strong className="text-foreground">Smart Atlantic</strong>, somos especialistas em
            levar a sofisticação e a praticidade da automação residencial para os lares mais
            exigentes de{" "}
            <strong className="text-foreground">
              Alphaville, São Paulo e região metropolitana
            </strong>
            . Imagine controlar iluminação, climatização, segurança, áudio e vídeo com um simples
            toque no smartphone ou comando de voz. Nossa{" "}
            <a
              href="https://www.smartatlanticsbr.com.br/automacao-residencial-sao-paulo/"
              className="font-bold text-primary underline-offset-4 hover:underline"
            >
              Empresa de Automação Residencial
            </a>{" "}
            é pioneira em integrar os melhores sistemas do mercado.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-secondary px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-5xl">
            Nossos Serviços de Automação Residencial ✨
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group overflow-hidden rounded-xl bg-card transition-all duration-300 hover:-translate-y-2"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="pt-6 text-center text-5xl">{s.icon}</div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-semibold text-primary">{s.title}</h3>
                  <p className="text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground">
            Explore mais sobre nossa expertise em{" "}
            <a
              href="https://www.smartatlanticsbr.com.br/"
              className="font-bold text-primary underline-offset-4 hover:underline"
            >
              Automação Residencial
            </a>{" "}
            e como podemos transformar a sua casa.
          </p>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-card px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary md:text-5xl">
            O Que Nossos Clientes em Alphaville Dizem 💬
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="flex flex-col rounded-xl bg-secondary p-6"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <Stars />
                <p className="mb-6 flex-1 italic text-foreground">"{t.text}"</p>
                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.location}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <WhatsappButton />
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        id="contato"
        className="px-4 py-20 text-center text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Pronto para Viver a Experiência Smart Home? 🚀
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Entre em contato conosco e agende uma visita para um projeto personalizado. Leve o
            futuro para sua casa em Alphaville hoje mesmo.
          </p>
          <a
            href="https://www.smartatlanticsbr.com.br/automacao-residencial-em-alphaville/"
            className="inline-block rounded-full bg-accent px-8 py-3 font-bold text-primary transition-all hover:-translate-y-1 hover:brightness-110"
            style={{ boxShadow: "var(--shadow-cta)" }}
          >
            Solicitar Orçamento
          </a>
          <p className="mt-8 text-sm">
            Parceiros: Conheça também nossos serviços de{" "}
            <a href="https://www.fernandocoutinho.com" className="text-accent hover:underline">
              Agência de SEO em São Paulo
            </a>{" "}
            para maximizar sua presença digital.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary px-4 py-12 text-primary-foreground">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-2">
            <a
              href="https://www.smartatlanticsbr.com.br/automacao-residencial-em-alphaville/"
              className="text-muted opacity-80 transition-colors hover:text-accent"
            >
              Automação Residencial em Alphaville
            </a>
            <a
              href="https://www.smartatlanticsbr.com.br/"
              className="opacity-80 transition-colors hover:text-accent"
            >
              Página Inicial - Smart Atlantic
            </a>
            <a
              href="https://www.smartatlanticsbr.com.br/automacao-residencial-sao-paulo/"
              className="opacity-80 transition-colors hover:text-accent"
            >
              Empresa de Automação Residencial
            </a>
            <a
              href="https://www.fernandocoutinho.com"
              className="opacity-80 transition-colors hover:text-accent"
            >
              Agência de SEO em São Paulo
            </a>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-sm opacity-70">
            &copy; 2023 Smart Atlantic. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
