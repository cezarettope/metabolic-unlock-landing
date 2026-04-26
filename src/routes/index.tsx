import { createFileRoute } from "@tanstack/react-router";
import {
  Flame,
  CheckCircle2,
  ShieldCheck,
  BookOpen,
  Utensils,
  Dumbbell,
  Brain,
  Star,
  Lock,
  Clock,
  TrendingDown,
  Check,
  CheckCheck,
} from "lucide-react";
import expertImg from "@/assets/expert.png";
import dep1 from "@/assets/depoimento-1.png";
import dep2 from "@/assets/depoimento-2.png";
import dep3 from "@/assets/depoimento-3.png";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const UTM =
  "?utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}";

const PLANS = [
  {
    name: "Mentorado Essencial",
    price: "R$ 19,90",
    badge: null,
    url: `https://go.perfectpay.com.br/PPU38CQB260${UTM}`,
    features: [
      "Acesso ao Guia Inicial",
      "Comunidade de apoio",
      "Material de boas-vindas",
    ],
    cta: "QUERO COMEÇAR",
    highlight: false,
  },
  {
    name: "Protocolo Termo Hormonal",
    price: "R$ 37,00",
    badge: "MAIS ESCOLHIDO",
    url: `https://go.perfectpay.com.br/PPU38CQB25T${UTM}`,
    features: [
      "Protocolo Termo Hormonal completo",
      "Direcionamento Alimentar",
      "Treinos de Ativação Metabólica",
      "Mentor Nutricional Inteligente",
      "Bônus exclusivos",
    ],
    cta: "QUERO O PROTOCOLO",
    highlight: true,
  },
  {
    name: "Consulta com o Mentor",
    price: "R$ 29,90",
    badge: "PREMIUM",
    url: `https://go.perfectpay.com.br/PPU38CQB262${UTM}`,
    features: [
      "Atendimento personalizado",
      "Plano sob medida",
      "Acompanhamento próximo",
    ],
    cta: "QUERO ATENDIMENTO",
    highlight: false,
  },
];

const PILLARS = [
  {
    icon: BookOpen,
    title: "Guia Inicial",
    desc: "Passo a passo para destravar seu metabolismo desde o primeiro dia.",
  },
  {
    icon: Utensils,
    title: "Direcionamento Alimentar",
    desc: "O que comer (e o que evitar) para ativar a queima hormonal de gordura.",
  },
  {
    icon: Dumbbell,
    title: "Treinos de Ativação",
    desc: "Movimentos curtos e estratégicos que aceleram o termogênico natural.",
  },
  {
    icon: Brain,
    title: "Mentor Nutricional Inteligente",
    desc: "Tire dúvidas 24h e receba ajustes personalizados em tempo real.",
  },
];

const TESTIMONIALS = [
  {
    name: "Carla M.",
    result: "-12kg em 90 dias",
    photo: dep1,
    time: "09:42",
    messages: [
      { from: "her", text: "Oi!! Preciso te contar 🥹" },
      { from: "her", text: "Eu não conseguia perder NEM 1kg fazendo dieta há 2 anos." },
      { from: "her", text: "Em 3 meses com o protocolo eliminei 12kg e desinchei completamente 😭❤️" },
      { from: "her", text: "Tô usando roupas que estavam guardadas há anos!" },
    ],
  },
  {
    name: "Juliana R.",
    result: "-8kg em 60 dias",
    photo: dep2,
    time: "14:08",
    messages: [
      { from: "her", text: "Achei que era impossível depois dos 40 😩" },
      { from: "her", text: "Mas o protocolo destravou meu metabolismo de verdade." },
      { from: "her", text: "8kg em 60 dias, sem passar fome e sem remédio 🙌" },
      { from: "her", text: "Voltei a caber nas roupas que eu amava 💃" },
    ],
  },
  {
    name: "Patrícia L.",
    result: "-15kg em 4 meses",
    photo: dep3,
    time: "20:15",
    messages: [
      { from: "her", text: "Gente, a retenção de líquido sumiu na PRIMEIRA semana 😱" },
      { from: "her", text: "Minha barriga desinchou que eu não acreditei." },
      { from: "her", text: "15kg a menos em 4 meses, é o método mais simples que já fiz!" },
      { from: "her", text: "Recomendo de olhos fechados ❤️🔥" },
    ],
  },
];

const FAQS = [
  {
    q: "Como recebo o acesso ao protocolo?",
    a: "Logo após a confirmação do pagamento, você recebe o acesso por e-mail e libera tudo em uma área de membros 100% online.",
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "A maioria das alunas relata desinchaço já na primeira semana e perda de peso visível a partir do 14º dia seguindo o protocolo.",
  },
  {
    q: "Funciona pra quem tem hipotireoidismo ou está na menopausa?",
    a: "Sim. O protocolo foi desenvolvido justamente para corpos com bloqueio hormonal e metabolismo desacelerado.",
  },
  {
    q: "É seguro? Preciso tomar remédio?",
    a: "É 100% natural. Não envolve medicamentos, dietas restritivas ou jejuns extremos. Apenas estratégias de ativação metabólica.",
  },
  {
    q: "Posso cancelar?",
    a: "Sim. Você tem 30 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro.",
  },
];

function PulseButton({
  href,
  children,
  size = "lg",
}: {
  href: string;
  children: React.ReactNode;
  size?: "lg" | "md";
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand text-brand-foreground font-bold uppercase tracking-wide animate-pulse-cta hover:brightness-110 transition ${
        size === "lg" ? "px-8 py-5 text-base sm:text-lg" : "px-6 py-3 text-sm"
      }`}
      style={{ background: "var(--gradient-brand)" }}
    >
      <Flame className="h-5 w-5" />
      {children}
    </a>
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "var(--gradient-dark)" }}
      >
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, var(--brand) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-16">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90">
                <Flame className="h-4 w-4" style={{ color: "var(--brand)" }} />
                Protocolo Termo Hormonal
              </span>
              <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05]">
                DESBLOQUEIE O EMAGRECIMENTO QUE{" "}
                <span style={{ color: "var(--brand)" }}>SEU CORPO ESCONDE</span>
              </h1>
              <p className="mt-5 text-lg sm:text-xl font-medium text-white/85 max-w-2xl">
                Ative seu metabolismo e perca peso de forma natural.
              </p>
              <p className="mt-4 text-sm sm:text-base text-white/70 max-w-xl">
                +500 mil pessoas já ativaram esse protocolo e destravaram o
                metabolismo.
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
                <PulseButton href="#planos">QUERO ACESSAR O PROTOCOLO AGORA</PulseButton>
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-white/70">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" /> 30 dias de garantia
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-4 w-4" /> Compra 100% segura
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4" style={{ color: "var(--brand)" }} /> 4.9/5 em
                  avaliações
                </span>
              </div>
            </div>

            {/* EXPERT */}
            <div className="flex flex-col items-center md:items-end">
              <div
                className="relative rounded-3xl overflow-hidden border-4"
                style={{
                  borderColor: "var(--brand)",
                  boxShadow: "var(--shadow-brand)",
                  width: "260px",
                  height: "320px",
                }}
              >
                <img
                  src={expertImg}
                  alt="Mentora especialista do Protocolo Termo Hormonal"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-3 text-center md:text-right">
                <p className="text-sm font-bold text-white">Sua Mentora Especialista</p>
                <p className="text-xs text-white/70">Nutrição & Saúde Hormonal</p>
              </div>
            </div>
          </div>

          {/* QUICK PLANS CTA after headline */}
          <div className="mt-14">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-white/70 mb-4">
              Escolha seu acesso e comece agora
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
              {PLANS.map((p) => (
                <a
                  key={`hero-${p.name}`}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative rounded-2xl p-4 flex flex-col items-center text-center transition hover:scale-[1.02] ${
                    p.highlight
                      ? "bg-white text-foreground shadow-2xl"
                      : "bg-white/10 border border-white/20 text-white hover:bg-white/15"
                  }`}
                >
                  {p.badge && (
                    <span
                      className="absolute -top-2 left-1/2 -translate-x-1/2 rounded-full px-3 py-0.5 text-[10px] font-extrabold tracking-wider text-white whitespace-nowrap"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      {p.badge}
                    </span>
                  )}
                  <div className="text-xs font-bold uppercase tracking-wide mt-1 opacity-80">
                    {p.name}
                  </div>
                  <div className="text-2xl font-extrabold mt-1">{p.price}</div>
                  <div
                    className={`mt-3 text-[11px] font-extrabold uppercase tracking-wider rounded-full px-3 py-1.5 ${
                      p.highlight ? "text-white" : "bg-white/15"
                    }`}
                    style={p.highlight ? { background: "var(--gradient-brand)" } : undefined}
                  >
                    {p.cta} →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TSL */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
          Você faz tudo certo... e a balança não desce. Sabe por quê?
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>
            Se você corta calorias, treina, evita carboidrato e mesmo assim
            <strong> continua inchada, cansada e sem perder peso</strong>, o
            problema não é a sua força de vontade.
          </p>
          <p>
            O verdadeiro vilão se chama{" "}
            <strong>bloqueio hormonal do metabolismo</strong>. Quando seus
            hormônios entram em desequilíbrio (cortisol alto, insulina elevada,
            tireoide lenta), seu corpo entra em <em>modo economia</em> — e
            qualquer caloria a mais é estocada como gordura, principalmente na
            barriga e nos quadris.
          </p>
          <p>
            O <strong>Protocolo Termo Hormonal</strong> foi criado para virar
            essa chave. Ele combina ativação termogênica, ajustes alimentares
            estratégicos e estímulo hormonal natural para destravar seu
            metabolismo em poucos dias.
          </p>

          <div className="rounded-2xl border border-border bg-secondary/40 p-6">
            <p className="font-semibold text-foreground mb-4">
              O protocolo resolve de uma vez:
            </p>
            <ul className="space-y-3">
              {[
                "Metabolismo desacelerado e sensação de cansaço constante",
                "Retenção de líquido e inchaço, principalmente nas pernas e barriga",
                "Compulsão por doces e fome fora de hora",
                "Gordura localizada que não sai com dieta nem exercício",
                "Bloqueio hormonal causado por estresse, idade ou menopausa",
                "Frustração com balanças que não saem do lugar",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2
                    className="h-6 w-6 shrink-0 mt-0.5"
                    style={{ color: "var(--brand)" }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p>
            E o melhor: <strong>sem dietas malucas, sem remédios e sem passar fome.</strong>{" "}
            Apenas seguindo um passo a passo simples, criado por especialistas e
            já validado por milhares de mulheres que vivem hoje no corpo que
            sempre quiseram.
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <PulseButton href="#planos">QUERO DESTRAVAR MEU METABOLISMO</PulseButton>
        </div>
      </section>

      {/* PILARES */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
              O que você vai receber
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              4 pilares para ativar sua queima de gordura
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-card border border-border p-6 hover:shadow-lg transition"
              >
                <div
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
              Histórias reais
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Resultados de quem aplicou o protocolo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col"
              >
                <div className="flex gap-0.5 mb-3" style={{ color: "var(--brand)" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground/85 leading-relaxed flex-1">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-5 pt-4 border-t border-border">
                  <div className="font-bold">{t.name}</div>
                  <div
                    className="text-sm font-semibold inline-flex items-center gap-1 mt-1"
                    style={{ color: "var(--brand)" }}
                  >
                    <TrendingDown className="h-4 w-4" /> {t.result}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA / PLANOS */}
      <section
        id="planos"
        className="py-20 text-white"
        style={{ background: "var(--gradient-dark)" }}
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <p
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "var(--brand)" }}
            >
              Escolha seu plano
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Comece hoje. Veja resultado em poucas semanas.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-3xl p-7 flex flex-col ${
                  p.highlight
                    ? "bg-white text-foreground scale-100 md:scale-105 shadow-2xl"
                    : "bg-white/5 border border-white/10"
                }`}
              >
                {p.badge && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-extrabold tracking-wider text-white whitespace-nowrap"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    {p.badge}
                  </span>
                )}
                <h3 className="text-xl font-extrabold">{p.name}</h3>
                <div className="mt-4 mb-6">
                  <div
                    className={`text-4xl font-extrabold ${
                      p.highlight ? "" : "text-white"
                    }`}
                  >
                    {p.price}
                  </div>
                  <div
                    className={`text-xs mt-1 ${
                      p.highlight ? "text-muted-foreground" : "text-white/60"
                    }`}
                  >
                    Pagamento único · Acesso imediato
                  </div>
                </div>
                <ul className="space-y-3 mb-7 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <CheckCircle2
                        className="h-5 w-5 shrink-0"
                        style={{ color: "var(--brand)" }}
                      />
                      <span className={p.highlight ? "" : "text-white/85"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full rounded-full py-4 font-extrabold uppercase tracking-wide text-sm transition ${
                    p.highlight
                      ? "text-white animate-pulse-cta hover:brightness-110"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                  style={p.highlight ? { background: "var(--gradient-brand)" } : undefined}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-white/60">
            Pagamento processado com segurança pela PerfectPay · Liberação automática
          </p>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border-2 border-dashed p-8 sm:p-10 text-center bg-card"
            style={{ borderColor: "var(--brand)" }}
          >
            <div
              className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full text-white"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-brand)" }}
            >
              <ShieldCheck className="h-10 w-10" />
            </div>
            <p
              className="text-sm font-extrabold uppercase tracking-widest"
              style={{ color: "var(--brand)" }}
            >
              Risco Zero
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">
              30 dias de garantia incondicional
            </h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Teste o Protocolo Termo Hormonal por <strong>30 dias completos</strong>.
              Se você não desinchar, não sentir mais energia ou simplesmente
              mudar de ideia, basta nos enviar um e-mail e devolvemos{" "}
              <strong>100% do seu investimento</strong>. Sem perguntas, sem
              burocracia. O risco é todo nosso.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-10">
            <p
              className="text-sm font-bold uppercase tracking-widest"
              style={{ color: "var(--brand)" }}
            >
              Dúvidas frequentes
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
              Perguntas que talvez você esteja se fazendo
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-xl border border-border bg-card p-5"
              >
                <summary className="flex cursor-pointer items-center justify-between font-semibold list-none">
                  <span>{f.q}</span>
                  <span
                    className="ml-3 text-2xl leading-none transition group-open:rotate-45"
                    style={{ color: "var(--brand)" }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-foreground/75 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PulseButton href="#planos">QUERO ACESSAR O PROTOCOLO AGORA</PulseButton>
            <p className="mt-4 text-xs text-muted-foreground inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Liberação imediata após pagamento
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white/60 py-10 text-center text-xs">
        <div className="mx-auto max-w-3xl px-6 space-y-2">
          <p className="text-white font-bold uppercase tracking-wider">
            Protocolo Termo Hormonal
          </p>
          <p>
            Este produto não substitui acompanhamento médico. Resultados podem
            variar de pessoa para pessoa.
          </p>
          <p>© {new Date().getFullYear()} — Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
