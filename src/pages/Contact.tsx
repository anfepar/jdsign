import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("Mensaje enviado. ¡Gracias por contactar!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="pt-16">
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={contactBg} alt="Espacio de diseño" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl">
            {/* Info */}
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Contacto</p>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Hablemos de tu próximo proyecto
              </h1>
              <p className="text-primary-foreground/60 text-lg font-light mb-12 max-w-md">
                Si tienes una idea, un reto o simplemente quieres explorar posibilidades, escríbeme.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-accent" />
                  <span className="text-primary-foreground/80 text-sm">hola@studio.design</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={18} className="text-accent" />
                  <span className="text-primary-foreground/80 text-sm">+34 600 000 000</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin size={18} className="text-accent" />
                  <span className="text-primary-foreground/80 text-sm">Madrid, España</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 justify-center">
              <input
                type="text"
                placeholder="Nombre"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <textarea
                placeholder="Cuéntame sobre tu proyecto..."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-6 py-4 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:gap-5 transition-all duration-300"
              >
                Enviar mensaje
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
