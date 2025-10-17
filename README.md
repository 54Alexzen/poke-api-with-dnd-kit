<img width="1920" height="1080" alt="Pokemon-bg" src="https://github.com/user-attachments/assets/964ac130-2720-4eb5-a7b9-95e929574740" />

<h1 align="center">Pokemón API con DnD/Kit</h1>

Proyecto interactivo desarrollado con **React**, **TypeScript** y **Vite**, que implementa funcionalidad de **arrastrar y soltar (Drag & Drop)** usando **Dnd Kit**, además de consumir datos en tiempo real desde la **PokéAPI**.  
Incluye un **componente reutilizable**, estructura **modular** y un enfoque **tipado y escalable**.

## Características

- Desarrollado con **Vite + React + TypeScript**
- **Componente reutilizable** con **Dnd Kit**
- Arquitectura **modular y limpia**
- Consumo de datos desde la **PokéAPI**
- Gestión de temas y configuración UI
- Soporte de variables de entorno (`.env`)

## Tecnologías Principales

- **React 18+**
- **TypeScript**
- **Vite**
- **Dnd Kit**
- **PokéAPI**
- **Tailwind CSS**

## Estructura del Proyecto

```bash
src/
│
├── assets/                  # Recursos estáticos (imágenes, íconos, etc.)
│
├── components/              # Componentes reutilizables
│   ├── elements/            # Elementos atómicos o genéricos de UI
│   ├── theme/               # Componentes de configuración de tema
│   └── ui/                  # Bloques visuales o layouts
│
├── config/
│   └── environments-config.ts   # Configuración de variables de entorno
│
├── constants/
│   └── api-constant.ts          # Constantes de API (URLs, endpoints, etc.)
│
├── hooks/
│   └── useGetPokemons.ts        # Hook personalizado para obtener Pokémons
│
├── pages/
│   └── Home.tsx                 # Página principal
│
├── service/
│   ├── api-service.ts           # Lógica genérica de consumo API
│   └── pokemon-service.ts       # Lógica específica para PokéAPI
│
├── types/
│   ├── pokemon-types.ts         # Tipos e interfaces de Pokémon
│   └── theme-types.ts           # Tipos para el sistema de temas
│
├── utils/
│   ├── colors-badges.ts         # Colores asociados a tipos de Pokémon
│   ├── extract-id.ts            # Utilidad para extraer IDs de Pokémon
│   └── fetch-pokemon.ts         # Helper para peticiones a la API
│
├── App.tsx
├── main.tsx
├── globals.css
└── global.d.ts
```
## Instalación y Ejecución

Asegúrate de tener instalado:

- Node.js (versión 18 o superior)
- npm o yarn

## Instalación del proyecto

1. Clonar el repositorio
```bash
git clone https://github.com/54Alexzen/poke-api-with-dnd-kit.git
```

2. Entrar al directorio del proyecto
```bash
cd poke-api-with-dnd-kit
```

4. Instalar dependencias
```bash
npm install
```
5. Crear el archivo de entorno (.env) en la raíz del proyecto y agrega la siguiente variable:
```bash
VITE_API_URL=https://pokeapi.co/api/v2
```

## Ejecución del proyecto

Inicia el entorno de desarrollo con:
```bash
npm run dev
```
El proyecto se ejecutará en:
```bash
http://localhost:5173
```

## Authors

- [@54Alexzen](https://www.github.com/54Alexzen)
