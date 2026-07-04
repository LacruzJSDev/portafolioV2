# Portafolio — Juan Carlos Lacruz

Portafolio personal construido como un **sistema en producción**: la experiencia es un historial de deploys, los proyectos son servicios y el stack es un manifiesto de dependencias.

## El toque diferencial

El portafolio expone su propia **API REST pública y versionada**:

```bash
curl https://portafolio-nine-sable.vercel.app/api/v1/profile
```

Endpoints: `/api/v1` · `/api/v1/profile` · `/api/v1/experience` · `/api/v1/projects` · `/api/v1/stack`

La misma fuente de datos tipada (`data/profile.ts`) alimenta el HTML y la API.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS 4
- SEO: Metadata API, JSON-LD (Person, SoftwareApplication, BreadcrumbList), `sitemap.xml`, `robots.txt`, Open Graph generado dinámicamente
- Sin librerías de animación: CSS moderno (scroll-driven animations) y JavaScript mínimo
- Paleta de comandos ⌘K sin dependencias

## Desarrollo

```bash
npm run dev    # desarrollo
npm run build  # producción
```

## Configuración

Dominio, email y redes se centralizan en `lib/site.ts`. El contenido del CV vive en `data/profile.ts`.
