# Dashboard Challenge Frontend

## Descripción General del Proyecto

Este es un proyecto frontend desarrollado con **Vue 3**, **TypeScript** y **Vite** que implementa un sistema de dashboards interactivos. La aplicación permite a los usuarios crear, gestionar y visualizar dashboards personalizados con funcionalidades de autenticación y autorización.

### Características Principales

- 🔐 **Sistema de Autenticación**: Login y registro de usuarios
- 📊 **Gestión de Dashboards**: Crear, listar y visualizar dashboards
- 📈 **Visualización de Datos**: Gráficos interactivos usando Chart.js
- 🎨 **Interfaz Moderna**: Diseño responsive con Tailwind CSS
- 🔄 **Estado Global**: Gestión de estado con Pinia
- 🛣️ **Navegación**: Sistema de rutas protegidas con Vue Router
- 📱 **Componentes Reutilizables**: Arquitectura atómica de componentes

### Tecnologías Utilizadas

- **Vue 3** - Framework de JavaScript progresivo
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción rápida
- **Vue Router** - Enrutamiento oficial de Vue
- **Pinia** - Store de estado para Vue
- **Tailwind CSS** - Framework CSS utilitario
- **Chart.js** - Biblioteca de gráficos
- **Axios** - Cliente HTTP
- **GridStack** - Sistema de grid interactivo

## Requisitos para Correr el Proyecto

### Requisitos del Sistema

- **Node.js** (versión 18.0.0 o superior)
- **npm** (incluido con Node.js) o **yarn**
- **Navegador web moderno** (Chrome, Firefox, Safari, Edge)

### Variables de Entorno

El proyecto requiere configurar las siguientes variables de entorno:

```env
VITE_API_URL=http://localhost:3000/api
```

> **Nota**: Asegúrate de que el backend esté corriendo en la URL especificada en `VITE_API_URL`.

## Pasos para Levantar el Frontend

### 1. Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd dashboard-challenge-front
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```bash
# .env
VITE_API_URL=http://localhost:3000/api
```

### 4. Ejecutar el Proyecto en Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

### 5. Construir para Producción

```bash
npm run build
```

### 6. Previsualizar la Construcción

```bash
npm run preview
```

## Estructura del Proyecto

```
src/
├── api/                    # Configuración de API y servicios
│   ├── axios-config.ts    # Configuración de Axios
│   ├── navigation.ts      # Utilidades de navegación
│   └── services/          # Servicios de API
├── assets/                # Recursos estáticos
├── composables/           # Composables de Vue
├── interfaces/            # Interfaces TypeScript
├── router/                # Configuración de rutas
├── stores/                # Stores de Pinia
├── ui/                    # Componentes de interfaz
│   ├── atoms/            # Componentes atómicos
│   ├── molecules/        # Componentes moleculares
│   ├── organisms/        # Componentes organismos
│   ├── layouts/          # Layouts de la aplicación
│   ├── pages/            # Páginas principales
│   └── views/            # Vistas de la aplicación
└── utils/                # Utilidades generales
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción

## Funcionalidades

### Autenticación

- Registro de nuevos usuarios
- Inicio de sesión
- Protección de rutas
- Gestión de tokens JWT

### Dashboards

- Listado de dashboards del usuario
- Creación de nuevos dashboards
- Visualización detallada de dashboards
- Gráficos interactivos con Chart.js

### Interfaz de Usuario

- Diseño responsive
- Componentes reutilizables
- Navegación intuitiva
- Estados de carga y error
