# Acero Barber Co. — Sitio web de la barbería

Sitio web completo, responsivo y en español para una barbería: menú de navegación,
animaciones al hacer scroll, ventanas emergentes (modales), galería con lightbox,
sección de videos de YouTube, perfiles de barberos, formulario de reserva de citas
conectado a WhatsApp, y un botón flotante de WhatsApp estilo chat.

No requiere backend, base de datos ni instalación de dependencias: es HTML, CSS y
JavaScript puro (con dos librerías vía CDN: **AOS** para animaciones de scroll y
**Font Awesome** para iconos).

---

## 1. Cómo ejecutarlo en VS Code

1. Descomprime la carpeta `acero-barber-co` donde prefieras.
2. Ábrela en VS Code (`Archivo > Abrir carpeta…`).
3. Instala la extensión **Live Server** (de Ritwick Dey) si no la tienes.
4. Haz clic derecho sobre `index.html` → **"Open with Live Server"**.
   - También puedes abrir `index.html` directamente en el navegador con doble clic,
     pero Live Server evita problemas al cargar imágenes y recarga la página
     automáticamente cuando editas el código.

No necesitas `npm install` ni ningún paso adicional: las librerías se cargan desde
internet (CDN), así que necesitas conexión para verlas correctamente.

---

## 2. Estructura de archivos

```
acero-barber-co/
├── index.html          → Toda la estructura del sitio (una sola página)
├── css/
│   └── style.css        → Estilos, colores, tipografía y animaciones
├── js/
│   ├── config.js        → 🔧 AQUÍ EDITAS el contenido (barberos, fotos, videos, WhatsApp)
│   └── script.js         → Lógica del sitio (no es necesario editarlo)
├── images/
│   ├── logo/             → Logo de la barbería
│   ├── barbers/           → Fotos de los 3 barberos
│   ├── gallery/            → Fotos del local y trabajos realizados
│   └── location/            → Fotos de la fachada / zona de espera
└── README.md            → Este archivo
```

---

## 3. Dónde poner tus imágenes (¡muy importante!)

Coloca tus archivos exactamente con estos nombres para que aparezcan automáticamente
en la página. Si usas otro nombre, simplemente actualízalo en `js/config.js`
(el archivo tiene comentarios que indican qué línea tocar).

### 🖼️ Logo — carpeta `images/logo/`
| Archivo esperado   | Dónde se usa                          | Medida sugerida |
|---------------------|----------------------------------------|------------------|
| `logo.png`          | Menú de navegación, footer, pestaña del navegador, chat de WhatsApp | Cuadrado o rectangular, fondo transparente (PNG), mínimo 200×200 px |

> Si no subes ningún logo, el sitio muestra automáticamente un ícono de tijeras
> como respaldo — no se rompe el diseño.

### 💈 Barberos — carpeta `images/barbers/`
| Archivo esperado      | Barbero                     |
|-------------------------|-------------------------------|
| `barbero-01.jpg`        | Primer barbero (fundador)     |
| `barbero-02.jpg`        | Segundo barbero               |
| `barbero-03.jpg`        | Tercer barbero                |

- Medida sugerida: **800×920 px** (retrato, formato vertical 3:3.4), foto de cuerpo
  o busto con buena luz. Si prefieres nombres distintos, cámbialos en el arreglo
  `barberos` dentro de `js/config.js`.
- Para editar **nombre, cargo, biografía y redes sociales** de cada barbero, abre
  `js/config.js` y modifica el objeto correspondiente — no hace falta tocar el HTML.

### 🏙️ Local / Ubicación — carpeta `images/location/`
| Archivo esperado    | Dónde se usa                              |
|-----------------------|---------------------------------------------|
| `local-01.jpg`        | Sección "Nuestra ubicación" (foto superior)  |
| `local-02.jpg`        | Sección "Nuestra ubicación" (foto inferior)  |

- Medida sugerida: **900×600 px** (horizontal).

### 📸 Galería / trabajos — carpeta `images/gallery/`
Estas imágenes alimentan **dos secciones**: la sección "Nuestro trabajo" (galería en
cuadrícula) y algunas fotos de fondo (hero, "Nosotros", "Precios"). Los nombres que
el código ya busca son:

| Archivo               | Uso                                             |
|------------------------|--------------------------------------------------|
| `interior-01.jpg`      | Fondo del hero (portada) + galería                |
| `interior-02.jpg`      | Sección "Nosotros" + galería                       |
| `tools-01.jpg`         | Sección "Precios" (foto de herramientas) + galería |
| `trabajo-01.jpg` a `trabajo-05.jpg` | Galería "Nuestro trabajo"            |

- Puedes agregar más fotos o quitar algunas editando el arreglo `galeria` en
  `js/config.js` (cada entrada es `{ src: "images/gallery/archivo.jpg", caption: "Texto" }`).
- Medida sugerida: **900×1200 px** (vertical) para que se vean bien en la cuadrícula.

> 🔒 Si una imagen no existe todavía, esa tarjeta de la galería simplemente se
> oculta — no aparecen íconos rotos ni espacios en blanco raros.

---

## 4. Cómo agregar tus videos de YouTube

No necesitas ninguna API key. Solo copia el **ID** del video de YouTube (no la URL
completa) y pégalo en `js/config.js`, dentro del arreglo `videos`:

```js
videos: [
  {
    titulo: "Recorrido por la barbería",
    youtubeId: "AQUI_VA_EL_ID",   // https://www.youtube.com/watch?v=AQUI_VA_EL_ID
    miniatura: ""                  // déjalo vacío para usar la miniatura oficial de YouTube
  },
  // agrega tantos objetos como videos quieras
]
```

El ID es la parte de la URL después de `v=`. Por ejemplo, si tu video es
`https://www.youtube.com/watch?v=ABC12345XYZ`, el ID es `ABC12345XYZ`.

Al hacer clic en cualquier tarjeta de video, se abre una ventana emergente con el
video reproduciéndose directamente desde YouTube.

---

## 5. Cómo configurar tu número de WhatsApp

En `js/config.js`, al inicio del archivo:

```js
whatsapp: {
  numero: "573001234567",   // tu número con indicativo de país, sin "+" ni espacios
  mensajeWidget: "Hola, quisiera más información sobre sus servicios 💈"
}
```

Este número se usa en dos lugares:
1. El **botón flotante de WhatsApp** (esquina inferior derecha) que abre una
   ventanita tipo chat con un mensaje de bienvenida y un botón para continuar
   la conversación en WhatsApp.
2. El **formulario de "Reservar cita"**: al enviarlo, se arma automáticamente un
   mensaje de WhatsApp con todos los datos (nombre, servicio, barbero, fecha y
   hora) para que el cliente solo tenga que darle "Enviar".

---

## 6. Otros textos que puedes personalizar fácilmente

- **Precios y servicios**: búscalos directamente en `index.html`, dentro de la
  sección `<section class="pricing" id="servicios">` (lista `<ul class="price-list">`).
- **Dirección, teléfono, correo y horario**: sección `<section class="location">`
  en `index.html`, y el mapa (`iframe` de Google Maps) justo debajo — puedes
  reemplazar la URL del mapa por la de tu negocio desde Google Maps
  (botón "Compartir" → "Insertar un mapa").
- **Opiniones de clientes**: arreglo `opiniones` y `testimonioDestacado` en
  `js/config.js`.
- **Colores de marca**: al inicio de `css/style.css` encontrarás un bloque
  `:root { --gold: ...; --bg-1: ...; }` con todos los colores del sitio en un
  solo lugar.

---

## 7. Librerías utilizadas (vía CDN, no requieren instalación)

- **[AOS – Animate On Scroll](https://michalsnik.github.io/aos/)**: animaciones de
  aparición al hacer scroll por la página.
- **[Font Awesome](https://fontawesome.com/)**: iconos (WhatsApp, redes sociales,
  estrellas, ubicación, etc.).
- **Google Fonts**: tipografías `Bebas Neue` (títulos) y `Jost` (texto).
- **YouTube Embed**: reproducción de videos dentro de ventanas emergentes.
- **Google Maps Embed**: mapa de ubicación (sin necesidad de API key).

---

## 8. Secciones incluidas

1. Encabezado fijo con menú de navegación y menú móvil (hamburguesa)
2. Portada (hero) con imagen de fondo animada
3. Nosotros (historia + estadísticas animadas)
4. Galería "Nuestro trabajo" con lightbox
5. Precios y servicios + testimonio destacado
6. Equipo de barberos con biografía en ventana emergente
7. Videos de YouTube en ventana emergente
8. Formulario de reserva de citas conectado a WhatsApp
9. Opiniones de clientes
10. Ubicación con fotos, datos de contacto y mapa
11. Pie de página con redes sociales
12. Botón flotante de WhatsApp tipo chat
13. Botón "subir arriba"

¡Listo! Solo agrega tus imágenes, ajusta `js/config.js` con tus datos reales y el
sitio queda funcionando de principio a fin.
