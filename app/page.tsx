import Link from "next/link";
import { ServiceCard } from "@/components/ServiceCard";
import { CopyCurl } from "@/components/CopyCurl";
import { site, apiBase } from "@/lib/site";
import { profile, projects, deploys, dependencies } from "@/data/profile";

const uptimeYears = new Date().getFullYear() - profile.since;

const deployBadge = {
  work: { label: "producción", className: "border-ok/40 text-ok" },
  education: { label: "formación", className: "border-edge-strong text-muted" },
  wip: { label: "canary", className: "border-warn/40 text-warn" },
} as const;

export default function Home() {
  const groups = ["frontend", "backend", "datos", "devops", "herramientas"] as const;

  return (
    <div className="flex flex-col gap-24 py-16 sm:gap-32 sm:py-24">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section aria-label="Presentación" className="rise-in">
        <p className="font-mono text-sm text-muted">
          <span className="text-accent">$</span> whoami
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Juan Carlos
          <br />
          Lacruz Lacruz
          <span className="caret" aria-hidden />
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          <strong className="font-semibold text-foreground">{profile.role}</strong> en Valencia.
          Construyo y mantengo APIs REST con NestJS y aplicaciones web en producción con React y
          Next.js — de la tabla de PostgreSQL al píxel en Tailwind.
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-edge bg-edge sm:grid-cols-4">
          {[
            { k: "uptime", v: `${uptimeYears}+ años`, d: "en producción" },
            { k: "servicios", v: String(projects.length), d: "proyectos publicados" },
            { k: "estado", v: "operativo", d: profile.availability.toLowerCase() },
            { k: "región", v: "vlc-es", d: "también en remoto" },
          ].map((m) => (
            <div key={m.k} className="bg-surface p-4">
              <dt className="font-mono text-[11px] uppercase tracking-widest text-faint">{m.k}</dt>
              <dd className="mt-1 text-xl font-semibold text-accent">{m.v}</dd>
              <dd className="text-xs text-muted">{m.d}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="rounded bg-accent px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            Contactar
          </a>
          <Link
            href="/proyectos"
            className="rounded border border-edge-strong px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Ver proyectos
          </Link>
          <span className="hidden font-mono text-xs text-faint md:inline">
            o pulsa <kbd>⌘</kbd> <kbd>K</kbd>
          </span>
        </div>
      </section>

      {/* ── Servicios (proyectos) ────────────────────────────────── */}
      <section aria-labelledby="servicios">
        <h2 id="servicios" className="section-label">
          <span className="idx">01</span> servicios en producción
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ServiceCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* ── Historial de deploys (experiencia) ───────────────────── */}
      <section aria-labelledby="deploys">
        <h2 id="deploys" className="section-label">
          <span className="idx">02</span> historial de deploys
        </h2>
        <ol className="mt-8 space-y-0 border-l border-edge">
          {deploys.map((d) => {
            const badge = deployBadge[d.kind];
            return (
              <li key={d.version} className="relative pb-10 pl-8 last:pb-0">
                <span
                  className="absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-background bg-accent"
                  aria-hidden
                />
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="font-semibold text-accent">{d.version}</span>
                  <span className="text-faint">{d.period}</span>
                  <span className={`rounded-full border px-2 py-0.5 text-[10px] ${badge.className}`}>
                    {badge.label}
                  </span>
                </div>
                <h3 className="mt-2 text-lg font-semibold">
                  {d.title}
                  {d.org && <span className="font-normal text-muted"> · {d.org}</span>}
                </h3>
                <p className="mt-1 text-sm text-muted">{d.summary}</p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                  {d.changes.map((c) => (
                    <li key={c} className="flex gap-2">
                      <span className="select-none text-accent" aria-hidden>
                        +
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ── Dependencias (stack) ─────────────────────────────────── */}
      <section aria-labelledby="stack">
        <h2 id="stack" className="section-label">
          <span className="idx">03</span> dependencies
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Mi stack, en el formato en el que pienso: un manifiesto de dependencias. Las versiones son
          años de uso real, no números de marketing.
        </p>
        <div className="codeblock mt-6 rounded-lg p-5">
          <p className="text-faint">{"{"}</p>
          {groups.map((group, gi) => {
            const deps = dependencies.filter((d) => d.group === group);
            return (
              <div key={group} className="pl-4">
                <p className="pt-1 text-faint">&quot;{group}&quot;: {"{"}</p>
                <dl>
                  {deps.map((d, i) => (
                    <div key={d.name} className="flex flex-wrap pl-4">
                      <dt className="text-accent">&quot;{d.name}&quot;</dt>
                      <dd className="text-muted">
                        <span className="text-faint">: </span>&quot;{d.version}&quot;
                        {i < deps.length - 1 ? <span className="text-faint">,</span> : null}
                        {d.status === "learning" && (
                          <span className="ml-2 text-[10px] uppercase text-warn">// en curso</span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="text-faint">
                  {"}"}
                  {gi < groups.length - 1 ? "," : ""}
                </p>
              </div>
            );
          })}
          <p className="text-faint">{"}"}</p>
        </div>
      </section>

      {/* ── Runbook (principios) ─────────────────────────────────── */}
      <section aria-labelledby="runbook">
        <h2 id="runbook" className="section-label">
          <span className="idx">04</span> runbook personal
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {profile.principles.map((p, i) => (
            <li key={p} className="card rounded-lg p-5 text-sm leading-relaxed text-muted">
              <span className="mb-2 block font-mono text-xs text-accent">
                regla_{String(i + 1).padStart(2, "0")}
              </span>
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs text-faint">
          idiomas: castellano (nativo) · valenciano (alto) · alemán (alto) · inglés (medio)
        </p>
      </section>

      {/* ── API pública ──────────────────────────────────────────── */}
      <section aria-labelledby="api">
        <h2 id="api" className="section-label">
          <span className="idx">05</span> api pública
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Este portafolio no solo habla de APIs: <strong className="text-foreground">es una</strong>.
          Todo lo que ves en esta página también se sirve como JSON desde endpoints reales y
          versionados. Pruébalo desde tu terminal:
        </p>
        <div className="codeblock mt-6 flex items-center justify-between gap-4 rounded-lg p-4">
          <code>
            <span className="text-accent">$</span> curl {site.url}
            {apiBase}/profile
          </code>
          <CopyCurl command={`curl ${site.url}${apiBase}/profile`} />
        </div>
        <p className="mt-4 font-mono text-xs text-muted">
          <Link href="/api" className="text-accent hover:underline">
            → documentación completa de la API
          </Link>
        </p>
      </section>
    </div>
  );
}
