<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portafolio de Juan Carlos Lacruz

Concepto: portafolio como "sistema en producción". La experiencia es un historial de deploys, los proyectos son servicios y el stack es un manifiesto de dependencias.

## Reglas del proyecto

- **Fuente única de verdad**: todo el contenido del CV vive en `data/profile.ts` y alimenta tanto el HTML como la API pública (`app/api/v1/*`). Nunca dupliques contenido en las páginas.
- **Configuración del sitio** (dominio, email, redes): `lib/site.ts`. El dominio se cambia solo ahí.
- **SEO primero**: contenido siempre visible para crawlers (nada de opacidad 0 hasta hacer scroll), HTML semántico, JSON-LD, sitemap/robots/manifest generados por convención de App Router.
- **Cero dependencias de UI**: sin librerías de animación ni de componentes. CSS moderno en `app/globals.css` (tokens de diseño con variables CSS) y JavaScript mínimo en cliente (solo `CommandPalette` y `CopyCurl`).
- **Cabeceras HTTP solo ASCII** (los em-dashes rompen ByteString).
- Idioma del sitio y del código de contenido: castellano.
