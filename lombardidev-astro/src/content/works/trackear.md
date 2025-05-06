---
title: Trackear
description: Controla tus ingresos y egresos de forma inteligente y segura.
publishDate: 2025-04-16 18:00:00
status: Finalizado
img: /img-projects/trackear.png
repo: https://github.com/Lombardimn/trackear
demo: https://trackear.vercel.app/
tags: [Next.js, Node.js, PostgreSQL, TypeScript, Tailwind]
---

## Descripción breve

Trackear es una herramienta web enfocada en la gestión de Presupuestos. Permite clasificar y visualizar tus gastos con una interfaz clara y fácil de usar.

## Arquitectura y Tecnologías

### Backend (API RESTful)

- **Node.js** + **Express**: arquitectura modular y escalable.
- **MongoDB** + **Mongoose**: almacenamiento NoSQL con esquemas flexibles.
- **JWT**: autenticación basada en tokens.
- **dotenv**: configuración segura con variables de entorno.

El backend se diseñó siguiendo principios de seguridad, validaciones exhaustivas y control de acceso por roles.

### Frontend (SSR)

- **Next.js** (App Router): renderizado del lado del servidor y navegación fluida.
- **TypeScript**: mayor control y mantenibilidad del código.
- **Tailwind CSS**: estilos rápidos, consistentes y responsivos.

La UI se comunica con la API mediante llamadas seguras, priorizando rendimiento y experiencia en dispositivos móviles.

## Desafíos técnicos y soluciones

- **Autenticación y roles:** Se implementó una estrategia segura usando JWT con expiración y verificación en cada endpoint protegido.
- **Modelo financiero flexible:** El modelo de datos permite categorizar movimientos y escalar a reportes más complejos sin rediseñar la base.
- **Diseño modular:** Se separaron controllers, middlewares, rutas y modelos para facilitar mantenibilidad.

## Lo aprendido

- Refiné la integración de APIs seguras en Next.js usando fetch con token desde SSR.
- Profundicé en control de acceso por roles desde el backend.
- Mejoré el diseño de componentes responsivos y adaptativos con Tailwind.

## ¿Cómo clonar o usar?

```bash
git clone https://github.com/Lombardimn/trackear
cd trackear
pnpm install
pnpm dev
```
