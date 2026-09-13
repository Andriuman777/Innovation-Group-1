/* =====================================================
   CONFIGURACIÓN DE LA PLATAFORMA — Acero Barber Co.
   -----------------------------------------------------
   Edita SOLO este archivo para personalizar el contenido:
   número de WhatsApp, barberos, galería, videos y opiniones.
   No necesitas tocar script.js ni el HTML para estos cambios.
===================================================== */

const CONFIG = {

  /* ---------- WHATSAPP ----------
     Número en formato internacional, SIN "+", SIN espacios ni guiones.
     Ejemplo Colombia: 57 3001234567  ->  "573001234567"           */
  whatsapp: {
    numero: "573001234567",
    mensajeWidget: "Hola, quisiera más información sobre sus servicios 💈"
  },

  /* ---------- BARBEROS ----------
     "foto" debe apuntar al archivo dentro de images/barbers/
     (ver README.md para nombres exactos y medidas recomendadas). */
  barberos: [
    {
      nombre: "Camilo Restrepo",
      rol: "Barbero fundador",
      foto: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=700&auto=format&fit=crop",
      bio: "Con más de 10 años de trayectoria, Camilo es especialista en cortes clásicos y afeitado con navaja tradicional. Fundó Acero Barber Co. con la idea de devolverle el ritual al corte de cabello.",
      instagram: "#",
      facebook: "#"
    },
    {
      nombre: "Andrés Gómez",
      rol: "Especialista en fade",
      foto: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=700&auto=format&fit=crop",
      bio: "Andrés se formó en barberías urbanas y domina las técnicas de degradado (fade) y diseño de líneas. Le apasiona combinar tendencias modernas con acabados impecables.",
      instagram: "#",
      facebook: "#"
    },
    {
      nombre: "Julián Torres",
      rol: "Especialista en barba",
      foto: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=700&auto=format&fit=crop",
      bio: "Julián se enfoca en el cuidado y diseño de barba: perfilado, hidratación y tratamientos con toalla caliente. Cada sesión con él es una experiencia de barbería clásica.",
      instagram: "#",
      facebook: "#"
    }
  ],

  /* ---------- GALERÍA "Descubre nuestro trabajo" ----------
     "src" apunta a images/gallery/. Puedes agregar o quitar objetos. */
  galeria: [
    { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop", caption: "Corte y diseño de línea" },
    { src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop", caption: "Fade clásico" },
    { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop", caption: "Afeitado con navaja" },
    { src: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1000&auto=format&fit=crop", caption: "Perfilado de barba" },
    { src: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=1000&auto=format&fit=crop", caption: "Nuestro espacio" },
    { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop", caption: "Estaciones de trabajo" },
    { src: "https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=1000&auto=format&fit=crop", caption: "Herramientas de precisión" },
    { src: "https://images.unsplash.com/photo-1593702295094-aea3c5f6a4c3?q=80&w=1000&auto=format&fit=crop", caption: "Detalle y acabado" }
  ],

  /* ---------- VIDEOS DE YOUTUBE ----------
     Pega aquí el ID del video de YouTube (NO la URL completa).
     Ejemplo: en https://www.youtube.com/watch?v=dQw4w9WgXcQ
     el id es "dQw4w9WgXcQ".
     "miniatura" es opcional: si no existe, se usa automáticamente
     la miniatura oficial de YouTube para ese video.               */
  videos: [
    {
      titulo: "Cómo hacer un corte de cabello paso a paso (Corte para principiante)",
      youtubeId: "XLHjZCcIfmo",
      miniatura: ""
    }
  ],

  /* ---------- TESTIMONIO DESTACADO (tarjeta junto a precios) ---------- */
  testimonioDestacado: [
    {
      texto: "Nunca me había sentido tan seguro después de un corte. Los estilistas entienden el arte del cabello y escucharon exactamente lo que quería.",
      autor: "John Doe"
    },
    {
      texto: "Ambiente increíble y atención al detalle. Salí con la barba perfecta y me trataron como en casa.",
      autor: "Miguel Ángel"
    },
    {
      texto: "El mejor fade que me han hecho en la ciudad. Ahora soy cliente fijo, sin duda alguna.",
      autor: "Santiago Ruiz"
    }
  ],

  /* ---------- OPINIONES (grid completo de la sección Opiniones) ---------- */
  opiniones: [
    { nombre:"John Doe", rol:"Cliente frecuente", texto:"Nunca me había sentido tan seguro después de un corte. Un servicio impecable de principio a fin." },
    { nombre:"Miguel Ángel", rol:"Cliente nuevo", texto:"Ambiente increíble y atención al detalle. Me trataron como en casa desde el primer minuto." },
    { nombre:"Santiago Ruiz", rol:"Cliente frecuente", texto:"El mejor fade que me han hecho en la ciudad. Ahora soy cliente fijo, sin duda alguna." }
  ]
};
