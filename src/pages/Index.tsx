import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { projects } from "@/data/projects";

const Index = () => {
  const featured = projects.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Estudio de diseño industrial" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-3xl">
          <div className="h-px w-16 bg-accent mb-8 origin-left animate-reveal-line" style={{ transform: "scaleX(0)" }} />
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 opacity-0 animate-fade-in">
            Diseño estratégico que conecta industria, marca y experiencia
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl font-light max-w-xl mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            +13 años transformando ideas en productos, espacios y experiencias con impacto real.
          </p>
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:gap-5 transition-all duration-300 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Ver proyectos
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Selección</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Proyectos destacados</h2>
          </div>
          <Link to="/proyectos" className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Ver todos <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((project, i) => (
            <Link
              key={project.id}
              to={`/proyectos/${project.id}`}
              className="project-card group aspect-[4/5] opacity-0 animate-slide-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="overlay">
                <div className="overlay-content">
                  <p className="text-xs uppercase tracking-widest text-accent mb-1">{project.year}</p>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link to="/proyectos" className="md:hidden flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mt-8">
          Ver todos <ArrowRight size={14} />
        </Link>
      </section>

      {/* Brief about */}
      <section className="section-padding bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-6">Sobre mí</p>
          <p className="font-display text-2xl md:text-4xl font-light text-primary-foreground leading-relaxed mb-10">
            Diseñador industrial con visión estratégica. Creo productos, espacios y experiencias que conectan marcas con personas.
          </p>
          <Link
            to="/info"
            className="inline-flex items-center gap-3 border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-primary-foreground/10 transition-all duration-300"
          >
            Conocer más
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Index;
