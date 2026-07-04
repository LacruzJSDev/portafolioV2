import Link from "next/link";
import { profile } from "@/data/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-4 py-2.5 font-mono text-xs sm:px-6">
        <Link href="/" className="flex items-center gap-2 hover:text-accent">
          <span className="status-dot" aria-hidden />
          <span className="text-muted">lacruz</span>
          <span className="text-accent">@</span>
          <span className="text-muted">producción</span>
        </Link>
        <span className="hidden text-faint sm:inline">·</span>
        <span className="hidden text-faint sm:inline">{profile.location}</span>
        <nav aria-label="Principal" className="ml-auto flex items-center gap-4">
          <Link href="/proyectos" className="text-muted transition-colors hover:text-accent">
            /proyectos
          </Link>
          <Link href="/api" className="text-muted transition-colors hover:text-accent">
            /api
          </Link>
          <span className="hidden items-center gap-1 text-faint md:flex">
            <kbd>⌘</kbd>
            <kbd>K</kbd>
          </span>
        </nav>
      </div>
    </header>
  );
}
