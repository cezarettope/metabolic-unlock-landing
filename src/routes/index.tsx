import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  CheckCheck,
  Zap,
  Droplet,
  Cookie,
  Target,
  AlertTriangle,
  Scale,
} from "lucide-react";
import expertImg from "@/assets/expert.png";
import dep1 from "@/assets/depoimento-1.png";
import dep2 from "@/assets/depoimento-2.png";
import dep3 from "@/assets/depoimento-3.png";
import ad1 from "@/assets/antes-depois-1.png";
import ad2 from "@/assets/antes-depois-2.png";
import ad3 from "@/assets/antes-depois-3.png";
import ad4 from "@/assets/antes-depois-4.png";
import ad5 from "@/assets/antes-depois-5.png";

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
];

function useCountdown() {
  const [t, setT] = useState({ h: "00", m: "00", s: "00", date: "--/--" });
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(23, 59, 59, 999);
      const diff = midnight.getTime() - now.getTime();
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      const pad = (n: number) => String(n).padStart(2, "0");
      setT({
        h: pad(h),
        m: pad(m),
        s: pad(s),
        date: now.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

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
  const timer = useCountdown();
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* TOP URGENCY BAR */}
      <div
        className="sticky top-0 z-50 w-full text-white shadow-lg"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div className="mx-auto max-w-6xl px-4 py-2.5 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <span className="text-[11px] sm:text-sm font-bold uppercase tracking-wider">
            ⚠ Vagas limitadas · Oferta encerra em
          </span>
          <span className="font-mono text-base sm:text-lg font-extrabold flex items-center gap-1">
            <span className="bg-black/30 rounded px-2 py-0.5">{timer.h}</span>:
            <span className="bg-black/30 rounded px-2 py-0.5">{timer.m}</span>:
            <span className="bg-black/30 rounded px-2 py-0.5">{timer.s}</span>
          </span>
          <span className="hidden sm:inline text-[11px] font-semibold opacity-90">
            · Preço promocional sai do ar hoje ({timer.date})
          </span>
        </div>
      </div>

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
                O <strong>Protocolo Termo Hormonal</strong> usa ativação metabólica em{" "}
                <strong style={{ color: "var(--brand)" }}>3 etapas</strong> para destravar a queima de gordura mesmo com cortisol alto — sem dieta, sem remédio, sem passar fome.
              </p>

              {/* PRICE ANCHOR OFFER */}
              <div className="mt-7 rounded-2xl border-2 p-6 max-w-xl backdrop-blur"
                style={{ borderColor: "var(--brand)", background: "rgba(255,107,53,0.06)" }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white"
                    style={{ background: "var(--gradient-brand)" }}>
                    Oferta de lançamento
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                    81% OFF
                  </span>
                </div>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-base text-white/50 line-through decoration-2">
                    De R$ 197,00
                  </span>
                  <span className="text-xs text-white/60">por apenas</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-5xl sm:text-6xl font-extrabold" style={{ color: "var(--brand)" }}>
                    R$ 37
                  </span>
                  <span className="text-2xl font-extrabold text-white">,00</span>
                  <span className="text-sm text-white/70 ml-1">à vista</span>
                </div>
                <p className="mt-2 text-xs text-white/70">
                  ou <strong className="text-white">12x de R$ 3,75</strong> no cartão
                </p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
                  <span className="inline-flex items-center gap-1"><Lock className="h-3 w-3" /> Pagamento seguro</span>
                  <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3 w-3" /> 30 dias garantia</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> Acesso imediato</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center md:justify-start">
                <PulseButton href={`https://go.perfectpay.com.br/PPU38CQB25T${UTM}`}>
                  QUERO ACESSAR O PROTOCOLO AGORA
                </PulseButton>
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
                <p className="text-base font-extrabold text-white">Amanda Albuquerque</p>
                <p className="text-xs text-white/80">Nutricionista — CRN 10-34821</p>
                <p className="text-[11px] text-white/60 max-w-[260px]">
                  Especialista em Saúde Hormonal & Emagrecimento Metabólico
                </p>
                <p className="text-[11px] font-bold mt-1" style={{ color: "var(--brand)" }}>
                  +7 anos atuando · desde 2018
                </p>
              </div>
            </div>
          </div>

          {/* QUICK PLANS CTA after headline */}
          <div className="mt-14">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-white/70 mb-4">
              Escolha seu acesso e comece agora
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
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

      {/* TSL — versão resumida e visual */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-5">
            Faz tudo certo e a balança <span style={{ color: "var(--brand)" }}>não desce</span>?
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            O problema não é força de vontade — é o{" "}
            <strong>bloqueio hormonal do metabolismo</strong>. Cortisol alto,
            insulina elevada e tireoide lenta colocam seu corpo em{" "}
            <em>modo economia</em> e tudo vira gordura estocada.
          </p>
          <p className="mt-4 text-lg text-foreground/80 leading-relaxed">
            O <strong>Protocolo Termo Hormonal</strong> destrava esse bloqueio em
            poucos dias — <strong>sem dieta, sem remédio, sem passar fome.</strong>
          </p>
        </div>

        {/* Bubbles de problemas resolvidos */}
        <div className="mt-12">
          <p className="text-center text-sm font-bold uppercase tracking-widest mb-8" style={{ color: "var(--brand)" }}>
            O que o protocolo resolve
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: Zap, label: "Metabolismo lento e cansaço" },
              { icon: Droplet, label: "Retenção de líquido e inchaço" },
              { icon: Cookie, label: "Compulsão por doces" },
              { icon: Target, label: "Gordura localizada teimosa" },
              { icon: AlertTriangle, label: "Bloqueio hormonal" },
              { icon: Scale, label: "Balança travada" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="group flex flex-col items-center text-center rounded-2xl bg-card border border-border p-5 hover:-translate-y-1 hover:shadow-xl transition"
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full mb-3 group-hover:scale-110 transition"
                  style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-brand)" }}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <span className="text-sm font-semibold text-foreground/85 leading-snug">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
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

      {/* PROVA SOCIAL — WhatsApp style */}
      <section className="py-20" style={{ background: "#ECE5DD" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
              Histórias reais
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground">
              Mensagens reais de quem aplicou o protocolo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl overflow-hidden shadow-2xl bg-white flex flex-col"
              >
                {/* WhatsApp header */}
                <div
                  className="flex items-center gap-3 px-4 py-3 text-white"
                  style={{ background: "#075E54" }}
                >
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover border-2 border-white/30"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-sm truncate">{t.name}</div>
                    <div className="text-[11px] text-white/80">online</div>
                  </div>
                  <div
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={{ background: "var(--brand)" }}
                  >
                    {t.result}
                  </div>
                </div>

                {/* Chat body */}
                <div
                  className="flex-1 p-4 space-y-2 min-h-[280px]"
                  style={{
                    background:
                      "#ECE5DD url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'><circle cx='20' cy='20' r='1' fill='%23d4ccc1'/></svg>\")",
                  }}
                >
                  {t.messages.map((m, i) => (
                    <div key={i} className="flex">
                      <div
                        className="relative max-w-[85%] rounded-lg px-3 py-2 text-sm text-foreground shadow-sm"
                        style={{ background: "#FFFFFF" }}
                      >
                        <p className="leading-snug">{m.text}</p>
                        <div className="flex items-center justify-end gap-1 mt-1">
                          <span className="text-[10px] text-foreground/50">
                            {t.time}
                          </span>
                          <CheckCheck className="h-3 w-3 text-[#34B7F1]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer badge */}
                <div className="bg-white px-4 py-3 border-t border-border flex items-center justify-between">
                  <div className="flex gap-0.5" style={{ color: "var(--brand)" }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <div
                    className="text-xs font-bold inline-flex items-center gap-1"
                    style={{ color: "var(--brand)" }}
                  >
                    <TrendingDown className="h-3.5 w-3.5" /> {t.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANTES E DEPOIS — Marquee automático */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
            Transformações reais
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold">
            Antes e Depois de quem aplicou o Protocolo
          </h2>
          <p className="mt-3 text-foreground/70 max-w-2xl mx-auto">
            Resultados reais de mulheres que destravaram o metabolismo e mudaram de vida.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-background to-transparent" />

          <div className="marquee-track flex gap-6 w-max">
            {[...Array(2)].map((_, dup) =>
              [ad1, ad2, ad3, ad4, ad5].map((img, i) => (
                <div
                  key={`${dup}-${i}`}
                  className="relative shrink-0 w-[280px] sm:w-[340px] rounded-2xl overflow-hidden shadow-xl border-2"
                  style={{ borderColor: "var(--brand)" }}
                >
                  <img
                    src={img}
                    alt={`Antes e depois ${i + 1}`}
                    className="w-full h-[420px] object-cover"
                  />
                  <div
                    className="absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    Antes ➜ Depois
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-10 flex justify-center px-6">
          <PulseButton href="#planos">QUERO MINHA TRANSFORMAÇÃO</PulseButton>
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

          {/* TIMER URGÊNCIA */}
          <div className="mb-10 mx-auto max-w-2xl rounded-2xl border-2 p-5 text-center" style={{ borderColor: "var(--brand)", background: "rgba(255,107,53,0.08)" }}>
            <p className="text-sm sm:text-base font-bold text-white">
              ⏱ Oferta expira hoje, <span style={{ color: "var(--brand)" }}>{timer.date}</span>
            </p>
            <div className="mt-3 flex items-center justify-center gap-2 font-mono text-3xl sm:text-4xl font-extrabold" style={{ color: "var(--brand)" }}>
              <span className="bg-black/40 rounded px-3 py-1">{timer.h}</span>
              <span>:</span>
              <span className="bg-black/40 rounded px-3 py-1">{timer.m}</span>
              <span>:</span>
              <span className="bg-black/40 rounded px-3 py-1">{timer.s}</span>
            </div>
            <p className="mt-3 text-xs text-white/70 uppercase tracking-wider">
              Preço de lançamento disponível por tempo limitado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
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
