# Portafolio Personal - Matías Lombardi

Este es el código fuente de mi portafolio personal desarrollado con [Astro](https://astro.build/), desplegado en GitHub Pages. En él presento información sobre mí, mis proyectos, experiencia profesional y formas de contacto.

🔗 [Ver sitio en producción](https://lombardimn.github.io/)

---

## 🛠 Tecnologías Utilizadas

- **Astro**: Framework moderno para sitios rápidos y estáticos.
- **HTML / CSS / JavaScript**
- **GitHub Pages**: Hosting gratuito para el sitio.
- **Markdown**: Para estructurar contenido de secciones.

---

## 📁 Estructura del Proyecto

```bash
.
├── public/             # Archivos estáticos (favicon, imágenes, etc.)
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── layouts/        # Layouts base del sitio
│   ├── pages/          # Rutas del sitio (home, contacto, proyectos)
│   ├── styles/         # Archivos de estilos globales o scoped
│   └── content/        # Secciones escritas en Markdown (opcional)
├── astro.config.mjs    # Configuración de Astro
└── package.json        # Dependencias y scripts
```

---

## 🚀 Instalación local

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Lombardimn/lombardimn.github.io.git
   cd lombardimn.github.io
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar en modo desarrollo:

   ```bash
   npm run dev
   ```

4. Abrí `http://localhost:4321` para ver el sitio en vivo.

---

## 🧪 Scripts disponibles

| Comando            | Descripción                            |
|--------------------|----------------------------------------|
| `npm run dev`      | Ejecuta el sitio en modo desarrollo    |
| `npm run build`    | Genera la versión para producción      |
| `npm run preview`  | Visualiza la build localmente          |

---

## 📦 Deploy

Este sitio se despliega automáticamente con **GitHub Pages** desde la rama `main`, gracias al archivo `.github/workflows/astro.yml`.

Si necesitás hacer un despliegue manual:

```bash
npm run build
# Subir manualmente el contenido de la carpeta `dist/`
```

---

## 📌 Funcionalidades destacadas

- Diseño responsive
- Accesibilidad básica
- Navegación fluida entre secciones
- Proyectos destacados con links a repositorios
- Información de contacto clara

---

## 🧑‍💻 Autor

Desarrollado por [Matías Lombardi](https://lombardimn.github.io/)

- 💼 Analista funcional & FullStack Developer
- 🧠 Apasionado por el desarrollo web, automatización y UX

---

## 📄 Licencia

MIT. Libre de usar, modificar y compartir con atribución.
