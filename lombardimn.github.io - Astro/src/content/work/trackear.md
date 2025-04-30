---
title: Trackear
publishDate: 2025-04-29 18:00:00
idImg: '5'
img: /assets/imgProjects/trackear.png
img_alt: Vista de la interfaz principal donde se visualiza la tabla de seguimiento de hábitos
description: |
  Trackear es una aplicación fullstack desarrollada en Next.js y Node.js orientada al seguimiento de hábitos personales, diseñada con una interfaz minimalista y despliegue completo en Vercel y Render.
url: https://trackear.vercel.app/
tags:
  - Next.js
  - TypeScript
  - Node.js
  - PostgreSQL
  - Vite
  - Tailwind CSS
  - Sequelize
  - Fullstack
---

## Seguimiento de hábitos de forma simple y efectiva

> Trackear surge de la necesidad de visualizar y registrar de manera ágil el progreso de hábitos o tareas personales.

Trackear es una aplicación fullstack desarrollada con <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">**Next.js**</a> y <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">**Node.js**</a>, con una API REST gestionada por Sequelize y PostgreSQL como base de datos. Permite registrar actividades y llevar un seguimiento diario del cumplimiento de las mismas a través de una interfaz visual tipo calendario semanal.

### Tecnologías y herramientas

El stack tecnológico utilizado incluye:

- **Frontend**
  - Next.js + TypeScript
  - Tailwind CSS para estilos rápidos y responsivos
  - Arquitectura basada en rutas app router (`app/`)

- **Backend**
  - Node.js + Express
  - Sequelize ORM
  - PostgreSQL como base de datos relacional

- **Despliegue**
  - Frontend desplegado en Vercel
  - Backend desplegado en Render

- **Control de calidad**
  - ESLint + Prettier para mantener un código consistente y legible
  - GitHub como sistema de control de versiones

### Descripción técnica del funcionamiento

***

- **Modelo de datos:** El sistema gestiona entidades como `User`, `Activity` y `Day`, permitiendo asociar múltiples actividades a un usuario y marcar su cumplimiento diario.
- **Autenticación:** Se implementa autenticación básica (sin proveedores externos) para identificar usuarios y mostrar sus datos.
- **Gestión de hábitos:** Cada hábito puede ser marcado por día, y se persiste la información en la base de datos para análisis posterior.
- **Arquitectura Next.js:** Aprovecha rutas del `App Router`, rendering híbrido (`SSR`, `ISR`, `Client Components` cuando aplica) y `use client` para componentes interactivos.
- **Hooks y estado:** Uso de `useState`, `useEffect`, `useContext` y `useRouter` para navegación y gestión de estados en componentes cliente.
- **Persistencia:** Sequelize define los modelos y relaciones en PostgreSQL, asegurando integridad entre `users`, `activities` y `days`.
- **API modular:** El backend expone endpoints RESTful desacoplados por recurso, siguiendo buenas prácticas REST.
- **Ciclo de CI/CD:** Deploy automatizado al hacer push a la rama `main`, generando versión productiva en Vercel y Render.

### Funcionalidades destacadas

- Visualización de hábitos en una grilla semanal (lunes a domingo)
- Edición y eliminación de hábitos
- Registro visual diario (checkeo)
- Interfaz minimalista y responsiva
- Navegación fluida y sin recargas innecesarias

***

Trackear busca ser una solución ligera y efectiva para el control de hábitos sin requerir registros complejos ni configuraciones extensas, ideal para usuarios que buscan foco y claridad.

Puedes ver el proyecto online en 👉 [trackear.vercel.app](https://trackear.vercel.app/)  
Repositorio disponible en 👉 [github.com/Lombardimn/trackear](https://github.com/Lombardimn/trackear)
