import { apiResponse } from "@/lib/api";
import { site, apiBase } from "@/lib/site";

export function GET() {
  return apiResponse({
    message: "API pública del portafolio de Juan Carlos Lacruz. Bienvenido/a 👋",
    endpoints: {
      profile: `${site.url}${apiBase}/profile`,
      experience: `${site.url}${apiBase}/experience`,
      projects: `${site.url}${apiBase}/projects`,
      stack: `${site.url}${apiBase}/stack`,
    },
  });
}
