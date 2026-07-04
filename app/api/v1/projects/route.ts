import { apiResponse } from "@/lib/api";
import { projects } from "@/data/profile";
import { site } from "@/lib/site";

export function GET() {
  return apiResponse(
    projects.map((p) => ({ ...p, url: p.url ?? `${site.url}/proyectos/${p.slug}` }))
  );
}
