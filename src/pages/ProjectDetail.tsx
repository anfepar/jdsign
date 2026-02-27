import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects, categoryLabels } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="pt-16 section-padding text-center">
        <p className="text-muted-foreground">Proyecto no encontrado.</p>
        <Link to="/proyectos" className="inline-flex items-center gap-2 mt-4 text-accent hover:underline">
          <ArrowLeft size={14} /> Volver a proyectos
        </Link>
      </main>
    );
  }

  const sections = [
    { label: "Descripción", content: project.description },
    { label: "Reto", content: project.challenge },
    { label: "Proceso", content: project.process },
    { label: "Solución", content: project.solution },
    { label: "Impacto", content: project.impact },
  ];

  return (
    <main className="pt-16">
      {/* Hero image */}
      <div className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <section className="px-6 md:px-12 lg:px-24 -mt-32 relative z-10 pb-20">
        <Link to="/proyectos" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={14} /> Volver
        </Link>

        <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
          {categoryLabels[project.category]} · {project.year}
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-16">{project.title}</h1>

        {/* Content sections */}
        <div className="max-w-3xl space-y-12">
          {sections.map((s) => (
            <div key={s.label}>
              <h2 className="text-xs uppercase tracking-widest text-accent font-semibold mb-4">{s.label}</h2>
              <p className="text-foreground/80 text-lg leading-relaxed font-light">{s.content}</p>
            </div>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-20">
          <h2 className="text-xs uppercase tracking-widest text-accent font-semibold mb-8">Galería</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.gallery.map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden">
                <img src={img} alt={`${project.title} - ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
