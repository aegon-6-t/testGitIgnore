function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Top nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_0_4px_rgba(239,68,68,0.15)]" />
            <span className="text-sm font-semibold tracking-[0.2em] text-zinc-200">
              FERRARI
            </span>
            <span className="hidden text-sm text-zinc-400 sm:inline">
              Landing concept
            </span>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a className="hover:text-white" href="#models">
              Modèles
            </a>
            <a className="hover:text-white" href="#performance">
              Performance
            </a>
            <a className="hover:text-white" href="#heritage">
              Héritage
            </a>
          </nav>

          <a
            href="#cta"
            className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300/50"
          >
            Demander une démo
          </a>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="relative overflow-hidden">
          {/* Glow + textures */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.85))]" />
          </div>

          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div className="flex flex-col justify-center">
              <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                Série limitée • Expérience premium
              </p>

              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                La vitesse, sculptée en émotion.
              </h1>

              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-zinc-300">
                Une landing page moderne (concept) pour présenter une marque
                automobile ultra-premium. Design noir profond, accents rouges,
                et sections claires pour convertir.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300/50"
                >
                  Réserver un rendez-vous
                </a>
                <a
                  href="#models"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  Voir les modèles
                </a>
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs text-zinc-400">0–100 km/h</dt>
                  <dd className="mt-1 text-lg font-semibold text-white">
                    2.9s
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs text-zinc-400">Puissance</dt>
                  <dd className="mt-1 text-lg font-semibold text-white">
                    740 ch
                  </dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-xs text-zinc-400">Vitesse max</dt>
                  <dd className="mt-1 text-lg font-semibold text-white">
                    330+
                  </dd>
                </div>
              </dl>
            </div>

            {/* Car “card” (sans image externe : juste une forme stylée) */}
            <div className="relative">
              <div className="absolute inset-0 -rotate-2 rounded-[32px] bg-gradient-to-br from-red-500/20 via-white/5 to-transparent blur-sm" />
              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-[0.25em] text-zinc-400">
                      SIGNATURE
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Rosso Corsa
                    </p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-zinc-950/60 px-3 py-1 text-xs text-zinc-300">
                    Concept UI
                  </div>
                </div>

                <div className="mt-8">
                  <div className="relative h-56 rounded-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(239,68,68,0.35),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08),transparent_55%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent)]">
                    <div className="absolute inset-x-6 bottom-7 h-16 rounded-[28px] bg-black/30 blur-sm" />
                    <div className="absolute inset-x-10 bottom-10 h-10 rounded-[20px] bg-red-500/25 blur-md" />
                    <div className="absolute inset-x-8 bottom-12 h-14 rounded-[28px] border border-white/10 bg-white/5" />
                    <div className="absolute left-12 bottom-14 h-6 w-6 rounded-full border border-white/10 bg-zinc-900" />
                    <div className="absolute right-12 bottom-14 h-6 w-6 rounded-full border border-white/10 bg-zinc-900" />
                  </div>
                  <p className="mt-4 text-sm text-zinc-300">
                    Pas d’images officielles utilisées : juste une “carte” stylée
                    pour tester le rendu d’une landing page.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                    <p className="text-xs text-zinc-400">Mode</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      Track
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                    <p className="text-xs text-zinc-400">Transmission</p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      DCT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Models */}
        <section id="models" className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Modèles (exemples)
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-zinc-300">
                Des cartes simples et lisibles : parfait pour une landing page.
              </p>
            </div>
            <span className="hidden text-sm text-zinc-400 md:block">
              Défilement rapide
            </span>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                name: 'GT',
                desc: 'Confort longue distance, silhouette sculptée.',
                tag: 'Grand Tourisme',
              },
              {
                name: 'Sport',
                desc: 'Réactivité pure, équilibre et précision.',
                tag: 'Performance',
              },
              {
                name: 'Track',
                desc: 'Réglages agressifs, sensations maximales.',
                tag: 'Circuit',
              },
            ].map((m) => (
              <article
                key={m.name}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10"
              >
                <p className="text-xs tracking-[0.25em] text-zinc-400">
                  {m.tag}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-300">{m.desc}</p>
                <div className="mt-5 h-px bg-white/10" />
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Détails</span>
                  <span className="font-semibold text-white group-hover:text-red-300">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Performance */}
        <section
          id="performance"
          className="border-y border-white/10 bg-white/[0.03]"
        >
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Performance lisible
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-300">
              On met les infos importantes en avant : chiffres, bénéfices, et
              appels à l’action.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-semibold text-white">
                  Accélération
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  Réponse instantanée, couple disponible, sensation “catapulte”.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[82%] rounded-full bg-red-500" />
                  </div>
                  <span className="text-sm font-semibold text-white">82%</span>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-base font-semibold text-white">
                  Aérodynamique
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  Stabilité à haute vitesse, appui, et efficacité.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[74%] rounded-full bg-red-500" />
                  </div>
                  <span className="text-sm font-semibold text-white">74%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage */}
        <section id="heritage" className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Héritage & histoire
              </h2>
              <p className="mt-2 text-sm text-zinc-300">
                Une section “storytelling” aide souvent à vendre : elle donne du
                sens au produit.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-red-400" />
                  <span>
                    Une identité forte : minimalisme, contraste, “premium”.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-red-400" />
                  <span>
                    Navigation simple : on trouve vite ce qu’on cherche.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-red-400" />
                  <span>
                    Appels à l’action clairs : prendre rendez-vous, demander une
                    démo.
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
              <p className="text-xs tracking-[0.25em] text-zinc-400">
                NOTE IMPORTANTE
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                Concept de design (non officiel)
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Cette page est un exercice technique React + Tailwind. Je n’ai
                pas utilisé de logos, images, ni textes officiels.
              </p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                <p className="text-xs text-zinc-400">Astuce débutant</p>
                <p className="mt-1 text-sm text-zinc-200">
                  Tailwind = des “classes” sur tes balises HTML. Au lieu
                  d’écrire du CSS à la main, tu décris le style directement sur
                  l’élément (couleur, marges, tailles, etc.).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="mx-auto max-w-6xl px-5 pb-20">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-500/25 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  Prêt à tester la page ?
                </h2>
                <p className="mt-2 text-sm text-zinc-300">
                  Lance le serveur local, puis ouvre ton navigateur. Ensuite on
                  pourra améliorer (animations, images, responsive, etc.).
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <a
                  href="#models"
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/10"
                >
                  Revoir les sections
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white hover:bg-red-400"
                >
                  Continuer
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} • Landing concept</p>
          <p className="text-zinc-500">
            React + Tailwind • Démo pédagogique
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
