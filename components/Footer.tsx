import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-faint">
              ¿Hablamos?
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 inline-block text-lg font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
            >
              {site.email}
            </a>
          </div>
          <ul className="flex gap-5 font-mono text-xs text-muted">
            <li>
              <a href={site.github} rel="me noopener" target="_blank" className="hover:text-accent">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href={site.linkedin} rel="me noopener" target="_blank" className="hover:text-accent">
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-8 font-mono text-[11px] leading-relaxed text-faint">
          © {new Date().getFullYear()} {site.author} · Hecho en Valencia con Next.js y sin
          plantillas · Este sitio expone su propia API:{" "}
          <a href="/api/v1/profile" className="text-muted hover:text-accent">
            /api/v1/profile
          </a>
        </p>
      </div>
    </footer>
  );
}
