"use client";

import { useState } from "react";

export function CopyCurl({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="rounded border border-edge-strong px-2 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent hover:text-accent"
      aria-label="Copiar comando"
    >
      {copied ? "copiado ✓" : "copiar"}
    </button>
  );
}
