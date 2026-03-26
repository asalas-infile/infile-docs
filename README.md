# Infile Docs

Documentación técnica de los Web Services FEL de INFILE, construida con [Nextra](https://nextra.site/).

---

## 🚀 Guía de despliegue — paso a paso

### Paso 1 — Instalar Node.js (si no lo tienes)

Descarga e instala Node.js desde https://nodejs.org (versión 18 o superior).

Verifica la instalación:
```bash
node -v   # debe mostrar v18 o superior
npm -v
```

---

### Paso 2 — Crear repositorio en GitHub

1. Ve a https://github.com y accede a tu cuenta (o crea una).
2. Haz clic en **"New repository"**.
3. Nómbralo `infile-docs` (o el nombre que prefieras).
4. Déjalo **Public** (necesario para el plan gratuito de Vercel).
5. **NO** marques "Add a README file" — ya tienes uno.
6. Haz clic en **"Create repository"**.

---

### Paso 3 — Subir el proyecto a GitHub

Abre una terminal en la carpeta de este proyecto y ejecuta:

```bash
# Inicializar git
git init

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "Initial docs setup"

# Conectar con tu repositorio (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/infile-docs.git

# Subir el código
git branch -M main
git push -u origin main
```

---

### Paso 4 — Conectar con Vercel

1. Ve a https://vercel.com y haz clic en **"Sign Up"**.
2. Elige **"Continue with GitHub"** — esto conecta automáticamente tus repositorios.
3. Una vez en el dashboard, haz clic en **"Add New Project"**.
4. Busca y selecciona el repositorio `infile-docs`.
5. Vercel detectará automáticamente que es un proyecto Next.js.
6. Deja todas las configuraciones por defecto y haz clic en **"Deploy"**.

En 1–2 minutos tendrás tu sitio publicado en una URL como:
```
https://infile-docs.vercel.app
```

---

### Paso 5 — Actualizaciones futuras (auto-deploy)

Cada vez que hagas cambios a los archivos `.mdx` y los subas a GitHub, Vercel los desplegará automáticamente:

```bash
# Edita cualquier archivo en pages/servicios/
git add .
git commit -m "Actualizar documentación de certificación"
git push
```

Vercel detecta el push y despliega en ~1 minuto. No necesitas hacer nada más.

---

## 📁 Estructura del proyecto

```
infile-docs/
├── pages/
│   ├── _meta.json                          ← Orden de navegación principal
│   ├── index.mdx                           ← Página de inicio
│   └── servicios/
│       ├── _meta.json                      ← Orden de la sección
│       ├── index.mdx                       ← Landing de servicios
│       ├── certificacion-anulacion.mdx     ← Manual certificación/anulación DTE
│       ├── consulta-nit.mdx                ← Manual consulta NIT
│       └── consulta-cui.mdx                ← Manual consulta CUI
├── theme.config.tsx                        ← Logo, footer, configuración visual
├── next.config.js                          ← Configuración de Nextra
├── package.json
└── .gitignore
```

---

## ✏️ Cómo editar el contenido

Los archivos `.mdx` son Markdown normal + componentes React.

Para editar una página:
1. Abre el archivo correspondiente en `pages/servicios/`
2. Edita el contenido en texto plano
3. Guarda, haz commit y push — Vercel lo despliega solo

---

## 🛠️ Desarrollo local

Para previsualizar cambios localmente:

```bash
npm install
npm run dev
```

Abre http://localhost:3000 en el navegador.
