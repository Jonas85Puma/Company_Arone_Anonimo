# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/).

---

## [1.0.0] — 2026-02-24

### ✨ Lanzamiento Inicial

#### Estructura
- Landing page single-page con HTML5 semántico
- CSS3 con sistema de variables personalizado (Custom Properties)
- JavaScript ES6+ vanilla sin dependencias

#### Secciones Implementadas
- **Header**: Navegación fija con glassmorphism, menú hamburguesa mobile
- **Hero**: Carrusel de 3 imágenes de fondo, overlay degradado left-to-right, contadores animados
- **Trust Bar**: 4 indicadores de confianza corporativa
- **Servicios**: Grid de 6 tarjetas con iconos y hover effects
- **Proceso**: 4 pasos con línea de progreso animada al scroll
- **Nosotros**: Layout 2 columnas con badge de experiencia
- **Portafolio**: 6 trabajos con filtros de categoría y mini-carruseles para variantes de imagen
- **Testimonios**: Slider horizontal responsive con paginación
- **CTA**: Banner de conversión con gradiente
- **Contacto**: Info de contacto + formulario que redirige a WhatsApp
- **Footer**: 3 columnas, logo original, crédito a WebCreaciones

#### Funcionalidades JavaScript
- Navegación mobile con cierre automático
- Efecto header scroll con clase CSS dinámica
- Link activo según sección visible (IntersectionObserver)
- Hero slideshow con auto-rotación cada 5s
- Contadores numéricos con animación `easeOutExpo`
- Animación de línea de progreso
- Scroll reveal con animación escalonada
- Filtros de portafolio por categoría
- Carruseles de portafolio con auto-avance cada 4s
- Slider de testimonios responsive (1/2/3 cards según viewport)
- Formulario → WhatsApp (serialización automática)
- Smooth scroll para links internos

#### Diseño Responsivo
- Desktop (>1024px): Layout completo a grids
- Tablet (769-1024px): Grids adaptadas a 2 columnas
- Mobile (≤768px): Layout single column, menú hamburguesa
- Small (≤480px): Ajustes tipográficos adicionales

#### SEO y Performance
- Meta tags: `<title>`, `description`, `keywords`, `robots`
- Open Graph tags para Facebook
- Twitter Card tags
- JSON-LD Schema (LocalBusiness)
- `lang="es"` declarado
- Imágenes con `loading="lazy"` y dimensiones explícitas
- Fuentes con `display=swap`
- Favicon SVG

#### Elementos Flotantes
- Barra vertical de redes sociales: Facebook, TikTok, YouTube
- Botón flotante de WhatsApp (más grande, posición inferior)

#### Datos de Contacto
- Teléfono: +51 959 784 254
- WhatsApp: +51 959 784 254
- Email: ditoxx95@gmail.com
- Ubicación: Ayacucho, Perú
- Disponibilidad: 24/7 Emergencias

---

## Convenciones

### Nomenclatura CSS
- **BEM (Block Element Modifier)**: `.hero__title`, `.nav__link--active`
- Prefijo por sección: `.hero__`, `.services__`, `.portfolio__`, `.contact__`, etc.
- Variables globales en `:root`

### Nomenclatura HTML
- IDs para landmarks y JS hooks: `id="nav-toggle"`, `id="header"`
- Clases para estilos: `class="portfolio__item"`
- Data attributes para datos: `data-category="instalacion"`, `data-count="1500"`

### Nomenclatura JS
- camelCase para variables y funciones
- Constantes para elementos DOM seleccionados
- Funciones descriptivas: `goToHeroSlide()`, `animateCounter()`, `createDots()`
