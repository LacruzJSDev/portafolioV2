import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/profile";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: `${project.tagline} Proyecto de ${site.author} construido con ${project.stack.join(", ")}.`,
    alternates: { canonical: `/proyectos/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${site.author}`,
      description: project.tagline,
      type: "article",
    },
  };
}

const statusLabel = {
  production: { text: "en producción", className: "text-ok" },
  stable: { text: "estable", className: "text-muted" },
  beta: { text: "beta", className: "text-warn" },
} as const;

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const status = statusLabel[project.status];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    author: { "@type": "Person", name: site.author, url: site.url },
    url: `${site.url}/proyectos/${project.slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    datePublished: project.year,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
      { "@type": "ListItem", position: 2, name: "Proyectos", item: `${site.url}/proyectos` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `${site.url}/proyectos/${project.slug}`,
      },
    ],
  };

  return (
    <article className="py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbJsonLd]) }}
      />
      <nav aria-label="Miga de pan" className="font-mono text-xs text-faint">
        <Link href="/" className="hover:text-accent">
          ~
        </Link>
        <span className="mx-1">/</span>
        <Link href="/proyectos" className="hover:text-accent">
          proyectos
        </Link>
        <span className="mx-1">/</span>
        <span className="text-muted">{project.slug}</span>
      </nav>

      <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs">
        <span className="text-faint">{project.service}</span>
        <span className={`flex items-center gap-1.5 ${status.className}`}>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
          {status.text}
        </span>
        <span className="text-faint">deploy inicial: {project.year}</span>
      </div>

      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">{project.name}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{project.description}</p>

      <h2 className="section-label mt-14">
        <span className="idx">01</span> características
      </h2>
      <ul className="mt-6 space-y-3">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
            <span className="select-none font-mono text-accent" aria-hidden>
              ✓
            </span>
            {h}
          </li>
        ))}
      </ul>

      <h2 className="section-label mt-14">
        <span className="idx">02</span> stack
      </h2>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded border border-edge bg-surface px-3 py-1.5 font-mono text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-14 flex flex-wrap gap-3">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener"
            className="rounded bg-accent px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-85"
          >
            Ver en producción ↗
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener"
            className="rounded border border-edge-strong px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            Código en GitHub ↗
          </a>
        )}
        <Link
          href="/proyectos"
          className="rounded px-4 py-2 text-sm text-muted transition-colors hover:text-accent"
        >
          ← Todos los proyectos
        </Link>
      </div>
    </article>
  );
}
