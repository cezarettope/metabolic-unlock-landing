import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Home,
  Utensils,
  Dumbbell,
  Droplet,
  Camera,
  Sparkles,
  BookOpen,
  Flame,
  LogOut,
  Lock,
  CheckCircle2,
  Plus,
  Minus,
  Trash2,
  TrendingDown,
  Quote,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import ad1 from "@/assets/antes-depois-1.webp";
import ad2 from "@/assets/antes-depois-2.webp";

export const Route = createFileRoute("/app")({
  component: AppHome,
});

type Tier = "basico" | "completo";
type User = { email: string; name: string; tier: Tier };

type TabId =
  | "hub"
  | "alimentacao"
  | "guia"
  | "treino"
  | "agua"
  | "fotos"
  | "aceleradores";

const TABS: { id: TabId; label: string; icon: React.ComponentType<{ className?: string }>; premium?: boolean }[] = [
  { id: "hub", label: "Hub", icon: Home },
  { id: "alimentacao", label: "Comer", icon: Utensils },
  { id: "guia", label: "Guia", icon: BookOpen },
  { id: "treino", label: "Treino", icon: Dumbbell, premium: true },
  { id: "agua", label: "Água", icon: Droplet, premium: true },
  { id: "fotos", label: "Fotos", icon: Camera, premium: true },
  { id: "aceleradores", label: "Acelerar", icon: Sparkles },
];

const ORDER_BUMPS = [
  {
    title: "Detox Hormonal 7 dias",
    desc: "Protocolo express para acelerar a queima de gordura na primeira semana.",
    price: "R$ 17,00",
    url: "#",
  },
  {
    title: "Chá Termogênico Noturno",
    desc: "Receita exclusiva que potencializa o metabolismo enquanto você dorme.",
    price: "R$ 9,90",
    url: "#",
  },
  {
    title: "Cardápio Anti-Inchaço",
    desc: "14 dias de cardápio pronto para eliminar retenção e desinchar a barriga.",
    price: "R$ 19,90",
    url: "#",
  },
  {
    title: "Pilates na Parede — Avançado",
    desc: "Sequência avançada para definir glúteo, abdômen e pernas em 15 min/dia.",
    price: "R$ 27,00",
    url: "#",
  },
];

function AppHome() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [tab, setTab] = useState<TabId>("hub");

  useEffect(() => {
    const raw = typeof window !== "undefined" ? localStorage.getItem("pth_user") : null;
    if (!raw) {
      navigate({ to: "/login" });
      return;
    }
    try {
      setUser(JSON.parse(raw));
    } catch {
      navigate({ to: "/login" });
    }
  }, [navigate]);

  if (!user) return null;

  const isPremium = user.tier === "completo";

  function logout() {
    localStorage.removeItem("pth_user");
    navigate({ to: "/login" });
  }

  return (
    <main className="min-h-screen bg-background text-foreground pb-24">
      {/* TOP BAR */}
      <header
        className="sticky top-0 z-40 text-white"
        style={{ background: "var(--gradient-dark)" }}
      >
        <div className="mx-auto max-w-2xl px-4 py-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
              style={{ background: "var(--gradient-brand)" }}
            >
              <Flame className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-white/60 leading-none">Bem-vinda</p>
              <p className="font-bold truncate capitalize">{user.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span
              className="rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider"
              style={{
                background: isPremium ? "var(--gradient-brand)" : "rgba(255,255,255,0.1)",
              }}
            >
              {isPremium ? "Completo" : "Básico"}
            </span>
            <button
              onClick={logout}
              className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10"
              aria-label="Sair"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto max-w-2xl px-4 py-5">
        {tab === "hub" && <HubSection user={user} isPremium={isPremium} onGo={setTab} />}
        {tab === "alimentacao" && <AlimentacaoSection />}
        {tab === "guia" && <GuiaSection />}
        {tab === "treino" && (
          isPremium ? <TreinoSection /> : <LockedSection title="Treinos de Ativação" />
        )}
        {tab === "agua" && (
          isPremium ? <AguaSection /> : <LockedSection title="Hidratação Hormonal" />
        )}
        {tab === "fotos" && (
          isPremium ? <FotosSection /> : <LockedSection title="Antes & Depois" />
        )}
        {tab === "aceleradores" && <AceleradoresSection />}
      </section>

      {/* BOTTOM NAV */}
      <nav className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-card/95 backdrop-blur">
        <div className="mx-auto max-w-2xl grid grid-cols-7">
          {TABS.map((t) => {
            const active = tab === t.id;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex flex-col items-center justify-center gap-0.5 py-2 text-[10px] font-bold transition relative ${
                  active ? "" : "text-muted-foreground"
                }`}
                style={active ? { color: "var(--brand)" } : undefined}
              >
                <Icon className="h-5 w-5" />
                <span className="leading-none">{t.label}</span>
                {t.premium && !isPremium && (
                  <Lock className="absolute top-1 right-1 h-2.5 w-2.5 text-muted-foreground" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </main>
  );
}

/* ---------------- HUB ---------------- */
const MOTIVATIONS = [
  "Cada dia ativando o termo-hormonal é um dia mais perto da sua transformação.",
  "Seu metabolismo está acordando — confie no processo.",
  "Disciplina hoje é o vestido novo amanhã. Continue.",
  "Você não está sozinha. Milhares estão emagrecendo com você agora.",
  "Pequenos hábitos diários = grande transformação corporal.",
];

function HubSection({
  user,
  isPremium,
  onGo,
}: {
  user: User;
  isPremium: boolean;
  onGo: (t: TabId) => void;
}) {
  const today = new Date();
  const motiv = MOTIVATIONS[today.getDate() % MOTIVATIONS.length];

  return (
    <div className="space-y-5">
      {/* Motivacional */}
      <div
        className="relative overflow-hidden rounded-3xl p-5 text-white"
        style={{ background: "var(--gradient-brand)" }}
      >
        <Quote className="absolute -top-2 -right-2 h-24 w-24 text-white/10" />
        <p className="text-xs font-bold uppercase tracking-wider opacity-90">
          Hoje, {today.toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" })}
        </p>
        <p className="mt-2 text-lg font-extrabold leading-snug">{motiv}</p>
      </div>

      {/* Stats rápidos */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { l: "Dias", v: "1" },
          { l: "Sequência", v: "🔥 1" },
          { l: "Foco", v: "Hormonal" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl bg-card border border-border p-3 text-center">
            <p className="text-lg font-extrabold" style={{ color: "var(--brand)" }}>
              {s.v}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">
              {s.l}
            </p>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
          Continuar agora
        </p>
        <div className="grid grid-cols-2 gap-3">
          <QuickCard icon={Utensils} label="Plano alimentar" onClick={() => onGo("alimentacao")} />
          <QuickCard icon={BookOpen} label="Guia Inicial" onClick={() => onGo("guia")} />
          <QuickCard
            icon={Dumbbell}
            label="Treino do dia"
            onClick={() => onGo("treino")}
            locked={!isPremium}
          />
          <QuickCard
            icon={Droplet}
            label="Hidratação"
            onClick={() => onGo("agua")}
            locked={!isPremium}
          />
        </div>
      </div>

      {/* Resultados */}
      <div className="rounded-3xl bg-card border border-border overflow-hidden">
        <div className="px-4 py-3 border-b border-border flex items-center justify-between">
          <p className="font-bold text-sm">Resultados de quem já aplicou</p>
          <TrendingDown className="h-4 w-4" style={{ color: "var(--brand)" }} />
        </div>
        <div className="grid grid-cols-2 gap-2 p-2">
          <img src={ad1} alt="Antes e depois" className="w-full h-40 object-cover rounded-xl" loading="lazy" />
          <img src={ad2} alt="Antes e depois" className="w-full h-40 object-cover rounded-xl" loading="lazy" />
        </div>
      </div>

      {/* Acelerar */}
      <button
        onClick={() => onGo("aceleradores")}
        className="w-full rounded-2xl p-4 flex items-center gap-3 text-left text-white"
        style={{ background: "var(--gradient-brand)" }}
      >
        <Sparkles className="h-6 w-6" />
        <div className="flex-1 min-w-0">
          <p className="font-extrabold text-sm">Aceleradores de Resultados</p>
          <p className="text-xs text-white/85">Complementos para potencializar sua transformação.</p>
        </div>
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  );
}

function QuickCard({
  icon: Icon,
  label,
  onClick,
  locked,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
  locked?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-2xl bg-card border border-border p-4 text-left active:scale-[0.98] transition"
    >
      <div
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl mb-2"
        style={{ background: "var(--gradient-brand)" }}
      >
        <Icon className="h-5 w-5 text-white" />
      </div>
      <p className="font-bold text-sm">{label}</p>
      {locked && (
        <Lock className="absolute top-3 right-3 h-3.5 w-3.5 text-muted-foreground" />
      )}
    </button>
  );
}

/* ---------------- ALIMENTAÇÃO ---------------- */
const MEALS = [
  {
    name: "Café da manhã termogênico",
    items: [
      "2 ovos mexidos no azeite + 1 fatia de queijo branco",
      "1 fruta vermelha (morango, mirtilo ou framboesa)",
      "Café preto sem açúcar ou chá verde",
    ],
  },
  {
    name: "Lanche da manhã",
    items: ["1 punhado de castanhas (até 30g)", "1 iogurte natural sem açúcar"],
  },
  {
    name: "Almoço hormonal",
    items: [
      "1 prato de salada colorida com azeite e limão",
      "150g de proteína magra (frango, peixe ou ovo)",
      "1 porção pequena de carboidrato (batata-doce, arroz integral ou mandioca)",
      "Vegetais cozidos à vontade (brócolis, abobrinha, berinjela)",
    ],
  },
  {
    name: "Lanche da tarde",
    items: ["1 fruta + 1 col. sopa de pasta de amendoim", "Ou ovo cozido + chá"],
  },
  {
    name: "Jantar leve",
    items: ["Omelete de claras com legumes", "Ou sopa de legumes com proteína"],
  },
];

const FORBIDDEN = [
  "Açúcar refinado e adoçantes artificiais",
  "Frituras e ultra-processados",
  "Refrigerantes (mesmo zero)",
  "Pão branco e massas refinadas",
  "Bebidas alcoólicas durante o protocolo",
];

function AlimentacaoSection() {
  return (
    <div className="space-y-5">
      <SectionHeader title="Plano Alimentar Hormonal" desc="Cardápio base para destravar a queima de gordura." />

      <div className="space-y-3">
        {MEALS.map((m, i) => (
          <details
            key={m.name}
            open={i === 0}
            className="group rounded-2xl bg-card border border-border p-4"
          >
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white font-extrabold"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {i + 1}
                </span>
                <p className="font-bold truncate">{m.name}</p>
              </div>
              <Plus className="h-4 w-4 text-muted-foreground group-open:hidden" />
              <Minus className="h-4 w-4 text-muted-foreground hidden group-open:block" />
            </summary>
            <ul className="mt-3 space-y-2 pl-12">
              {m.items.map((it) => (
                <li key={it} className="flex gap-2 text-sm text-foreground/85">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 mt-0.5"
                    style={{ color: "var(--brand)" }}
                  />
                  {it}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      <div className="rounded-2xl border-2 border-dashed p-5" style={{ borderColor: "var(--brand)" }}>
        <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: "var(--brand)" }}>
          ⚠ Evite no protocolo
        </p>
        <ul className="mt-3 space-y-1.5">
          {FORBIDDEN.map((f) => (
            <li key={f} className="text-sm text-foreground/85">
              • {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------- GUIA ---------------- */
const GUIDE_STEPS = [
  {
    t: "1. Entenda o bloqueio hormonal",
    d: "Cortisol alto, insulina elevada e tireoide lenta colocam o corpo em modo economia. O Protocolo Termo Hormonal age justamente nesses 3 gatilhos para destravar a queima.",
  },
  {
    t: "2. Reset alimentar (Semana 1)",
    d: "Foco em proteína + gordura boa + vegetais. Corte açúcar, refinados e processados. O objetivo é estabilizar a glicemia e reduzir o pico de insulina.",
  },
  {
    t: "3. Ativação termogênica diária",
    d: "Inclua os chás, especiarias e horários estratégicos descritos no plano alimentar. Eles aceleram o gasto calórico em até 12%.",
  },
  {
    t: "4. Movimento curto e estratégico",
    d: "10 a 20 minutos por dia de Pilates na Parede + caminhada leve. O segredo NÃO é treino pesado — é frequência e ativação muscular.",
  },
  {
    t: "5. Hidratação hormonal",
    d: "Mínimo de 35ml por kg corporal. Água gelada queima mais. Adicione limão, gengibre ou hortelã para potencializar.",
  },
  {
    t: "6. Sono reparador",
    d: "Dormir 7-8h regula leptina e grelina. Sem isso, nenhum protocolo funciona. Desligue telas 30 min antes de dormir.",
  },
  {
    t: "7. Constância > Perfeição",
    d: "Aplique 80% da semana. Resultados visíveis aparecem entre o dia 7 e o dia 21. Confie no processo.",
  },
];

function GuiaSection() {
  return (
    <div className="space-y-5">
      <SectionHeader title="Guia Inicial" desc="Os 7 passos para destravar o metabolismo." />
      <ol className="space-y-3">
        {GUIDE_STEPS.map((s) => (
          <li key={s.t} className="rounded-2xl bg-card border border-border p-4">
            <p className="font-extrabold" style={{ color: "var(--brand)" }}>
              {s.t}
            </p>
            <p className="text-sm text-foreground/80 mt-1.5 leading-relaxed">{s.d}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------------- TREINO ---------------- */
const WORKOUTS = [
  { name: "Pilates na Parede — Glúteo", min: 12, level: "Iniciante" },
  { name: "Pilates na Parede — Abdômen", min: 10, level: "Iniciante" },
  { name: "Pilates na Parede — Pernas", min: 15, level: "Intermediário" },
  { name: "Ativação Metabólica Total", min: 18, level: "Intermediário" },
  { name: "Cardio Hormonal Leve", min: 20, level: "Iniciante" },
];

function TreinoSection() {
  return (
    <div className="space-y-5">
      <SectionHeader title="Treinos de Ativação Metabólica" desc="Pilates na Parede — curtos e eficientes." />
      <div className="space-y-3">
        {WORKOUTS.map((w) => (
          <div
            key={w.name}
            className="rounded-2xl bg-card border border-border p-4 flex items-center gap-3"
          >
            <div
              className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white"
              style={{ background: "var(--gradient-brand)" }}
            >
              <Dumbbell className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold truncate">{w.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {w.min} min · {w.level}
              </p>
            </div>
            <button
              className="rounded-full px-4 py-2 text-xs font-extrabold uppercase text-white"
              style={{ background: "var(--gradient-brand)" }}
            >
              Iniciar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ÁGUA ---------------- */
function AguaSection() {
  const goal = 8;
  const [count, setCount] = useState(0);

  useEffect(() => {
    const key = "pth_water_" + new Date().toDateString();
    const v = Number(localStorage.getItem(key) || "0");
    setCount(v);
  }, []);

  function update(v: number) {
    const next = Math.max(0, Math.min(goal + 4, v));
    setCount(next);
    const key = "pth_water_" + new Date().toDateString();
    localStorage.setItem(key, String(next));
  }

  const pct = Math.min(100, (count / goal) * 100);

  return (
    <div className="space-y-5">
      <SectionHeader title="Hidratação Hormonal" desc={`Meta: ${goal} copos de água por dia.`} />
      <div className="rounded-3xl bg-card border border-border p-6 text-center">
        <div
          className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full border-4"
          style={{ borderColor: "var(--brand)" }}
        >
          <div>
            <p className="text-4xl font-extrabold" style={{ color: "var(--brand)" }}>
              {count}
            </p>
            <p className="text-xs text-muted-foreground">de {goal} copos</p>
          </div>
        </div>
        <div className="h-2 w-full bg-secondary rounded-full overflow-hidden mb-5">
          <div
            className="h-full transition-all"
            style={{ width: `${pct}%`, background: "var(--gradient-brand)" }}
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => update(count - 1)}
            className="h-12 w-12 rounded-full bg-secondary text-foreground font-bold"
          >
            <Minus className="h-5 w-5 mx-auto" />
          </button>
          <button
            onClick={() => update(count + 1)}
            className="h-14 px-6 rounded-full text-white font-extrabold uppercase text-sm"
            style={{ background: "var(--gradient-brand)" }}
          >
            <Plus className="h-5 w-5 inline -mt-0.5 mr-1" />
            Bebi um copo
          </button>
        </div>
      </div>
      <div className="rounded-2xl bg-card border border-border p-4 text-sm text-foreground/80">
        💧 Dica: comece o dia com 2 copos de água morna + limão. Ativa o metabolismo e melhora a digestão.
      </div>
    </div>
  );
}

/* ---------------- FOTOS ---------------- */
type Photo = { id: string; label: "antes" | "depois"; date: string; data: string };

function FotosSection() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);
  const [nextLabel, setNextLabel] = useState<"antes" | "depois">("antes");

  useEffect(() => {
    const raw = localStorage.getItem("pth_photos");
    if (raw) {
      try {
        setPhotos(JSON.parse(raw));
      } catch {}
    }
  }, []);

  function save(list: Photo[]) {
    setPhotos(list);
    try {
      localStorage.setItem("pth_photos", JSON.stringify(list));
    } catch {}
  }

  function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const p: Photo = {
        id: String(Date.now()),
        label: nextLabel,
        date: new Date().toLocaleDateString("pt-BR"),
        data: reader.result as string,
      };
      save([p, ...photos]);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  }

  function remove(id: string) {
    save(photos.filter((p) => p.id !== id));
  }

  return (
    <div className="space-y-5">
      <SectionHeader title="Antes & Depois" desc="Acompanhe sua evolução visual." />

      <div className="rounded-2xl bg-card border border-border p-4">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
          Adicionar foto
        </p>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {(["antes", "depois"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setNextLabel(l)}
              className={`py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider border ${
                nextLabel === l ? "text-white border-transparent" : "border-border text-foreground/70"
              }`}
              style={nextLabel === l ? { background: "var(--gradient-brand)" } : undefined}
            >
              {l}
            </button>
          ))}
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={onPick}
          className="hidden"
        />
        <button
          onClick={() => fileRef.current?.click()}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-extrabold uppercase text-white"
          style={{ background: "var(--gradient-brand)" }}
        >
          <Camera className="h-4 w-4" />
          Tirar / escolher foto
        </button>
      </div>

      {photos.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground py-8">
          Nenhuma foto ainda. Comece registrando seu "antes".
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {photos.map((p) => (
            <div key={p.id} className="relative rounded-2xl overflow-hidden border border-border bg-card">
              <img src={p.data} alt={p.label} className="w-full h-44 object-cover" />
              <span
                className="absolute top-2 left-2 rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                {p.label}
              </span>
              <button
                onClick={() => remove(p.id)}
                className="absolute top-2 right-2 h-7 w-7 grid place-items-center rounded-full bg-black/60 text-white"
                aria-label="Remover"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
              <div className="px-3 py-2 text-[11px] text-muted-foreground">{p.date}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------------- ACELERADORES ---------------- */
function AceleradoresSection() {
  return (
    <div className="space-y-5">
      <div
        className="rounded-3xl p-5 text-white"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-90">
          <Sparkles className="h-4 w-4" />
          Aceleradores de Resultados
        </div>
        <h2 className="mt-2 text-2xl font-extrabold leading-tight">
          Potencialize sua transformação
        </h2>
        <p className="mt-1.5 text-sm text-white/90">
          Complementos selecionados para acelerar a queima de gordura e potencializar o Protocolo.
        </p>
      </div>

      <div className="space-y-3">
        {ORDER_BUMPS.map((b) => (
          <a
            key={b.title}
            href={b.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl bg-card border border-border p-4 active:scale-[0.99] transition"
          >
            <div className="flex items-start gap-3">
              <div
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white"
                style={{ background: "var(--gradient-brand)" }}
              >
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold leading-tight">{b.title}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{b.desc}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-extrabold" style={{ color: "var(--brand)" }}>
                    {b.price}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase text-white"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    Adicionar <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <p className="text-[11px] text-center text-muted-foreground">
        Pagamento seguro · Acesso liberado imediatamente após a compra.
      </p>
    </div>
  );
}

/* ---------------- HELPERS ---------------- */
function SectionHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="text-sm text-muted-foreground mt-1">{desc}</p>
    </div>
  );
}

function LockedSection({ title }: { title: string }) {
  return (
    <div className="rounded-3xl border-2 border-dashed p-8 text-center" style={{ borderColor: "var(--brand)" }}>
      <div
        className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl text-white"
        style={{ background: "var(--gradient-brand)" }}
      >
        <Lock className="h-7 w-7" />
      </div>
      <h2 className="text-xl font-extrabold">{title}</h2>
      <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
        Esta área faz parte do plano <strong>Protocolo Termo Hormonal Completo</strong>.
        Faça o upgrade e libere todos os recursos do App.
      </p>
      <a
        href="/#planos"
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold uppercase text-white animate-pulse-cta"
        style={{ background: "var(--gradient-brand)" }}
      >
        <Flame className="h-4 w-4" />
        Fazer upgrade
      </a>
    </div>
  );
}

// suppress unused warning
void useMemo;
