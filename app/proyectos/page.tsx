import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { projects } from "@/data/profile";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de Juan Carlos Lacruz: aplicaciones full stack con React, Next.js, NestJS, Spring Boot y más — presentados como servicios en producción.",
  alternates: { canonical: "/proyectos" },
};

export default function ProjectsPage() {
  return (
    <div className="py-16 sm:py-24">
      <p className="font-mono text-sm text-muted">
        <span className="text-accent">$</span> ls /proyectos
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        Servicios en producción
      </h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        Cada proyecto es un sistema completo: frontend, backend, base de datos y despliegue. Aquí
        no hay tutoriales seguidos paso a paso — hay decisiones de arquitectura, modelado de datos
        y código en producción.
      </p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ServiceCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
