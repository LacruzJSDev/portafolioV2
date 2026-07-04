import type { Metadata } from "next";
import { CopyCurl } from "@/components/CopyCurl";
import { site, apiBase } from "@/lib/site";

export const metadata: Metadata = {
  title: "API pública",
  description:
    "Documentación de la API REST pública del portafolio de Juan Carlos Lacruz: perfil, experiencia, proyectos y stack en JSON, sin autenticación.",
  alternates: { canonical: "/api" },
};

const endpoints = [
  {
    path: `${apiBase}`,
    name: "Índice",
    desc: "Punto de entrada: lista todos los endpoints disponibles.",
  },
  {
    path: `${apiBase}/profile`,
    name: "Perfil",
    desc: "Quién soy: rol, ubicación, resumen, principios de trabajo, idiomas y contacto.",
  },
  {
    path: `${apiBase}/experience`,
    name: "Experiencia",
    desc: "Historial profesional y formación, en formato changelog de deploys.",
  },
  {
    path: `${apiBase}/projects`,
    name: "Proyectos",
    desc: "Proyectos publicados con stack, estado y puntos destacados.",
  },
  {
    path: `${apiBase}/stack`,
    name: "Stack",
    desc: "Tecnologías que uso, agrupadas y con años de experiencia real.",
  },
];

export default function ApiDocsPage() {
  return (
    <div className="py-16 sm:py-24">
      <p className="font-mono text-sm text-muted">
        <span className="text-accent">$</span> man lacruz-api
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        Un CV al que puedes hacer <span className="text-accent">curl</span>
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        Todo el contenido de este portafolio se sirve también como API REST pública, versionada y
        con CORS abierto. Sin autenticación, sin límites razonables que temer, solo{" "}
        <code className="font-mono text-sm text-foreground">GET</code>. La misma fuente de datos
        tipada alimenta el HTML que estás leyendo y estos endpoints.
      </p>

      <h2 className="section-label mt-16">
        <span className="idx">GET</span> endpoints
      </h2>
      <ul className="mt-8 space-y-4">
        {endpoints.map((e) => {
          const cmd = `curl ${site.url}${e.path}`;
          return (
            <li key={e.path} className="card rounded-lg p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-mono text-sm">
                  <span className="mr-3 rounded bg-ok/10 px-2 py-0.5 text-xs font-semibold text-ok">
                    GET
                  </span>
                  <a href={e.path} className="text-foreground hover:text-accent">
                    {e.path}
                  </a>
                </h3>
                <CopyCurl command={cmd} />
              </div>
              <p className="mt-3 text-sm text-muted">{e.desc}</p>
            </li>
          );
        })}
      </ul>

      <h2 className="section-label mt-16">
        <span className="idx">?</span> por qué existe esto
      </h2>
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
        Porque mi trabajo diario es construir y mantener APIs REST, y me pareció más honesto
        demostrarlo que enumerarlo. Si integras esta API en algo curioso,{" "}
        <a href={`mailto:${site.email}`} className="text-accent hover:underline">
          escríbeme
        </a>
        : me encantará verlo.
      </p>
    </div>
  );
}
