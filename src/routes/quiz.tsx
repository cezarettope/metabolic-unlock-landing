import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  Flame,
  ShieldCheck,
  Lock,
  Sparkles,
  Activity,
  Heart,
  Target,
  Clock,
  Zap,
} from "lucide-react";
import expertImg from "@/assets/expert.webp";
import amandaImg from "@/assets/amanda-expert.webp";
import ad1 from "@/assets/antes-depois-1.webp";
import ad2 from "@/assets/antes-depois-2.webp";
import qad1 from "@/assets/quiz-ad-1.webp";
import qad2 from "@/assets/quiz-ad-2.webp";
import qad3 from "@/assets/quiz-ad-3.webp";
import qad4 from "@/assets/quiz-ad-4.webp";
import qad5 from "@/assets/quiz-ad-5.webp";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz Termo Hormonal — Descubra seu perfil metabólico" },
      {
        name: "description",
        content:
          "Responda 9 perguntas rápidas e receba seu diagnóstico personalizado do Método T.H.W. — Termo-Hormonal Wall.",
      },
    ],
  }),
  component: QuizPage,
});

const UTM =
  "?utm_source=FB&utm_campaign={{campaign.name}}|{{campaign.id}}&utm_medium={{adset.name}}|{{adset.id}}&utm_content={{ad.name}}|{{ad.id}}&utm_term={{placement}}";

const CHECKOUT = `https://go.perfectpay.com.br/PPU38CQB25T${UTM}`;

type Option = { label: string; emoji?: string; img?: string };
type Step =
  | { kind: "intro" }
  | {
      kind: "question";
      id: string;
      title: string;
      subtitle?: string;
      options: Option[];
      layout?: "grid" | "list";
      interstitial?: string; // mensagem de desejo após responder
    }
  | { kind: "loading" }
  | {
      kind: "testimonial";
      img: string;
      name: string;
      kg: string;
      quote: string;
    }
  | { kind: "result" };

const STEPS: Step[] = [
  { kind: "intro" },
  {
    kind: "question",
    id: "genero",
    title: "Você é Homem ou Mulher?",
    subtitle:
      "O Método T.H.W. ajusta a queima de gordura conforme seu padrão hormonal.",
    options: [
      { label: "Mulher", emoji: "👩" },
      { label: "Homem", emoji: "👨" },
    ],
    layout: "grid",
  },
  {
    kind: "question",
    id: "idade",
    title: "Qual a sua faixa de idade?",
    subtitle: "Após os 30, o cortisol começa a sabotar o metabolismo.",
    options: [
      { label: "18 a 29 anos" },
      { label: "30 a 39 anos" },
      { label: "40 a 49 anos" },
      { label: "50 anos ou mais" },
    ],
    layout: "list",
    interstitial:
      "✨ Perfeito. Mulheres na sua faixa têm respondido em média 3x mais rápido ao Termo-Hormonal Wall.",
  },
  {
    kind: "testimonial",
    img: qad1,
    name: "Camila R.",
    kg: "-14 kg em 90 dias",
    quote:
      "Eu já tinha tentado de tudo. Em 3 semanas no Termo Hormonal eu senti meu corpo destravar — sumiu o inchaço e a compulsão.",
  },
  {
    kind: "question",
    id: "peso",
    title: "Quantos quilos você quer eliminar?",
    options: [
      { label: "Até 5 kg" },
      { label: "De 5 a 10 kg" },
      { label: "De 10 a 20 kg" },
      { label: "Mais de 20 kg" },
    ],
    layout: "list",
  },
  {
    kind: "question",
    id: "gordura",
    title: "Onde a gordura mais se acumula no seu corpo?",
    subtitle:
      "Cada região indica um desequilíbrio hormonal diferente — o protocolo se adapta ao seu.",
    options: [
      { label: "Barriga e cintura", emoji: "🔥" },
      { label: "Quadril e culote", emoji: "💧" },
      { label: "Braços e costas", emoji: "💪" },
      { label: "Em todo o corpo", emoji: "⚖️" },
    ],
    layout: "list",
    interstitial:
      "🧬 Identificamos um padrão de cortisol alto — é justamente o que o T.H.W. neutraliza nas primeiras 72h.",
  },
  {
    kind: "testimonial",
    img: qad2,
    name: "Jéssica L.",
    kg: "-22 kg em 5 meses",
    quote:
      "Eu nem reconheço mais meu corpo. O melhor é que voltei a comer arroz e feijão — só ajustei o que a Amanda ensinou.",
  },
  {
    kind: "question",
    id: "tentou",
    title: "Quantas dietas e treinos você já tentou sem sucesso?",
    options: [
      { label: "Nenhuma — é minha primeira tentativa" },
      { label: "1 a 3 tentativas" },
      { label: "4 a 7 tentativas" },
      { label: "Já perdi a conta…" },
    ],
    layout: "list",
  },
  {
    kind: "question",
    id: "dor",
    title: "Qual desses sintomas mais te incomoda hoje?",
    subtitle: "Todos eles têm relação direta com o desequilíbrio termo-hormonal.",
    options: [
      { label: "Cansaço e falta de energia", emoji: "😴" },
      { label: "Compulsão por doce ou carboidrato", emoji: "🍞" },
      { label: "Inchaço e retenção de líquido", emoji: "💧" },
      { label: "Ansiedade e sono ruim", emoji: "🌙" },
    ],
    layout: "list",
    interstitial:
      "💡 Isso confirma: seu corpo NÃO está doente. Ele está travado. O T.H.W. destrava em 3 fases curtas por dia.",
  },
  {
    kind: "testimonial",
    img: qad3,
    name: "Patrícia M.",
    kg: "-18 kg em 4 meses",
    quote:
      "Cortisol alto destruía minha rotina. Em 21 dias o inchaço sumiu e a balança começou a andar de verdade.",
  },
  {
    kind: "question",
    id: "tempo",
    title: "Quanto tempo você tem disponível por dia para se cuidar?",
    subtitle: "O Pilates na Parede funciona com sessões curtas e sem impacto.",
    options: [
      { label: "Menos de 15 minutos" },
      { label: "De 15 a 30 minutos" },
      { label: "De 30 a 60 minutos" },
      { label: "Mais de 1 hora" },
    ],
    layout: "list",
  },
  {
    kind: "question",
    id: "limitacao",
    title: "Você tem alguma limitação física?",
    subtitle:
      "O Pilates na Parede é seguro até para quem tem dor no joelho, lombar ou nunca treinou.",
    options: [
      { label: "Não, nenhuma" },
      { label: "Dor nos joelhos ou lombar" },
      { label: "Sedentária há muito tempo" },
      { label: "Pós-parto ou pós-cirurgia" },
    ],
    layout: "list",
    interstitial:
      "✅ Ótimo. O método foi desenhado exatamente para corpos travados — quanto mais parado, mais rápido o resultado inicial.",
  },
  {
    kind: "testimonial",
    img: qad4,
    name: "Renata S.",
    kg: "-9 kg + redefinição",
    quote:
      "15 minutos por dia de Pilates na Parede. Sem academia, sem dieta louca. Minha barriga e meu bumbum mudaram completamente.",
  },
  {
    kind: "testimonial",
    img: qad5,
    name: "Bianca T.",
    kg: "-11 kg em 60 dias",
    quote:
      "A combinação termo-hormonal + parede acelerou tudo. Me sinto mais leve, mais firme e dormindo melhor.",
  },
  {
    kind: "question",
    id: "compromisso",
    title: "Se eu te entregar um plano 100% personalizado, você se compromete a seguir por 21 dias?",
    options: [
      { label: "Sim, quero meu resultado", emoji: "🔥" },
      { label: "Sim, com certeza", emoji: "✅" },
      { label: "Talvez, depende do plano", emoji: "🤔" },
    ],
    layout: "list",
  },
  { kind: "loading" },
  { kind: "result" },
];

function QuizPage() {
  const [stepIdx, setStepIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showInterstitial, setShowInterstitial] = useState<string | null>(null);

  const step = STEPS[stepIdx];
  const progress = useMemo(() => {
    const total = STEPS.length - 1;
    return Math.min(100, Math.round((stepIdx / total) * 100));
  }, [stepIdx]);

  const goNext = () => {
    setShowInterstitial(null);
    setStepIdx((i) => Math.min(i + 1, STEPS.length - 1));
  };

  const answer = (opt: Option) => {
    if (step.kind !== "question") return;
    setAnswers((a) => ({ ...a, [step.id]: opt.label }));
    if (step.interstitial) {
      setShowInterstitial(step.interstitial);
      setTimeout(goNext, 1600);
    } else {
      setTimeout(goNext, 250);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header com progresso */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-2xl px-4 py-3">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Flame className="h-3.5 w-3.5 text-primary" />
              Diagnóstico Termo-Hormonal
            </span>
            <span>{progress}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-gradient-to-r from-primary to-orange-400 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8">
        {/* Interstitial de desejo */}
        {showInterstitial && (
          <div className="animate-in fade-in slide-in-from-bottom-4 rounded-2xl border border-primary/30 bg-primary/10 p-5 text-center text-sm font-medium text-foreground shadow-lg">
            {showInterstitial}
          </div>
        )}

        {!showInterstitial && step.kind === "question" && (
          <section className="animate-in fade-in slide-in-from-right-4">
            <h1 className="text-balance text-2xl font-bold leading-tight md:text-3xl">
              {step.title}
            </h1>
            {step.subtitle && (
              <p className="mt-2 text-sm text-muted-foreground md:text-base">
                {step.subtitle}
              </p>
            )}

            <div
              className={
                step.layout === "grid"
                  ? "mt-6 grid grid-cols-2 gap-3"
                  : "mt-6 flex flex-col gap-3"
              }
            >
              {step.options.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => answer(opt)}
                  className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left transition-all hover:border-primary hover:bg-primary/5 active:scale-[0.98]"
                >
                  {opt.emoji && (
                    <span className="text-2xl">{opt.emoji}</span>
                  )}
                  <span className="flex-1 font-medium">{opt.label}</span>
                  <CheckCircle2 className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary" />
                </button>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" /> Suas respostas são 100% sigilosas
            </div>
          </section>
        )}

        {step.kind === "intro" && <Intro onStart={goNext} />}
        {step.kind === "testimonial" && (
          <Testimonial step={step} onNext={goNext} />
        )}
        {step.kind === "loading" && <LoadingDiagnosis onDone={goNext} />}
        {step.kind === "result" && <Result answers={answers} />}
      </main>
    </div>
  );
}

/* ---------------- Intro ---------------- */
function Intro({ onStart }: { onStart: () => void }) {
  return (
    <section className="animate-in fade-in space-y-6 text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
        <Flame className="h-3 w-3" /> Protocolo Termo Hormonal
      </span>

      <h1 className="text-balance text-4xl font-black uppercase leading-[1.02] md:text-5xl">
        <span className="block text-foreground">Emagreça com o</span>
        <span className="block bg-gradient-to-r from-orange-500 via-primary to-orange-400 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(234,88,12,0.35)]">
          Protocolo Termo Hormonal
        </span>
      </h1>

      <p className="text-balance text-base text-muted-foreground md:text-lg">
        Ative a queima de gordura em{" "}
        <strong className="text-primary">3 etapas simples</strong> e destrave o
        metabolismo bloqueado pelo cortisol.
      </p>

      <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-orange-500/15 via-card to-card p-5 text-left shadow-xl shadow-primary/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.25),transparent_60%)]" />
        <div className="flex items-center gap-4">
          <div className="relative shrink-0">
            <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-br from-orange-400 to-primary blur-md opacity-60" />
            <img
              src={amandaImg}
              alt="Amanda Albuquerque"
              className="relative h-28 w-28 rounded-full object-cover ring-2 ring-primary/60"
              loading="eager"
            />
          </div>
          <div className="space-y-1">
            <p className="text-lg font-extrabold leading-tight">Amanda Albuquerque</p>
            <p className="inline-block rounded-md bg-primary/15 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
              Nutricionista · CRN 10-34821
            </p>
            <p className="text-xs font-semibold text-foreground">
              Especialista em <span className="text-primary">Saúde Hormonal</span> &{" "}
              <span className="text-primary">Emagrecimento Metabólico</span>
            </p>
            <p className="text-[11px] text-muted-foreground">+7 anos atuando · desde 2018</p>
          </div>
        </div>
      </div>

      <button
        onClick={onStart}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-orange-400 px-6 py-4 text-base font-extrabold uppercase tracking-wide text-primary-foreground shadow-lg transition-all hover:scale-[1.02] active:scale-100"
      >
        <Zap className="h-5 w-5" />
        Fazer o teste agora
      </button>

      <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Lock className="h-3 w-3" /> Leva menos de 2 minutos · 100% sigiloso
      </p>
    </section>
  );
}

/* ---------------- Testimonial ---------------- */
function Testimonial({
  step,
  onNext,
}: {
  step: { img: string; name: string; kg: string; quote: string };
  onNext: () => void;
}) {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 space-y-5 text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
        <Sparkles className="h-3 w-3" /> Resultado real de aluna
      </span>

      <div className="relative overflow-hidden rounded-2xl border border-primary/30 shadow-xl shadow-primary/10">
        <img
          src={step.img}
          alt={`Antes e depois — ${step.name}`}
          className="aspect-[4/5] w-full object-cover"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground backdrop-blur">
          Antes
        </div>
        <div className="absolute right-3 top-3 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
          Depois
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-4 text-left">
          <p className="text-sm font-bold">{step.name}</p>
          <p className="text-xs font-semibold text-primary">{step.kg}</p>
        </div>
      </div>

      <p className="text-balance text-sm italic text-muted-foreground md:text-base">
        “{step.quote}”
      </p>

      <button
        onClick={onNext}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-orange-400 px-6 py-3.5 text-sm font-extrabold uppercase tracking-wide text-primary-foreground shadow-lg transition-all hover:scale-[1.02] active:scale-100"
      >
        Continuar meu diagnóstico
      </button>
    </section>
  );
}

/* ---------------- Loading ---------------- */
function LoadingDiagnosis({ onDone }: { onDone: () => void }) {
  const items = [
    { icon: Activity, label: "Analisando seu perfil hormonal…" },
    { icon: Heart, label: "Calculando seu padrão de cortisol…" },
    { icon: Target, label: "Montando seu plano T.H.W. personalizado…" },
  ];
  const [done, setDone] = useState<number[]>([]);

  useEffect(() => {
    const timers = items.map((_, i) =>
      setTimeout(() => setDone((d) => [...d, i]), 900 * (i + 1)),
    );
    const finish = setTimeout(onDone, 900 * items.length + 800);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finish);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="animate-in fade-in py-10 text-center">
      <Sparkles className="mx-auto h-10 w-10 animate-pulse text-primary" />
      <h2 className="mt-4 text-2xl font-bold">Montando seu diagnóstico…</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Cruzando suas respostas com mais de 12.000 perfis emagrecidos.
      </p>
      <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
        {items.map((it, i) => {
          const Icon = it.icon;
          const ok = done.includes(i);
          return (
            <li
              key={i}
              className={`flex items-center gap-3 rounded-xl border p-4 transition-all ${
                ok
                  ? "border-primary/40 bg-primary/5"
                  : "border-border bg-card opacity-60"
              }`}
            >
              <Icon
                className={`h-5 w-5 ${ok ? "text-primary" : "text-muted-foreground animate-pulse"}`}
              />
              <span className="flex-1 text-sm font-medium">{it.label}</span>
              {ok && <CheckCircle2 className="h-5 w-5 text-primary" />}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ---------------- Resultado / Oferta ---------------- */
function Result({ answers }: { answers: Record<string, string> }) {
  const nome = answers.genero === "Homem" ? "guerreiro" : "guerreira";
  const peso = answers.peso ?? "alguns quilos";
  const dor = answers.dor ?? "seus sintomas";

  return (
    <section className="animate-in fade-in space-y-8">
      <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-orange-500/5 p-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
          <Sparkles className="h-3 w-3" /> Diagnóstico pronto
        </span>
        <h2 className="mt-4 text-balance text-2xl font-extrabold leading-tight md:text-3xl">
          Seu corpo está com{" "}
          <span className="text-primary">bloqueio termo-hormonal</span> —
          e tem solução, {nome}.
        </h2>
        <p className="mt-3 text-sm text-muted-foreground md:text-base">
          Com base nas suas respostas, identificamos que você pode eliminar{" "}
          <strong className="text-foreground">{peso}</strong> nos próximos{" "}
          <strong className="text-foreground">21 dias</strong> destravando o
          cortisol e ativando a queima através do{" "}
          <strong className="text-primary">Método T.H.W.</strong>
        </p>
      </div>

      {/* Mecanismo único */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-lg font-bold">
          O Método T.H.W. — Termo-Hormonal Wall
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Sistema exclusivo em 3 fases que combina regulação hormonal +
          Pilates na Parede para destravar a queima de gordura sem dieta e sem
          impacto.
        </p>
        <ul className="mt-5 space-y-3">
          {[
            {
              n: "1",
              t: "Fase Termo",
              d: "Reduz cortisol e libera a termogênese natural em 72h.",
            },
            {
              n: "2",
              t: "Fase Hormonal",
              d: "Reequilibra insulina e leptina — fim da compulsão.",
            },
            {
              n: "3",
              t: "Fase Wall",
              d: "Pilates na Parede: 15 min/dia, sem impacto, queima acelerada.",
            },
          ].map((f) => (
            <li key={f.n} className="flex gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary font-bold text-primary-foreground">
                {f.n}
              </span>
              <div>
                <p className="font-semibold">{f.t}</p>
                <p className="text-sm text-muted-foreground">{f.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Prova */}
      <div className="grid grid-cols-2 gap-3">
        <img
          src={ad1}
          alt="Resultado real"
          className="aspect-square w-full rounded-xl object-cover"
          loading="lazy"
        />
        <img
          src={ad2}
          alt="Resultado real"
          className="aspect-square w-full rounded-xl object-cover"
          loading="lazy"
        />
      </div>

      {/* Especialista */}
      <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
        <img
          src={expertImg}
          alt="Amanda Albuquerque"
          className="h-16 w-16 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p className="font-bold">Amanda Albuquerque</p>
          <p className="text-xs text-muted-foreground">
            Especialista em emagrecimento hormonal desde 2018 · +12.000 alunas
          </p>
        </div>
      </div>

      {/* Escassez */}
      <div className="flex items-center justify-center gap-2 rounded-xl border border-orange-400/30 bg-orange-500/10 p-3 text-sm font-semibold text-orange-300">
        <Clock className="h-4 w-4" /> Oferta liberada só agora — vagas
        limitadas para o seu perfil
      </div>

      {/* Oferta */}
      <div className="overflow-hidden rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/10 via-card to-card p-6 shadow-2xl shadow-primary/20">
        <div className="text-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground line-through">
            De R$ 197,00
          </p>
          <p className="mt-1 text-5xl font-black text-primary">R$ 37</p>
          <p className="text-xs text-muted-foreground">
            pagamento único · acesso vitalício
          </p>
        </div>

        <ul className="mt-6 space-y-2.5 text-sm">
          {[
            "Protocolo Termo Hormonal completo (3 fases)",
            "Aulas de Pilates na Parede — 15 min/dia",
            "Direcionamento alimentar antiestresse",
            "Mentor Nutricional Inteligente 24h",
            "Bônus: Receitas termogênicas + Detox 3 dias",
            "Garantia incondicional de 7 dias",
          ].map((b) => (
            <li key={b} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <a
          href={CHECKOUT}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-orange-400 px-6 py-4 text-base font-extrabold uppercase tracking-wide text-primary-foreground shadow-lg transition-all hover:scale-[1.02] active:scale-100"
        >
          <Zap className="h-5 w-5" />
          Quero meu plano por R$ 37
        </a>

        <p className="mt-3 text-center text-xs text-muted-foreground">
          Baseado nas suas respostas sobre <strong>{dor.toLowerCase()}</strong>{" "}
          e seu objetivo de eliminar {peso.toLowerCase()}.
        </p>

        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5" /> Compra segura
          </span>
          <span className="flex items-center gap-1">
            <Lock className="h-3.5 w-3.5" /> SSL 256-bit
          </span>
        </div>
      </div>
    </section>
  );
}
