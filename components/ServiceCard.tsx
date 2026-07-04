import Link from "next/link";
import type { Project } from "@/data/profile";

const statusLabel: Record<Project["status"], { text: string; className: string }> = {
  production: { text: "en producción", className: "text-ok" },
  stable: { text: "estable", className: "text-muted" },
  beta: { text: "beta", className: "text-warn" },
};

export function ServiceCard({ project }: { project: Project }) {
  const status = statusLabel[project.status];
  return (
    <article className="card group relative flex flex-col gap-3 rounded-lg p-5">
      <div className="flex items-center justify-between font-mono text-xs">
        <span className="text-faint">{project.service}</span>
        <span className={`flex items-center gap-1.5 ${status.className}`}>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
          {status.text}
        </span>
      </div>
      <h3 className="text-lg font-semibold leading-snug">
        <Link
          href={`/proyectos/${project.slug}`}
          className="after:absolute after:inset-0 group-hover:text-accent"
        >
          {project.name}
        </Link>
      </h3>
      <p className="text-sm leading-relaxed text-muted">{project.tagline}</p>
      <ul className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-2 font-mono text-[11px] text-faint">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}
