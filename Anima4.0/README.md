# ANIMA — Atlas Natural Interactivo
> **“Explora la vida. Comprende su diseño.”**

Museo digital interactivo de biodiversidad y anatomía animal. Demostración académica de dominio **HTML5 + CSS3 + JavaScript** con estética vanguardista (naturaleza × tecnología).

## Estructura
```
ANIMA/
├── index.html
├── css/styles.css
├── js/app.js
├── assets/images/  (imágenes remotas Unsplash + poster local opcional)
├── assets/icons/
├── assets/video/
└── README.md
```

## Tecnologías
- HTML5 semántico, CSS3 avanzado (variables, flex, grid, keyframes, glassmorphism)
- JavaScript vanilla organizado en funciones
- Google Fonts (Bebas Neue + Work Sans) y Font Awesome 6
- Animaciones vanilla con IntersectionObserver y soporte para `prefers-reduced-motion`

## Cómo ejecutar
Solo abre `index.html` en el navegador. No requiere build.
Para servidor local: `npx serve .` o extensión Live Server de VS Code.

## Cumplimiento actividad (dónde está cada requisito)
| Requisito | Dónde |
|---|---|
| html/head/body/header/nav/section/article/footer | `index.html` completo |
| main/div/h1/h2/h3/p/strong/em/ul/ol/li/img/a/button | Hero, especies, listas, footer |
| table/thead/tbody/tr/th/td | `#comparador` + `#tabla-especies` + `#docs` |
| video (controls/poster/muted) | `#multimedia` |
| iframe responsive | `#multimedia` YouTube BBC Earth |
| font-family/color/background/margin/padding | `css/styles.css` :root + base |
| border-radius/box-shadow/transition/transform/animation/grid/flex/media queries | tarjetas, galería, hero, responsive |
| JS: menú móvil, filtro, modal, comparador, explorador, volver arriba | `js/app.js` |

## Créditos
- Imágenes: Unsplash (fotógrafos varios)
- Video demo: Mixkit / Google Sample Videos + poster Unsplash
- Iconos: Font Awesome, Lucide inspiration
- Uso académico.
