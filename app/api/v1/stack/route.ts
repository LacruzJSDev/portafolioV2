import { apiResponse } from "@/lib/api";
import { dependencies } from "@/data/profile";

export function GET() {
  return apiResponse(dependencies);
}
