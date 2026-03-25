import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="px-6 md:px-12 lg:px-24 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="font-display text-sm text-muted-foreground">
        © {new Date().getFullYear()} JUL-STUDIO. Todos los derechos reservados.
      </p>
      <div className="flex gap-8">
        <Link to="/proyectos" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          Proyectos
        </Link>
        <Link to="/info" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          Info
        </Link>
        <Link to="/contacto" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">
          Contacto
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
