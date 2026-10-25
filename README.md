# Assignment 12: Web Component Library

A UI component library built with **React**, **TypeScript**, **styled-components** and **Storybook**, served as a production build through **Docker** on `localhost:8083`.

- **GitHub repo:** https://github.com/mmera21/mera_micaela_ui_garden
- **Docker image:** `mera_micaela_ui_garden`
- **Docker container:** `mera_micaela_coding_assignment12`
- **Docker working dir:** `/mera_micaela_ui_garden`

## Components

Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown, RadioButton, Img, HeroImage, Card.

Each component folder (`src/components/<Name>/`) contains:

```
<Name>.tsx
<Name>.stories.tsx
<Name>.types.tsx
<Name>.tests.tsx
index.ts
```

## Prerequisites

- Node.js 22 LTS
- npm
- Git
- Docker Desktop (running)

## 1. Project setup

```bash
git clone https://github.com/mmera21/mera_micaela_ui_garden.git
cd mera_micaela_ui_garden
npm install --legacy-peer-deps
```

## 2. Run the app locally (development)

```bash
npm start
```

Open http://localhost:8083 (127.0.0.1:8083).

## 3. Run Storybook

```bash
npm run storybook
```

Open http://localhost:6006. Each component has a **Default** and a **Disabled** story. Use the **Controls** panel to change text and background color, and to toggle `disabled`.

## 4. Run the tests

```bash
npm test -- --watchAll=false
```

Expected result: `Tests: 26 passed` (2 tests for each of the 13 components):

1. The component is visible.
2. The background color changes when the component is `disabled`.

## 5. Docker build and deployment

Make sure Docker Desktop is running, then from the project root:

```bash
docker build -t mera_micaela_ui_garden .
docker run -d -p 8083:8083 --name mera_micaela_coding_assignment12 mera_micaela_ui_garden
```

Open http://localhost:8083 (127.0.0.1:8083).

Useful commands:

```bash
docker ps
docker logs mera_micaela_coding_assignment12
docker rm -f mera_micaela_coding_assignment12
```

If the container name is already in use, run `docker rm -f mera_micaela_coding_assignment12` and then the `docker run` command again.

## 6. Verification of Assignment 12 requirements

- [x] Created with Create React App (TypeScript) and Storybook
- [x] All 13 required components exist
- [x] Each component folder has `.tsx`, `.stories.tsx`, `.types.tsx`, `.tests.tsx` and `index.ts`
- [x] Styling done with styled-components
- [x] All components are responsive (`@media` queries)
- [x] Storybook Controls modify text and background color
- [x] Every component has a default and a disabled state
- [x] Disabled components turn grey and show a `not-allowed` cursor
- [x] Every component has at least 2 tests (visible, background color when disabled)
- [x] Dockerfile hosts the production build in working dir `/mera_micaela_ui_garden`
- [x] Container named `mera_micaela_coding_assignment12`
- [x] App available at http://localhost:8083



Prueba para Miss Maninder 

cd C:\dev
git clone https://github.com/mmera21/mera_micaela_ui_garden.git prueba_final
cd prueba_final
docker rm -f mera_micaela_coding_assignment12
docker build -t mera_micaela_ui_garden .
docker run -d -p 8083:8083 --name mera_micaela_coding_assignment12 mera_micaela_ui_garden