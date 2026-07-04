import { apiResponse } from "@/lib/api";
import { profile } from "@/data/profile";
import { site } from "@/lib/site";

export function GET() {
  return apiResponse({
    ...profile,
    email: site.email,
    github: site.github,
    linkedin: site.linkedin,
  });
}
