import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-center py-32">
      <p className="font-mono text-sm text-warn">⚠ incidencia #404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        Recurso no encontrado
      </h1>
      <div className="codeblock mt-8 w-full max-w-xl rounded-lg p-5">
        <p>
          <span className="text-faint">estado:</span> <span className="text-warn">404 Not Found</span>
        </p>
        <p>
          <span className="text-faint">causa probable:</span> enlace antiguo o typo en la URL
        </p>
        <p>
          <span className="text-faint">impacto:</span> ninguno — el resto del sistema sigue operativo
        </p>
        <p>
          <span className="text-faint">resolución:</span>{" "}
          <Link href="/" className="text-accent hover:underline">
            volver al inicio →
          </Link>
        </p>
      </div>
    </div>
  );
}
