import { apiResponse } from "@/lib/api";
import { deploys } from "@/data/profile";

export function GET() {
  return apiResponse(deploys);
}
