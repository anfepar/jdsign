import projectFurniture from "@/assets/project-furniture.png";
import projectStand from "@/assets/project-stand.png";
import projectPop from "@/assets/project-pop.png";
import projectBranding from "@/assets/project-branding.jpg";
import projectProduct from "@/assets/project-product.png";
import projectSpace from "@/assets/project-space.png";

export type ProjectCategory = "mobiliario" | "stands" | "pop-retail" | "branding" | "espacios" | "otros";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  year: string;
  description: string;
  challenge: string;
  process: string;
  solution: string;
  impact: string;
  gallery: string[];
}

export const categoryLabels: Record<ProjectCategory, string> = {
  mobiliario: "Mobiliario",
  stands: "Stands",
  "pop-retail": "POP-Retail",
  branding: "Branding",
  espacios: "Espacios",
  otros: "Otros",
};

export const projects: Project[] = [
  {
    id: "silla-arco",
    title: "Silla Arco",
    category: "mobiliario",
    image: projectFurniture,
    year: "2024",
    description: "Silla de madera curvada con estructura metálica. Diseño que equilibra ligereza visual con resistencia estructural, pensada para espacios contract y residenciales premium.",
    challenge: "Crear una silla que combinara la calidez de la madera con la precisión industrial del metal, manteniendo un perfil visual ligero.",
    process: "Investigación de técnicas de curvado en madera, prototipado iterativo, validación ergonómica y pruebas de resistencia con laboratorio certificado.",
    solution: "Estructura de acero tubular cromado con asiento y respaldo en madera de nogal curvada en frío. Unión invisible mediante insertos metálicos.",
    impact: "Seleccionada para el catálogo de una firma internacional de mobiliario. Producción en serie de 2,000 unidades en el primer año.",
    gallery: [projectFurniture, projectFurniture, projectFurniture],
  },
  {
    id: "stand-vanguardia",
    title: "Stand Vanguardia",
    category: "stands",
    image: projectStand,
    year: "2023",
    description: "Stand de 120m² para feria internacional. Diseño modular que maximiza el flujo de visitantes y la exposición de producto.",
    challenge: "Diseñar un espacio que comunicara innovación tecnológica dentro de un presupuesto ajustado y con restricciones de montaje de 48 horas.",
    process: "Co-creación con el equipo de marketing, modelado 3D fotorrealista, planificación logística y coordinación con proveedores locales.",
    solution: "Sistema modular de paneles de aluminio con iluminación LED integrada. Zonas diferenciadas para demo, reuniones y networking.",
    impact: "Incremento del 40% en leads cualificados respecto a la edición anterior. Reconocimiento como mejor stand de diseño en la feria.",
    gallery: [projectStand, projectStand, projectStand],
  },
  {
    id: "display-luxe",
    title: "Display Luxe",
    category: "pop-retail",
    image: projectPop,
    year: "2023",
    description: "Sistema de exhibición punto de venta para marca de cosmética premium. Diseño que eleva la percepción de valor del producto.",
    challenge: "Crear un display que destacara en un entorno saturado de estímulos visuales, manteniendo la elegancia de la marca.",
    process: "Análisis del entorno retail, benchmarking competitivo, prototipado rápido y validación en punto de venta real.",
    solution: "Estructura en acrílico y metal con iluminación perimetral LED. Sistema de bandejas intercambiables para diferentes líneas de producto.",
    impact: "Implementación en 150 puntos de venta. Incremento del 25% en rotación de producto en las primeras 8 semanas.",
    gallery: [projectPop, projectPop, projectPop],
  },
  {
    id: "identidad-nova",
    title: "Identidad Nova",
    category: "branding",
    image: projectBranding,
    year: "2022",
    description: "Sistema de identidad visual completo para estudio de arquitectura. Diseño que comunica precisión, modernidad y confianza.",
    challenge: "Desarrollar una identidad que diferenciara al estudio en un mercado saturado, transmitiendo solidez sin perder frescura.",
    process: "Inmersión en la cultura del estudio, análisis de competencia, exploración tipográfica y cromática, iteración con stakeholders.",
    solution: "Logotipo modular basado en retícula arquitectónica. Paleta bicromática con aplicación en papelería, digital y señalética.",
    impact: "Reposicionamiento exitoso de la marca. Incremento del 60% en solicitudes de propuesta en los primeros 6 meses.",
    gallery: [projectBranding, projectBranding, projectBranding],
  },
  {
    id: "producto-vision",
    title: "Producto Vision",
    category: "otros",
    image: projectProduct,
    year: "2024",
    description: "Diseño de dispositivo electrónico de consumo. Forma orgánica que comunica tecnología accesible y diseño humano.",
    challenge: "Integrar componentes electrónicos complejos en una carcasa compacta y ergonómica que transmitiera confianza y modernidad.",
    process: "Design thinking, sketching, modelado paramétrico, impresión 3D de prototipos funcionales y pruebas de usuario.",
    solution: "Carcasa en ABS con acabado soft-touch, geometría optimizada mediante simulación de flujo térmico y análisis ergonómico.",
    impact: "Producto lanzado en 3 mercados internacionales. Nominado a premio de diseño industrial.",
    gallery: [projectProduct, projectProduct, projectProduct],
  },
  {
    id: "espacio-premium",
    title: "Espacio Premium",
    category: "otros",
    image: projectSpace,
    year: "2023",
    description: "Diseño interior de showroom para marca de moda de lujo. Experiencia inmersiva que conecta producto, espacio y emoción.",
    challenge: "Transformar un espacio comercial genérico en una experiencia de marca memorable que incentivara la permanencia y la compra.",
    process: "Estudio de flujos de cliente, moodboarding, diseño de iluminación escénica y selección de materiales premium.",
    solution: "Zonificación por colecciones con transiciones de iluminación y materialidad. Mobiliario a medida y sistema de display flexible.",
    impact: "Ticket promedio incrementado en 35%. Tiempo de permanencia duplicado respecto al formato anterior.",
    gallery: [projectSpace, projectSpace, projectSpace],
  },
];
