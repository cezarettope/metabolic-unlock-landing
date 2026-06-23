import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CHECKOUT_URL = "https://pay.hotmart.com/LINKAQUI";
const WHATSAPP_URL = "https://wa.me/5500000000000";

export const Route = createFileRoute("/")({
  component: SalesPage,
  head: () => ({
    meta: [
      { title: "Protocolo Termo Hormonal — Destrave seu metabolismo por R$37" },
      {
        name: "description",
        content:
          "Nutricionista revela o protocolo de 3 semanas para regular o cortisol, reativar o metabolismo e fazer o corpo voltar a emagrecer. R$37, pagamento único.",
      },
      { property: "og:title", content: "Protocolo Termo Hormonal — R$37" },
      {
        property: "og:description",
        content:
          "Por que dieta e academia não funcionam? Seu cortisol está bloqueando o metabolismo. Destrave em 21 dias.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://saudehormonal.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://saudehormonal.lovable.app/" }],
  }),
});

function useCountdown() {
  const [left, setLeft] = useState({ h: 23, m: 59, s: 59 });
  useEffect(() => {
    const KEY = "pth_deadline";
    let deadline = Number(localStorage.getItem(KEY));
    if (!deadline || Number.isNaN(deadline) || deadline < Date.now()) {
      deadline = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem(KEY, String(deadline));
    }
    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1000);
      setLeft({ h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(left.h)}h ${pad(left.m)}m ${pad(left.s)}s`;
}

function CTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`inline-block w-full rounded-xl bg-[#c9a84c] px-6 py-5 text-center text-base font-bold uppercase tracking-wide text-[#1a3a2a] shadow-lg shadow-black/20 transition hover:bg-[#d8b85c] active:scale-[0.98] sm:text-lg ${className}`}
    >
      {children}
    </a>
  );
}

function SalesPage() {
  const timer = useCountdown();

  return (
    <div className="min-h-screen bg-[#f0ede6] font-sans text-[#1a3a2a]">
      {/* Urgency bar */}
      <div className="sticky top-0 z-50 bg-[#7a1a1a] px-3 py-2 text-center text-xs font-semibold text-[#f0ede6] sm:text-sm">
        ⚠ Oferta por tempo limitado — Apenas R$37 · Garantia de 30 dias
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1a3a2a] to-[#2d5a3d] px-5 py-12 text-[#f0ede6] sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#c9a84c] sm:text-sm">
              Nutricionista revela o motivo real
            </p>
            <h1 className="font-[ui-serif,Georgia,serif] text-3xl leading-tight text-[#f0ede6] sm:text-5xl">
              Por que você faz dieta, corta carboidrato, se mata na academia… e a balança simplesmente não desce?
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#cde0d2] sm:text-lg">
              A resposta provavelmente não é falta de força de vontade. É o seu cortisol bloqueando o metabolismo — e existe um protocolo de 3 semanas para destravá-lo.
            </p>
            <div className="mt-8">
              <CTA>Quero destravar meu metabolismo agora</CTA>
              <p className="mt-3 text-center text-xs text-[#cde0d2] sm:text-sm">
                🔒 Pagamento seguro · Acesso imediato · Garantia de 30 dias
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-[#c9a84c] bg-[#1a3a2a] font-[ui-serif,Georgia,serif] text-6xl text-[#c9a84c] shadow-2xl sm:h-64 sm:w-64 sm:text-7xl">
              AA
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-[ui-serif,Georgia,serif] text-3xl text-[#1a3a2a] sm:text-4xl">
            Você se identifica com algum desses sinais?
          </h2>
          <ul className="mt-10 space-y-4">
            {[
              "Faz dieta há meses e mal perde 1kg",
              "Acorda cansada mesmo dormindo 8 horas",
              "Barriga inchada que não some com nenhuma dieta",
              "Ansiedade e compulsão por doce no final do dia",
              "Já tentou low carb, jejum, shake… nada funcionou de vez",
              'Médico diz que seus exames "estão normais" mas você não se sente bem',
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-lg border border-[#1a3a2a]/10 bg-white p-4 text-[#1a3a2a]"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#7a1a1a] text-xs font-bold text-white">
                  ✗
                </span>
                <span className="text-sm sm:text-base">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-lg bg-[#1a3a2a] p-5 text-center text-sm text-[#f0ede6] sm:text-base">
            Se você marcou <strong className="text-[#c9a84c]">3 ou mais</strong>, seu problema provavelmente não é disciplina. É hormonal.
          </p>
        </div>
      </section>

      {/* MECANISMO */}
      <section className="bg-[#1a3a2a] px-5 py-16 text-[#f0ede6] sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-[ui-serif,Georgia,serif] text-3xl sm:text-4xl">
            O que ninguém te contou sobre o cortisol e o peso
          </h2>
          <p className="mt-3 text-center text-base text-[#c9a84c] sm:text-lg">
            O hormônio do estresse literalmente programa seu corpo para acumular gordura
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🧠",
                title: "Cortisol alto → Insulina desregulada",
                text: "Gordura acumulada — especialmente na barriga — mesmo comendo pouco.",
              },
              {
                icon: "😴",
                title: "Sono ruim eleva o cortisol",
                text: "Que piora o sono. Um ciclo vicioso que nenhuma dieta consegue quebrar.",
              },
              {
                icon: "🔥",
                title: "Metabolismo lento não é genética",
                text: "É sinal de que seus hormônios precisam de um reset completo.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-[#c9a84c]/30 bg-[#2d5a3d] p-6"
              >
                <div className="text-4xl">{b.icon}</div>
                <h3 className="mt-3 font-[ui-serif,Georgia,serif] text-lg text-[#c9a84c]">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#cde0d2]">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="bg-[#2d5a3d] px-5 py-16 text-[#f0ede6] sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-[#c9a84c]/40 bg-[#1a3a2a] p-7 sm:p-10">
            <h2 className="text-center font-[ui-serif,Georgia,serif] text-3xl text-[#c9a84c] sm:text-4xl">
              O Protocolo Termo Hormonal
            </h2>
            <p className="mt-3 text-center text-base text-[#cde0d2] sm:text-lg">
              Um método de 3 semanas criado para regular o cortisol, reativar o metabolismo e fazer o corpo voltar a emagrecer.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Protocolo alimentar anti-cortisol (21 dias, passo a passo)",
                "Guia de termogênese natural — alimentos que aceleram o metabolismo hormonal",
                "Plano de sono reparador para regular os hormônios enquanto você dorme",
                "Lista de exames hormonais para pedir ao médico",
                "Cardápio semanal pronto (sem contar calorias)",
                "Acesso vitalício + atualizações gratuitas",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 text-lg text-[#c9a84c]">✓</span>
                  <span className="text-sm text-[#f0ede6] sm:text-base">{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTA>Quero o protocolo por R$37</CTA>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-[ui-serif,Georgia,serif] text-3xl text-[#1a3a2a] sm:text-4xl">
            Resultados reais de quem já aplicou
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { q: "Perdi 6kg em 3 semanas sem passar fome. Meu inchaço sumiu na primeira semana!", n: "Carla M.", a: "38 anos", i: "CM" },
              { q: "Finalmente entendi por que eu não emagrecía mesmo fazendo tudo certo. Mudou minha vida.", n: "Fernanda R.", a: "44 anos", i: "FR" },
              { q: "Resultado que 2 anos de academia não deram, esse protocolo deu em 21 dias.", n: "Juliana S.", a: "41 anos", i: "JS" },
            ].map((d) => (
              <div key={d.n} className="rounded-xl border border-[#1a3a2a]/10 bg-white p-5 shadow-sm">
                <p className="text-sm leading-relaxed text-[#1a3a2a]">"{d.q}"</p>
                <div className="mt-4 flex items-center gap-3 border-t border-[#1a3a2a]/10 pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[#1a3a2a] text-xs font-bold text-[#c9a84c]">
                    {d.i}
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-[#1a3a2a]">{d.n}</div>
                    <div className="text-[#1a3a2a]/60">{d.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <div className="text-2xl text-[#c9a84c]">⭐⭐⭐⭐⭐</div>
            <p className="mt-2 text-sm text-[#1a3a2a] sm:text-base">
              <strong>4.9/5</strong> · +1.200 mulheres já transformaram o metabolismo
            </p>
          </div>
        </div>
      </section>

      {/* AMANDA */}
      <section className="bg-[#1a3a2a] px-5 py-16 text-[#f0ede6] sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.5fr] md:items-center">
          <div className="flex justify-center">
            <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-[#c9a84c] bg-[#2d5a3d] font-[ui-serif,Georgia,serif] text-6xl text-[#c9a84c] shadow-2xl">
              AA
            </div>
          </div>
          <div>
            <h2 className="font-[ui-serif,Georgia,serif] text-3xl text-[#c9a84c] sm:text-4xl">
              Amanda Albuquerque
            </h2>
            <p className="mt-1 text-sm text-[#cde0d2]">
              Nutricionista · CRN 10-34821 · Saúde Hormonal & Emagrecimento Metabólico
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#f0ede6] sm:text-lg">
              Olá, sou a Amanda Albuquerque, nutricionista especializada em saúde hormonal há mais de 7 anos. Atendo centenas de mulheres que chegam ao consultório esgotadas de dietas que não funcionam — e a maioria tem o mesmo problema: o cortisol desregulado sabotando tudo. Criei este protocolo para ser acessível e prático, para que qualquer mulher possa aplicar em casa, sem precisar de consulta individual.
            </p>
          </div>
        </div>
      </section>

      {/* OFERTA + PREÇO */}
      <section className="bg-[#0f2419] px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border-2 border-[#c9a84c] bg-[#1a3a2a] p-7 text-center text-[#f0ede6] shadow-2xl shadow-[#c9a84c]/10 sm:p-10">
            <p className="text-sm uppercase tracking-widest text-[#c9a84c]">Oferta especial</p>
            <p className="mt-4 text-lg text-[#cde0d2] line-through opacity-70">R$197,00</p>
            <p className="font-[ui-serif,Georgia,serif] text-6xl text-[#c9a84c] sm:text-7xl">
              R$37
            </p>
            <p className="mt-2 text-sm text-[#cde0d2]">
              Pagamento único. Sem mensalidade. Acesso vitalício.
            </p>

            <div className="mt-7 rounded-lg bg-[#7a1a1a] p-4">
              <p className="text-xs uppercase tracking-wider text-[#f0ede6]/80">
                Essa condição especial expira em:
              </p>
              <p className="mt-1 font-mono text-2xl font-bold text-[#f0ede6] sm:text-3xl">
                {timer}
              </p>
            </div>

            <div className="mt-7">
              <CTA>Garantir minha vaga por R$37 agora</CTA>
            </div>

            <p className="mt-4 text-xs text-[#cde0d2] sm:text-sm">
              💳 Cartão · Pix · Boleto — Parcelado em até 12x sem juros
            </p>
            <p className="mt-2 text-xs text-[#cde0d2]/80">
              🔒 Compra 100% segura · Processado pela Hotmart/Kiwify
            </p>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#c9a84c]/40 bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="text-6xl text-[#c9a84c]">🛡️</div>
          <h2 className="mt-4 font-[ui-serif,Georgia,serif] text-2xl text-[#1a3a2a] sm:text-3xl">
            Garantia Incondicional de 30 Dias
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#1a3a2a] sm:text-base">
            Se em 30 dias você não ver nenhuma diferença no seu metabolismo, seu dinheiro volta 100%. Sem perguntas, sem burocracia. Você não tem nada a perder — e tem um metabolismo novo a ganhar.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f0ede6] px-5 pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-[ui-serif,Georgia,serif] text-3xl text-[#1a3a2a] sm:text-4xl">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {[
              {
                q: "Para quem é esse protocolo?",
                a: "Mulheres acima de 25 anos que sentem dificuldade de emagrecer mesmo seguindo dietas.",
              },
              {
                q: "Preciso de consulta com nutricionista?",
                a: "Não. O protocolo é 100% autoaplicável em casa.",
              },
              {
                q: "Em quanto tempo vejo resultados?",
                a: "A maioria sente diferença já na primeira semana (inchaço e energia). O emagrecimento se consolida em 21 dias.",
              },
              {
                q: "Como acesso o material?",
                a: "Imediatamente após o pagamento, você recebe um e-mail com o link de acesso.",
              },
              {
                q: "E se não funcionar para mim?",
                a: "Você tem 30 dias de garantia total. Pediu reembolso, devolvemos sem questionar.",
              },
            ].map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="mb-3 overflow-hidden rounded-lg border border-[#1a3a2a]/15 bg-white px-4"
              >
                <AccordionTrigger className="text-left text-sm font-semibold text-[#1a3a2a] hover:no-underline sm:text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#1a3a2a]/80">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#1a3a2a] px-5 py-16 text-[#f0ede6] sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-2xl border-2 border-[#c9a84c] bg-[#2d5a3d] p-7 sm:p-10">
            <p className="text-lg text-[#cde0d2] line-through opacity-70">R$197,00</p>
            <p className="font-[ui-serif,Georgia,serif] text-6xl text-[#c9a84c] sm:text-7xl">
              R$37
            </p>
            <p className="mt-2 text-sm text-[#cde0d2]">Pagamento único · Acesso vitalício</p>
            <div className="mt-6">
              <CTA>Quero destravar meu metabolismo</CTA>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#cde0d2] sm:text-base">
            Você já gastou muito mais tentando dietas que não funcionaram. Por R$37 você finalmente entende o que está bloqueando seu metabolismo.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f2419] px-5 py-8 text-center text-xs text-[#cde0d2]/70">
        <p>© 2025 Protocolo Termo Hormonal · Amanda Albuquerque Nutrição</p>
        <p className="mt-2">
          <a href="#" className="underline hover:text-[#c9a84c]">Política de Privacidade</a>
          <span className="mx-2">·</span>
          <a href="#" className="underline hover:text-[#c9a84c]">Termos de Uso</a>
        </p>
      </footer>

      {/* WhatsApp float */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-2xl shadow-lg shadow-black/30 transition hover:scale-105"
      >
        💬
      </a>
    </div>
  );
}
