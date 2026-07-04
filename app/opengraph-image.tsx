import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";
import { site } from "@/lib/site";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0b0d",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: "#e8eaed",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#9aa3af" }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#4ade80",
              display: "flex",
            }}
          />
          <span>lacruz@producción · Valencia, ES</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ fontSize: 30, color: "#ffb224" }}>$ whoami</span>
          <span style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {profile.name}
          </span>
          <span style={{ fontSize: 36, color: "#9aa3af" }}>
            {profile.role} · React · Next.js · NestJS · PostgreSQL
          </span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#5b6470",
          }}
        >
          <span>{site.url.replace("https://", "")}</span>
          <span style={{ color: "#ffb224" }}>curl {site.url.replace("https://", "")}/api/v1/profile</span>
        </div>
      </div>
    ),
    size
  );
}
