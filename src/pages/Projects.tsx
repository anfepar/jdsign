import { useState } from "react";
import { Link } from "react-router-dom";
import { projects, categoryLabels, type ProjectCategory } from "@/data/projects";

const allCategories: (ProjectCategory | "all")[] = ["all", "mobiliario", "stands", "pop-retail", "branding", "espacios", "otros"];

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="pt-16">
      <section className="section-padding">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Portfolio</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8">Proyectos</h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-6">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`filter-btn ${filter === cat ? "active" : ""}`}
              >
                {cat === "all" ? "Todos" : categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <Link
              key={project.id}
              to={`/proyectos/${project.id}`}
              className="project-card group aspect-square opacity-0 animate-slide-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="overlay">
                <div className="overlay-content">
                  <p className="text-xs uppercase tracking-widest text-accent mb-1">
                    {categoryLabels[project.category]} · {project.year}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-primary-foreground">{project.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
