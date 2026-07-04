"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/lib/site";

type Command = {
  id: string;
  label: string;
  hint: string;
  run: () => void;
};

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
    setCopied(false);
  }, []);

  const commands = useMemo<Command[]>(
    () => [
      { id: "inicio", label: "cd /", hint: "Inicio", run: () => router.push("/") },
      {
        id: "proyectos",
        label: "cd /proyectos",
        hint: "Servicios en producción",
        run: () => router.push("/proyectos"),
      },
      { id: "api", label: "cd /api", hint: "Documentación de la API", run: () => router.push("/api") },
      {
        id: "curl",
        label: "curl /api/v1/profile",
        hint: copied ? "¡Copiado!" : "Copiar comando curl",
        run: () => {
          navigator.clipboard.writeText(`curl ${site.url}/api/v1/profile`);
          setCopied(true);
          setTimeout(close, 700);
        },
      },
      {
        id: "email",
        label: "mail --to jc",
        hint: site.email,
        run: () => {
          window.location.href = `mailto:${site.email}`;
        },
      },
      {
        id: "github",
        label: "open github",
        hint: "LacruzJSDev",
        run: () => window.open(site.github, "_blank", "noopener"),
      },
      {
        id: "linkedin",
        label: "open linkedin",
        hint: "Perfil profesional",
        run: () => window.open(site.linkedin, "_blank", "noopener"),
      },
    ],
    [router, copied, close]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    );
  }, [commands, query]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        close();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-[18vh] backdrop-blur-sm"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Paleta de comandos"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-lg border border-edge-strong bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-edge px-4 py-3 font-mono text-sm">
          <span className="text-accent">$</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, filtered.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter" && filtered[active]) {
                filtered[active].run();
                if (filtered[active].id !== "curl") close();
              }
            }}
            placeholder="escribe un comando…"
            className="w-full bg-transparent outline-none placeholder:text-faint"
            aria-label="Buscar comando"
          />
          <kbd>esc</kbd>
        </div>
        <ul className="max-h-72 overflow-y-auto py-1 font-mono text-sm" role="listbox">
          {filtered.length === 0 && (
            <li className="px-4 py-3 text-faint">command not found: {query}</li>
          )}
          {filtered.map((cmd, i) => (
            <li key={cmd.id} role="option" aria-selected={i === active}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => {
                  cmd.run();
                  if (cmd.id !== "curl") close();
                }}
                className={`flex w-full items-baseline justify-between gap-4 px-4 py-2 text-left ${
                  i === active ? "bg-surface-2 text-accent" : "text-foreground"
                }`}
              >
                <span>{cmd.label}</span>
                <span className="truncate text-xs text-muted">{cmd.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
