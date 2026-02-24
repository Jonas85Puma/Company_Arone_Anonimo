# 🔧 Company Arone Anónimo — Landing Page Profesional

> **Sitio web corporativo** para Company Arone Anónimo, empresa líder en instalaciones sanitarias y gasfitería profesional en Ayacucho, Perú.

![Estado: Producción](https://img.shields.io/badge/Estado-Producción-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 Tabla de Contenidos

- [Vista General](#vista-general)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Sistema de Diseño](#sistema-de-diseño)
- [Secciones del Sitio](#secciones-del-sitio)
- [Funcionalidades JavaScript](#funcionalidades-javascript)
- [Responsive Design](#responsive-design)
- [SEO y Rendimiento](#seo-y-rendimiento)
- [Despliegue](#despliegue)
- [Créditos](#créditos)

---

## 🌐 Vista General

Landing page **single-page** de alto rendimiento construida con HTML5, CSS3 y JavaScript vanilla. Sin dependencias de frameworks ni bibliotecas — solo código limpio y optimizado.

### Stack Tecnológico

| Tecnología      | Uso                                      |
|:----------------|:-----------------------------------------|
| HTML5           | Estructura semántica y accesible         |
| CSS3            | Diseño visual, animaciones, responsive   |
| JavaScript ES6+ | Interactividad, carruseles, formularios  |
| Font Awesome 6  | Iconografía profesional                  |
| Google Fonts    | Tipografías Inter + Plus Jakarta Sans    |

### Características Principales

- ✅ **Single-page** con navegación suave (smooth scroll)
- ✅ **Full responsive** — Mobile, Tablet, Desktop
- ✅ **Hero con carrusel** de imágenes de fondo auto-rotativas
- ✅ **Portafolio con carruseles** internos por cada categoría de trabajo
- ✅ **Slider de testimonios** con paginación y dots
- ✅ **Formulario → WhatsApp** automático (sin backend)
- ✅ **Contadores animados** con IntersectionObserver
- ✅ **Navegación fija** con efecto glassmorphism al scroll
- ✅ **SEO optimizado** — meta tags, Open Graph, JSON-LD Schema
- ✅ **Accesibilidad** — lazy loading, alt text, semantic HTML
- ✅ **Botones sociales flotantes** — WhatsApp, Facebook, TikTok, YouTube

---

## 📁 Estructura del Proyecto

```
Gasfiteria/
├── index.html              # Página principal (793 líneas)
├── css/
│   └── styles.css          # Estilos completos (2,286 líneas)
├── js/
│   └── main.js             # Lógica e interactividad (465 líneas)
├── img/
│   ├── logo_original.webp  # Logo empresa (WebP optimizado)
│   ├── Hero.jpeg           # Imagen hero slide 1
│   ├── Hero2.jpeg          # Imagen hero slide 2
│   ├── Hero3.jpg           # Imagen hero slide 3
│   ├── Sobre nosotros.jpeg # Imagen sección "Nosotros"
│   ├── Instalacion de tuberia pvc.jpeg      # Portafolio PVC (1)
│   ├── Instalacion de tuberia pvc(2).jpeg   # Portafolio PVC (2)
│   ├── Instalaciones sanitarias.jpeg        # Portafolio Sanitarias (1)
│   ├── Instalaciones sanitarias(2).jpeg     # Portafolio Sanitarias (2)
│   ├── instalacion de tuberia hdpe.jpg      # Portafolio HDPE (1)
│   ├── instalacion de tuberia hdpe(2).jpg   # Portafolio HDPE (2)
│   ├── instalacion de tuberia PP-R.jpeg     # Portafolio PP-R (1)
│   ├── instalacion de tuberia PP-R(2).jpeg  # Portafolio PP-R (2)
│   ├── instalacion de tuberia PP-R(3).jpeg  # Portafolio PP-R (3)
│   ├── Instalacion de Griferia.jpeg         # Portafolio Grifería
│   └── instalacion de lavamano.jpg          # Portafolio Lavamano
├── assets/
│   └── favicon.svg         # Favicon vectorial
└── README.md               # Esta documentación
```

---

## 🎨 Sistema de Diseño

### Paleta de Colores

La paleta está extraída directamente del **logo corporativo** de Company Arone Anónimo:

| Variable CSS     | Valor      | Uso                              |
|:-----------------|:-----------|:---------------------------------|
| `--primary`      | `#111827`  | Navy oscuro — fondos, texto      |
| `--primary-dark` | `#030712`  | Negro profundo                   |
| `--primary-light`| `#1f2937`  | Navy medio                       |
| `--accent`       | `#FDBA12`  | **Dorado vibrante** — CTAs, acentos |
| `--accent-dark`  | `#D97706`  | Dorado oscuro — hover states     |
| `--accent-light` | `#FDE047`  | Dorado claro — highlights        |
| `--silver`       | `#94A3B8`  | Plata — texto secundario         |
| `--success`      | `#10b981`  | Verde — estados exitosos         |
| `--warning`      | `#f59e0b`  | Ámbar — advertencias             |
| `--error`        | `#ef4444`  | Rojo — errores                   |

### Tipografía

| Fuente              | Uso                    | Peso         |
|:--------------------|:-----------------------|:-------------|
| **Plus Jakarta Sans** | Títulos y headings   | 600, 700, 800 |
| **Inter**            | Cuerpo de texto        | 400, 500, 600 |

### Sistema de Espaciado

- Padding de secciones: `6rem 0` (variable `--section-padding`)
- Contenedor máximo: `1200px` con padding lateral `1.5rem`
- Grid gap estándar: `1.5rem` a `4rem`

### Radios de Borde

| Variable        | Valor     | Uso                    |
|:----------------|:----------|:-----------------------|
| `--radius-sm`   | `0.375rem`| Inputs, badges         |
| `--radius`      | `0.5rem`  | Botones                |
| `--radius-md`   | `0.75rem` | Cards pequeñas         |
| `--radius-lg`   | `1rem`    | Cards medianas         |
| `--radius-xl`   | `1.5rem`  | Cards grandes, imágenes|
| `--radius-full` | `9999px`  | Pills, avatares        |

### Sombras

5 niveles de sombra definidos: `--shadow-sm` → `--shadow-xl`.  
Cada nivel incrementa la difusión y opacidad para crear profundidad visual.

---

## 📄 Secciones del Sitio

### 1. Header / Navegación (`<header>`)
- **Navegación fija** en la parte superior
- Logo + 7 links de navegación + botón CTA telefónico
- Efecto **glassmorphism** (`backdrop-filter: blur`) al hacer scroll
- **Menú hamburguesa** en mobile con overlay animado
- Links activos se resaltan automáticamente según la sección visible

### 2. Hero (`#inicio`)
- **Carrusel de 3 imágenes** de fondo con transición de opacidad
- Rotación automática cada 5 segundos con indicadores (dots)
- **Overlay degradado** izquierda→derecha: oscuro donde está el texto, más claro a la derecha para mostrar la imagen
- Título estático SEO-friendly (sin animación de typewriter)
- 2 botones CTA: "Cotizar Ahora" (WhatsApp) + "Nuestros Servicios"
- **Contadores animados**: 1500+ Proyectos | 328+ Clientes | 10+ Años
- Partículas flotantes decorativas (CSS keyframes)

### 3. Barra de Confianza (`#trust-bar`)
- 4 indicadores de confianza con iconos: Garantía, Atención 24/7, Materiales, etc.
- Fondo oscuro con efecto glassmorphism

### 4. Servicios (`#servicios`)
- Grid de **6 tarjetas de servicio** con iconos
- Cada tarjeta tiene: ícono, título, descripción, enlace
- Efecto hover con elevación y resaltado de ícono
- Categorías: Instalaciones, Mantenimiento, Reparaciones, Detección, Remodelación, Emergencias

### 5. Proceso (`#proceso`)
- **4 pasos visuales** del flujo de trabajo
- Línea de progreso animada al hacer scroll
- Cada paso aparece con animación escalonada (staggered)
- Pasos: Contacto → Diagnóstico → Ejecución → Garantía

### 6. Nosotros (`#nosotros`)
- Layout **2 columnas**: imagen + contenido
- Imagen con badge superpuesto "10+ Años de Experiencia"
- Lista de valores de la empresa

### 7. Portafolio / Trabajos (`#trabajos`)
- **Filtros por categoría**: Todos, Instalación, Mantenimiento, Reparación
- Grid de **6 trabajos** con overlay al hover
- **Mini-carruseles** para trabajos con variantes de imagen:
  - Tubería PVC: 2 imágenes
  - Instalaciones Sanitarias: 2 imágenes
  - Tubería HDPE: 2 imágenes
  - Tubería PP-R: 3 imágenes
  - Grifería + Lavamano: 2 imágenes
- Navegación por **dots** + auto-avance cada 4 segundos
- La estructura del carrusel es:
  ```html
  <div class="portfolio__carousel">
      <img class="portfolio__carousel-img active" src="..." alt="...">
      <img class="portfolio__carousel-img" src="..." alt="...">
      <div class="portfolio__carousel-dots">
          <span class="portfolio__dot active"></span>
          <span class="portfolio__dot"></span>
      </div>
  </div>
  ```

### 8. Testimonios
- **Slider horizontal** con paginación
- Adaptable: 1 card en mobile, 2 en tablet, 3 en desktop
- Navegación con flechas + dots
- Cards con avatar, nombre, cargo, valoración de estrellas y texto

### 9. CTA (Call to Action)
- Banner de conversión con gradiente oscuro
- Teléfono clickeable + botón "Llamar Ahora"

### 10. Contacto (`#contacto`)
- Layout **2 columnas**: info + formulario
- Info: Teléfono, WhatsApp, Email, Ubicación, Horario
- **Formulario → WhatsApp**: al enviar, redirige a `wa.me/` con el mensaje pre-formateado
- El formulario no requiere backend

### 11. Footer
- Logo con colores originales (sin filtro blanco)
- 3 columnas: Marca, Links rápidos, Contacto
- Crédito: "Diseñado por WebCreaciones" con link externo
- Iconos de redes sociales

### 12. Botones Sociales Flotantes
- Barra vertical fija al costado derecho
- 4 botones: Facebook, TikTok, YouTube, WhatsApp (más grande)
- Visibles en todas las secciones

---

## ⚡ Funcionalidades JavaScript

Toda la lógica está en `js/main.js` — Vanilla JavaScript ES6+, sin dependencias.

### Módulos Implementados

| Módulo                       | Descripción                                           |
|:-----------------------------|:------------------------------------------------------|
| **Mobile Navigation**        | Toggle menú hamburguesa con cierre al click outside   |
| **Header Scroll Effect**     | Añade clase `header--scrolled` después de 80px scroll |
| **Active Nav Link**          | Resalta el link de navegación según la sección visible|
| **Hero Slideshow**           | Carrusel de 3 imágenes con auto-rotación (5s)         |
| **Counter Animation**        | Contadores numéricos con `easeOutExpo` y Observer     |
| **Process Line Animation**   | Animación de línea de progreso al scroll              |
| **Scroll Reveal**            | Elementos aparecen con animación escalonada           |
| **Portfolio Filters**        | Filtrado por categoría con show/hide                  |
| **Portfolio Carousels**      | Mini-carruseles con dots y auto-avance (4s)           |
| **Testimonials Slider**      | Slider horizontal con responsive cards-per-view       |
| **Contact Form → WhatsApp**  | Serializa y envía formulario a WhatsApp               |
| **Smooth Scroll**            | Scroll suave para links internos `#`                  |

### Patrón de Animación

Se usa `IntersectionObserver` para todas las animaciones de entrada:
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
```

---

## 📱 Responsive Design

### Breakpoints

| Breakpoint | Ancho          | Dispositivos                      |
|:-----------|:---------------|:----------------------------------|
| Desktop    | > 1024px       | Monitores, laptops                |
| Tablet     | 769px – 1024px | iPads, tablets                    |
| Mobile     | ≤ 768px        | Smartphones                       |
| Small      | ≤ 480px        | Pantallas pequeñas                |

### Ajustes Mobile Clave

- Navegación colapsa a **menú hamburguesa** con overlay full-screen
- Grids pasan a **1 columna** en mobile
- Tipografía usa `clamp()` para escalar fluidamente
- Hero se adapta con contenido centrado y botones apilados
- Testimonios muestran **1 card** a la vez
- Portafolio cambia a **2 columnas** en tablet, **1 columna** en mobile

---

## 🔍 SEO y Rendimiento

### SEO Implementado

- ✅ `<title>` descriptivo con keywords
- ✅ `<meta description>` con propuesta de valor
- ✅ `<meta keywords>` con términos de búsqueda relevantes
- ✅ **Open Graph** tags para compartir en Facebook
- ✅ **Twitter Card** tags para compartir en Twitter
- ✅ JSON-LD **Schema.org** para datos estructurados (LocalBusiness)
- ✅ `<html lang="es">` declarado
- ✅ `robots: index, follow`
- ✅ Heading hierarchy: un solo `<h1>`, seguido de `<h2>`, `<h3>`
- ✅ Alt text en todas las imágenes

### Rendimiento

- ✅ Imágenes con `loading="lazy"` (lazy loading nativo)
- ✅ Dimensiones `width` y `height` declaradas en `<img>` para evitar CLS
- ✅ CSS sin frameworks externos pesados
- ✅ JavaScript vanilla sin dependencias
- ✅ Fuentes cargadas con `display=swap` para evitar FOIT
- ✅ Favicon en formato SVG (vectorial, ligero)

---

## 🚀 Despliegue

### Requisitos Previos

Ninguno. Es un sitio **estático** — solo necesitas un servidor web que sirva archivos HTML.

### Opciones de Hosting Recomendadas

| Plataforma       | Tipo           | Costo             |
|:-----------------|:---------------|:-------------------|
| **Cloudflare Pages** | CDN Global | Gratis             |
| **Netlify**      | JAMstack       | Gratis (tier Free) |
| **Vercel**       | Edge Network   | Gratis (tier Free) |
| **GitHub Pages** | Estático       | Gratis              |

### Paso a Paso (Git + Cloudflare Pages)

```bash
# 1. Inicializar repositorio
cd Gasfiteria
git init
git add .
git commit -m "feat: landing page Company Arone Anónimo v1.0"

# 2. Subir a GitHub
git remote add origin https://github.com/tu-usuario/gasfiteria.git
git branch -M main
git push -u origin main

# 3. Conectar con Cloudflare Pages / Netlify / Vercel
# → Seleccionar el repositorio
# → Build command: (ninguno, es estático)
# → Output directory: / (raíz)
```

### Configuración Post-Despliegue

1. **Dominio personalizado**: Apuntar DNS al hosting elegido
2. **SSL/HTTPS**: Se genera automáticamente en Cloudflare/Netlify/Vercel
3. **Actualizar URLs**: Cambiar `https://www.companyarone.com/` en los meta tags
4. **Agregar og-image**: Crear `assets/og-image.jpg` (1200x630px) para previews

---

## 📞 Datos de Contacto Configurados

| Dato        | Valor                             | Dónde aparece             |
|:------------|:----------------------------------|:--------------------------|
| Teléfono    | +51 959 784 254                   | Header, Hero, CTA, Footer |
| WhatsApp    | +51 959 784 254                   | Hero, Contacto, Flotante  |
| Email       | ditoxx95@gmail.com                | Contacto, Footer          |
| Ubicación   | Ayacucho, Perú                    | Contacto, Footer          |
| Facebook    | facebook.com/companyarone         | Flotantes, Footer         |
| TikTok      | tiktok.com/@companyarone          | Flotantes, Footer         |
| YouTube     | youtube.com/@CompanyAroneAnonimo  | Flotantes, Footer         |

---

## 🛠️ Mantenimiento y Modificaciones

### Para Cambiar Colores de la Marca

Editar las variables CSS en `:root` (línea 6 de `styles.css`):
```css
:root {
   --primary: #111827;    /* Color principal oscuro */
   --accent: #FDBA12;     /* Color de acento dorado */
}
```

### Para Agregar un Nuevo Trabajo al Portafolio

1. Agregar imagen(es) a `/img/`
2. En `index.html`, dentro de `.portfolio__grid`, agregar:
```html
<!-- Trabajo con una sola imagen -->
<article class="portfolio__item" data-category="instalacion">
    <img src="img/nueva-imagen.jpeg" alt="Descripción" width="400" height="350" loading="lazy">
    <div class="portfolio__overlay">
        <span class="portfolio__tag">Categoría</span>
        <h3>Título del Trabajo</h3>
        <p>Descripción breve</p>
    </div>
</article>

<!-- Trabajo con carrusel (múltiples imágenes) -->
<article class="portfolio__item" data-category="instalacion">
    <div class="portfolio__carousel">
        <img class="portfolio__carousel-img active" src="img/trabajo1.jpeg" alt="Vista 1" ...>
        <img class="portfolio__carousel-img" src="img/trabajo2.jpeg" alt="Vista 2" ...>
        <div class="portfolio__carousel-dots">
            <span class="portfolio__dot active"></span>
            <span class="portfolio__dot"></span>
        </div>
    </div>
    <div class="portfolio__overlay">...</div>
</article>
```

### Para Cambiar Testimonios

Editar los `.testimonial-card` dentro del `#testimonials-track` en `index.html`. Cada card tiene avatar, nombre, cargo, rating y texto.

### Para Cambiar el Número de WhatsApp

Buscar y reemplazar `51959784254` en `index.html` (aparece en múltiples enlaces).

---

## 👥 Créditos

| Rol                | Nombre / Entidad              |
|:-------------------|:------------------------------|
| **Cliente**        | Company Arone Anónimo         |
| **Diseño y Desarrollo** | [WebCreaciones](https://www.web-creaciones.com/) |
| **Iconos**         | [Font Awesome 6](https://fontawesome.com/) |
| **Tipografías**    | [Google Fonts](https://fonts.google.com/) |

---

## 📝 Licencia

© 2026 Company Arone Anónimo. Todos los derechos reservados.  
Diseñado y desarrollado por [WebCreaciones](https://www.web-creaciones.com/).
