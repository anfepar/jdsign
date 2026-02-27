import profileImg from "@/assets/profile.jpg";

const capabilities = [
  "Diseño de producto",
  "Diseño de mobiliario",
  "Stands y espacios comerciales",
  "POP y retail design",
  "Branding e identidad visual",
  "Diseño de packaging",
  "Dirección de arte",
  "Visualización 3D",
];

const tools = [
  "SolidWorks", "Rhino", "KeyShot", "AutoCAD",
  "Adobe Creative Suite", "Figma", "Blender", "SketchUp",
];

const methodology = [
  { step: "01", title: "Investigar", desc: "Entender el contexto, el usuario y los objetivos del proyecto." },
  { step: "02", title: "Conceptualizar", desc: "Explorar ideas y definir la dirección estratégica." },
  { step: "03", title: "Desarrollar", desc: "Materializar el concepto mediante prototipos y validación." },
  { step: "04", title: "Implementar", desc: "Ejecutar con precisión y acompañar hasta la producción." },
];

const Info = () => {
  return (
    <main className="pt-16">
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Photo */}
          <div className="aspect-[3/4] overflow-hidden opacity-0 animate-fade-in">
            <img src={profileImg} alt="Retrato profesional" className="w-full h-full object-cover" loading="eager" />
          </div>

          {/* Bio */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Perfil</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">Diseñador Industrial</h1>
            <p className="text-foreground/70 text-lg leading-relaxed font-light mb-6">
              Con más de 13 años de experiencia, mi trabajo se centra en la intersección entre estrategia de marca, diseño de producto y experiencia espacial. Cada proyecto es una oportunidad para resolver problemas reales con soluciones que comunican, funcionan y perduran.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed font-light mb-10">
              Mi enfoque combina pensamiento analítico con sensibilidad estética. Creo en el diseño como herramienta estratégica que genera valor tangible para marcas, empresas y usuarios.
            </p>

            <div className="h-px bg-border mb-10" />

            {/* Capabilities */}
            <h2 className="text-xs uppercase tracking-widest text-accent font-semibold mb-6">Capacidades</h2>
            <div className="grid grid-cols-2 gap-3 mb-12">
              {capabilities.map((c) => (
                <p key={c} className="text-sm text-foreground/70">{c}</p>
              ))}
            </div>

            {/* Tools */}
            <h2 className="text-xs uppercase tracking-widest text-accent font-semibold mb-6">Herramientas</h2>
            <div className="flex flex-wrap gap-3 mb-12">
              {tools.map((t) => (
                <span key={t} className="text-xs uppercase tracking-widest border border-border px-4 py-2 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding bg-primary">
        <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Metodología</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-16">Cómo trabajo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodology.map((m) => (
            <div key={m.step}>
              <span className="font-display text-5xl font-bold text-accent/30">{m.step}</span>
              <h3 className="font-display text-xl font-semibold text-primary-foreground mt-4 mb-3">{m.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Info;
