/**
 * Fuente única de verdad del portafolio.
 * Estos datos alimentan tanto el HTML renderizado como la API pública (/api/v1/*).
 */

export type ServiceStatus = "production" | "stable" | "beta";

export interface Project {
  slug: string;
  service: string; // nombre estilo "servicio en producción"
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: ServiceStatus;
  year: string;
  highlights: string[];
  repo?: string;
  url?: string;
}

export interface Deploy {
  version: string;
  period: string;
  title: string;
  org?: string;
  kind: "work" | "education" | "wip";
  summary: string;
  changes: string[];
}

export interface Dependency {
  name: string;
  version: string; // "experiencia" expresada como versión
  status: "stable" | "learning";
  group: "frontend" | "backend" | "datos" | "devops" | "herramientas";
}

export const profile = {
  name: "Juan Carlos Lacruz Lacruz",
  role: "Desarrollador Web Full Stack",
  location: "Valencia, España",
  availability: "Disponible para nuevos proyectos",
  since: 2024, // primer deploy profesional
  summary:
    "Casi dos años construyendo y manteniendo APIs REST (NestJS, Node.js) y aplicaciones web en producción (React/Next.js), con testing automatizado y diseño de esquemas en PostgreSQL y MongoDB. Desarrollo proyectos completos de extremo a extremo: arquitectura, modelado de datos, frontend, backend y despliegue.",
  principles: [
    "Código limpio y mantenible: DRY, componentes reutilizables, proyectos estructurados para escalar.",
    "Testing como parte del flujo, no como trámite: Vitest, Jest y testing visual con Playwright.",
    "IA integrada en el flujo de trabajo real (Claude Code, MCPs) para acelerar sin perder calidad.",
    "Resolución de incidencias en producción bajo presión, con calma y con logs.",
  ],
  languages: [
    { name: "Castellano", level: "nativo" },
    { name: "Valenciano", level: "alto" },
    { name: "Alemán", level: "alto" },
    { name: "Inglés", level: "medio" },
  ],
} as const;

export const projects: Project[] = [
  {
    slug: "finanzas-personales",
    service: "svc-finanzas",
    name: "Finanzas personales",
    tagline: "App de finanzas local-first con OCR, modo privacidad y PIN.",
    description:
      "Aplicación personal de finanzas construida con React y Next.js donde los datos nunca salen del dispositivo: todo se almacena en local con IndexedDB. Incluye importación de tickets y extractos vía OCR, modo privacidad para ocultar cifras de un vistazo y bloqueo por PIN. Desplegada en Vercel con integración continua desde Git.",
    stack: ["Next.js", "React", "TypeScript", "IndexedDB", "OCR", "Vercel"],
    status: "production",
    year: "2025",
    highlights: [
      "Local-first: persistencia completa en IndexedDB, sin backend ni cuentas.",
      "Importación de movimientos mediante OCR.",
      "Modo privacidad y bloqueo por PIN.",
      "CI/CD en Vercel con despliegue continuo desde Git.",
    ],
    repo: "https://github.com/LacruzJSDev/FinanzApp",
  },
  {
    slug: "gestion-citas",
    service: "svc-citas",
    name: "Gestión de citas y agenda",
    tagline: "Reservas para pequeños negocios con backend en Spring Boot.",
    description:
      "Aplicación de gestión de citas y agenda pensada para pequeños negocios. Frontend en React con TypeScript y backend en Java con Spring Boot e Hibernate, incluyendo modelado relacional y toda la lógica de negocio de reservas: disponibilidad, solapamientos y estados de cita.",
    stack: ["React", "TypeScript", "Java", "Spring Boot", "Hibernate"],
    status: "stable",
    year: "2024",
    highlights: [
      "Modelado relacional completo del dominio de reservas.",
      "Lógica de negocio de disponibilidad y solapamiento de citas.",
      "Stack políglota: TypeScript en frontend, Java en backend.",
    ],
    repo: "https://github.com/LacruzJSDev/ment-time-app-nextjs",
  },
  {
    slug: "planificador-actividades",
    service: "svc-actividades",
    name: "Planificador de actividades",
    tagline: "Planificación para centros de atención a mayores, sin fricción.",
    description:
      "Plataforma de planificación de actividades para centros de atención a personas mayores. React en el frontend y Express en el backend, con un foco especial en usabilidad para usuarios no técnicos: flujos cortos, textos claros y cero jerga.",
    stack: ["React", "Express", "Node.js", "JavaScript"],
    status: "stable",
    year: "2024",
    highlights: [
      "Diseñada para usuarios no técnicos: usabilidad por delante de todo.",
      "API REST en Express con Node.js.",
      "Gestión de calendario y planificación semanal de actividades.",
    ],
    repo: "https://github.com/LacruzJSDev/resiadminfront",
  },
  {
    slug: "portafolio",
    service: "svc-portfolio",
    name: "Este portafolio",
    tagline: "Un portafolio que expone su propia API REST pública.",
    description:
      "Este mismo sitio: un portafolio construido como un sistema en producción. Next.js con App Router, una única fuente de datos tipada que alimenta tanto el HTML como una API REST pública y versionada (/api/v1), SEO técnico completo (JSON-LD, sitemap, Open Graph generado en el edge) y CSS sin librerías de animación.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "Vercel"],
    status: "production",
    year: "2026",
    highlights: [
      "API pública real: curl /api/v1/profile devuelve este CV en JSON.",
      "JSON-LD (Person, CreativeWork), sitemap y Open Graph dinámico.",
      "Una sola fuente de datos tipada para HTML y API.",
      "Sin librerías de animación: CSS moderno y poco JavaScript.",
    ],
    repo: "https://github.com/LacruzJSDev/portafolioV2",
  },
];

export const deploys: Deploy[] = [
  {
    version: "v2.x",
    period: "2024 — 2026",
    title: "Desarrollador Web Full Stack",
    kind: "work",
    summary:
      "Producto web en producción: API REST con NestJS y aplicación React/Next.js, en equipo Scrum.",
    changes: [
      "Mantenimiento y desarrollo de nuevas funcionalidades sobre API REST con NestJS y aplicación web con React/Next.js.",
      "Diseño y planificación de nuevas tablas en PostgreSQL y colecciones en MongoDB para ampliar funcionalidades y mejorar rendimiento.",
      "Tests con Vitest y Jest para garantizar estabilidad en despliegues, con entornos dockerizados.",
      "Unificación y refactorización de componentes para maximizar reutilización y reducir duplicidad.",
      "Interfaz a partir de diseños en Figma con Tailwind CSS, en equipo con metodología Scrum.",
    ],
  },
  {
    version: "v1.5",
    period: "2025 — actualidad",
    title: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
    org: "A distancia",
    kind: "education",
    summary: "Formación reglada en paralelo al trabajo.",
    changes: [
      "Bases de datos (PostgreSQL), programación en Java, Git y entornos de desarrollo, lenguajes de marcas.",
    ],
  },
  {
    version: "v1.0",
    period: "2024",
    title: "Bootcamp Desarrollo Web Full Stack",
    org: "The Bridge / EDEM",
    kind: "education",
    summary: "El deploy inicial: del cero al stack MERN.",
    changes: ["React, Express, Node.js, JavaScript y TypeScript."],
  },
  {
    version: "next (canary)",
    period: "en desarrollo",
    title: "Ampliación de stack",
    kind: "wip",
    summary: "Ramas abiertas que aún no están en producción.",
    changes: [
      "Go en backend y Svelte en frontend.",
      "Arquitectura hexagonal para separar lógica de negocio de infraestructura.",
    ],
  },
];

export const dependencies: Dependency[] = [
  { name: "react", version: "^2 años · producción", status: "stable", group: "frontend" },
  { name: "next", version: "^2 años · producción", status: "stable", group: "frontend" },
  { name: "typescript", version: "^2 años · producción", status: "stable", group: "frontend" },
  { name: "tailwindcss", version: "^2 años · producción", status: "stable", group: "frontend" },
  { name: "svelte", version: "0.x · aprendiendo", status: "learning", group: "frontend" },
  { name: "node", version: "^2 años · producción", status: "stable", group: "backend" },
  { name: "nestjs", version: "^2 años · producción", status: "stable", group: "backend" },
  { name: "express", version: "^2 años", status: "stable", group: "backend" },
  { name: "spring-boot", version: "proyectos propios", status: "stable", group: "backend" },
  { name: "go", version: "0.x · aprendiendo", status: "learning", group: "backend" },
  { name: "postgresql", version: "^2 años · producción", status: "stable", group: "datos" },
  { name: "mongodb", version: "^2 años · producción", status: "stable", group: "datos" },
  { name: "indexeddb", version: "proyectos propios", status: "stable", group: "datos" },
  { name: "docker", version: "^2 años", status: "stable", group: "devops" },
  { name: "vitest", version: "^2 años · producción", status: "stable", group: "devops" },
  { name: "jest", version: "^2 años · producción", status: "stable", group: "devops" },
  { name: "playwright", version: "testing visual", status: "stable", group: "devops" },
  { name: "claude-code", version: "flujo diario", status: "stable", group: "herramientas" },
  { name: "figma", version: "diseño → código", status: "stable", group: "herramientas" },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
