import { NextResponse } from "next/server";
import { site } from "@/lib/site";

/** Respuesta JSON de la API pública, con CORS abierto (solo lectura). */
export function apiResponse(data: unknown) {
  return NextResponse.json(
    {
      _meta: {
        api: "lacruz-portfolio",
        version: "v1",
        source: site.url,
        contact: site.email,
        docs: `${site.url}/api`,
      },
      data,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
        "X-Built-By": "Juan Carlos Lacruz - a mano, con Next.js",
      },
    }
  );
}
