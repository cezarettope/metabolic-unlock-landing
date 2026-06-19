import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Flame, Lock, Mail, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [tier, setTier] = useState<"basico" | "completo">("completo");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    const name = email.split("@")[0] || "Aluna";
    localStorage.setItem(
      "pth_user",
      JSON.stringify({ email: email.trim(), name, tier }),
    );
    navigate({ to: "/app" });
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center px-5 py-10 text-white"
      style={{ background: "var(--gradient-dark)" }}
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-7">
          <div
            className="inline-flex h-14 w-14 items-center justify-center rounded-2xl mb-4"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-brand)" }}
          >
            <Flame className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-2xl font-extrabold">Entrar no App</h1>
          <p className="text-sm text-white/70 mt-1">Protocolo Termo Hormonal</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur space-y-4"
        >
          <label className="block">
            <span className="text-xs font-bold uppercase tracking-wider text-white/70">
              E-mail
            </span>
            <div className="mt-1 flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-3 py-3">
              <Mail className="h-4 w-4 text-white/60" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-white/40"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-xs font-bold uppercase tracking-wider text-white/70">
              Senha
            </span>
            <div className="mt-1 flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-3 py-3">
              <Lock className="h-4 w-4 text-white/60" />
              <input
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder="••••••••"
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-white/40"
              />
            </div>
          </label>

          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-white/70">
              Seu plano
            </span>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {(
                [
                  { id: "basico", label: "Básico" },
                  { id: "completo", label: "Completo" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setTier(opt.id)}
                  className={`rounded-xl py-3 text-sm font-bold transition border ${
                    tier === opt.id
                      ? "text-white border-transparent"
                      : "bg-white/5 border-white/10 text-white/70"
                  }`}
                  style={
                    tier === opt.id ? { background: "var(--gradient-brand)" } : undefined
                  }
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full py-4 font-extrabold uppercase tracking-wide text-sm text-white animate-pulse-cta hover:brightness-110 transition"
            style={{ background: "var(--gradient-brand)" }}
          >
            Entrar agora <ArrowRight className="h-4 w-4" />
          </button>

          <p className="text-[11px] text-center text-white/50">
            Acesso liberado automaticamente após o pagamento.
          </p>
        </form>

        <p className="mt-6 text-center text-sm text-white/70">
          Ainda não é aluna?{" "}
          <Link to="/" className="font-bold" style={{ color: "var(--brand)" }}>
            Ver planos
          </Link>
        </p>
      </div>
    </main>
  );
}
