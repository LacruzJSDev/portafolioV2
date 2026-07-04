/**
 * Configuración global del sitio.
 * TODO(Juan Carlos): cuando tengas dominio propio, cambia `url` aquí
 * y todo el SEO (canonical, sitemap, OG, JSON-LD) se actualiza solo.
 */
export const site = {
  url: "https://lacruzjsdev.vercel.app",
  name: "Juan Carlos Lacruz — Desarrollador Full Stack",
  shortName: "lacruz.dev",
  description:
    "Desarrollador web full stack en Valencia. APIs REST con NestJS y Node.js, aplicaciones en producción con React y Next.js, PostgreSQL y MongoDB. Este portafolio expone su propia API pública.",
  locale: "es_ES",
  author: "Juan Carlos Lacruz Lacruz",
  email: "jclacruzlacruz@icloud.com",
  github: "https://github.com/LacruzJSDev",
  // TODO(Juan Carlos): pon aquí la URL exacta de tu perfil de LinkedIn
  linkedin: "https://www.linkedin.com/in/juan-carlos-lacruz-lacruz",
  location: "Valencia, España",
  keywords: [
    "desarrollador full stack",
    "desarrollador web Valencia",
    "React",
    "Next.js",
    "NestJS",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "portfolio desarrollador",
    "Juan Carlos Lacruz",
  ],
} as const;

export const apiBase = "/api/v1";
