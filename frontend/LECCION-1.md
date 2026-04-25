# 📘 LECCIÓN 1: HTML y CSS desde Cero

**Proyecto:** Reparadora y Ortopedia Alemana  
**Fecha:** Abril 2026  
**Nivel:** Principiante (sin experiencia previa en frontend)

---

## 🎯 Objetivos de esta Lección

Al finalizar esta lección, entenderás:

1. ✅ Qué es HTML y cómo estructura una página web
2. ✅ Qué es CSS y cómo da estilo visual
3. ✅ Las etiquetas y propiedades más importantes
4. ✅ Cómo leer y modificar el código del proyecto

---

## 📚 ¿Por qué HTML y CSS primero?

**JavaScript es el lenguaje de programación** del frontend, pero **necesita HTML y CSS para existir**.

### Analogía con construcción de una casa:

| Capa | Tecnología | Función |
|------|------------|---------|
| **Cimientos + Estructura** | HTML | Define qué existe (paredes, puertas, ventanas) |
| **Pintura + Decoración** | CSS | Define cómo se ve (colores, texturas, estilo) |
| **Electricidad + Automatización** | JavaScript | Define cómo funciona (luces que se encienden, puertas automáticas) |

**No puedes poner cableado (JS) en una casa que no existe (HTML) o que se cae a pedazos (sin CSS).**

---

## 🏗️ HTML - HyperText Markup Language

### ¿Qué es HTML?

HTML **NO es programación**. Es **markup** (marcado).

Define la **ESTRUCTURA** y **CONTENIDO** de la página.

### Sintaxis básica:

```html
<etiqueta atributo="valor">Contenido</etiqueta>
```

Ejemplo:
```html
<h1 class="titulo">Bienvenido a mi Tienda</h1>
```

| Parte | Nombre | Función |
|-------|--------|---------|
| `<h1>` | Etiqueta de apertura | Indica el inicio del elemento |
| `class="titulo"` | Atributo | Información adicional (para CSS/JS) |
| `Bienvenido a mi Tienda` | Contenido | Lo que se muestra al usuario |
| `</h1>` | Etiqueta de cierre | Indica el fin del elemento |

### Etiquetas que más usarás:

#### Estructura principal:
```html
<!DOCTYPE html>              <!-- Define HTML5 -->
<html>                       <!-- Raíz del documento -->
  <head>                     <!-- Configuración (no visible) -->
  <body>                     <!-- Contenido visible -->
```

#### Metadatos (dentro de `<head>`):
```html
<meta charset="UTF-8">       <!-- Permite ñ, tildes -->
<meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Funciona en celulares -->
<title>Mi Página</title>     <!-- Título en la pestaña -->
<link rel="stylesheet" href="style.css"> <!-- Conecta CSS -->
```

#### Contenido semántico (HTML5):
```html
<header>                     <!-- Encabezado -->
<nav>                        <!-- Navegación -->
<main>                       <!-- Contenido principal -->
<section>                    <!-- Sección temática -->
<article>                    <!-- Contenido independiente -->
<aside>                      <!-- Contenido relacionado (sidebar) -->
<footer>                     <!-- Pie de página -->
```

#### Texto:
```html
<h1> a <h6>                  <!-- Títulos (h1 = más importante) -->
<p>                          <!-- Párrafo -->
<span>                       <!-- Texto en línea (sin salto) -->
<strong>                     <!-- Texto importante (negrita) -->
<em>                         <!-- Énfasis (cursiva) -->
```

#### Contenedores:
```html
<div>                        <!-- Contenedor genérico (block) -->
<span>                       <!-- Contenedor en línea (inline) -->
```

#### Listas:
```html
<ul>                         <!-- Lista sin orden (viñetas) -->
<ol>                         <!-- Lista ordenada (números) -->
<li>                         <!-- Item de lista -->
```

#### Enlaces y medios:
```html
<a href="url">               <!-- Enlace -->
<img src="imagen.jpg" alt="Descripción"> <!-- Imagen -->
```

#### Formularios:
```html
<form>                       <!-- Formulario -->
<input type="text">          <!-- Campo de texto -->
<input type="email">         <!-- Email -->
<input type="password">      <!-- Contraseña -->
<textarea>                   <!-- Texto multilínea -->
<button>                     <!-- Botón -->
```

### Atributos importantes:

| Atributo | Función | Ejemplo |
|----------|---------|---------|
| `class=""` | Clase para CSS (puede repetirse) | `class="btn-primary"` |
| `id=""` | Identificador único (solo uno por página) | `id="cartToggle"` |
| `href=""` | URL de destino (para `<a>`) | `href="#contacto"` |
| `src=""` | URL de archivo (para `<img>`, `<script>`) | `src="app.js"` |
| `type=""` | Tipo de input | `type="email"` |
| `placeholder=""` | Texto de ayuda | `placeholder="Buscar..."` |
| `required` | Campo obligatorio | `<input required>` |
| `disabled` | Elemento deshabilitado | `<button disabled>` |

---

## 🎨 CSS - Cascading Style Sheets

### ¿Qué es CSS?

CSS define **CÓMO SE VE** el HTML.

Si HTML es el esqueleto, CSS es la ropa y el maquillaje.

### Sintaxis básica:

```css
selector {
    propiedad: valor;
    propiedad: valor;
}
```

Ejemplo:
```css
button {
    background-color: red;
    color: white;
    padding: 10px 20px;
}
```

### Selectores más importantes:

| Selector | ¿Qué selecciona? | Ejemplo |
|----------|------------------|---------|
| `*` | Universal (todos) | `* { margin: 0; }` |
| `elemento` | Por etiqueta | `button { ... }` |
| `.clase` | Por clase | `.btn-primary { ... }` |
| `#id` | Por id (único) | `#cartToggle { ... }` |
| `elemento.clase` | Combinado | `div.container { ... }` |
| `padre > hijo` | Hijos directos | `nav > ul { ... }` |
| `:hover` | Mouse encima | `button:hover { ... }` |
| `:focus` | Elemento seleccionado | `input:focus { ... }` |
| `:disabled` | Deshabilitado | `button:disabled { ... }` |
| `::after` | Después del contenido | `a.active::after { ... }` |
| `::before` | Antes del contenido | `h1::before { ... }` |

### Propiedades más importantes:

#### Layout y posicionamiento:
```css
display: flex;               /* Flexbox (1D) */
display: grid;               /* Grid (2D) */
display: block;              /* Block (ocupa ancho completo) */
display: inline-block;       /* Inline con dimensiones */
display: none;               /* Oculto (no ocupa espacio) */

position: relative;          /* Relativo a su posición normal */
position: absolute;          /* Absoluto al padre más cercano */
position: fixed;             /* Fijo en la ventana */
position: sticky;            /* Se pega al hacer scroll */

width: 100%;                 /* Ancho */
height: 200px;               /* Alto */
max-width: 1200px;           /* Ancho máximo */

margin: 20px;                /* Espacio EXTERNO */
padding: 20px;               /* Espacio INTERNO */
border: 1px solid #ccc;      /* Borde */
border-radius: 8px;          /* Bordes redondeados */
```

#### Colores y fondo:
```css
color: #333;                 /* Color de texto */
background-color: white;     /* Color de fondo */
background: linear-gradient(...); /* Degradado */
opacity: 0.5;                /* Transparencia (0-1) */
```

#### Tipografía:
```css
font-family: Arial, sans-serif; /* Tipo de letra */
font-size: 16px;             /* Tamaño */
font-weight: 700;            /* Grosor (100-900, 400=normal, 700=bold) */
line-height: 1.6;            /* Espacio entre líneas */
text-align: center;          /* Alineación */
text-decoration: none;       /* Sin subrayado */
```

#### Flexbox:
```css
display: flex;
justify-content: center;     /* Centrado horizontal */
align-items: center;         /* Centrado vertical */
flex-direction: column;      /* Dirección (row, column) */
gap: 20px;                   /* Espacio entre elementos */
flex: 1;                     /* Ocupa espacio disponible */
```

#### Grid:
```css
display: grid;
grid-template-columns: repeat(3, 1fr); /* 3 columnas iguales */
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Responsive automático */
gap: 30px;                   /* Espacio entre celdas */
```

#### Animaciones y efectos:
```css
transition: all 0.3s;        /* Animación suave de 0.3s */
transform: translateY(-5px); /* Mueve 5px hacia arriba */
box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Sombra */
```

#### Variables CSS:
```css
:root {
    --color-primary: #E30A17;
}

button {
    background-color: var(--color-primary);
}
```

#### Media Queries (Responsive):
```css
@media (max-width: 768px) {
    /* Estilos solo para pantallas <= 768px */
    .hero h2 {
        font-size: 2rem;
    }
}
```

---

## 🔍 Cómo Explorar el Código

### 1. Abrir DevTools

En tu navegador:
- **Windows/Linux:** `F12` o `Ctrl + Shift + I`
- **Mac:** `Cmd + Option + I`

### 2. Pestaña "Elements" (Elementos)

Aquí ves el HTML en vivo:
- Pasa el mouse sobre los elementos → se resaltan en la página
- Haz click en un elemento → ves sus estilos CSS a la derecha
- Haz doble click en texto → edítalo temporalmente
- Click derecho → "Edit as HTML" para modificar estructura

### 3. Pestaña "Styles" (Estilos)

Aquí ves el CSS aplicado:
- Desmarca propiedades → ve qué pasa
- Cambia valores en vivo → experimenta sin miedo
- Los estilos tachados = sobrescritos por otros más específicos

### 4. Pestaña "Console" (Consola)

Aquí verás errores de JavaScript (lo usaremos más adelante).

---

## 🧪 Ejercicios Prácticos

### Ejercicio 1: Explorar el HTML
1. Abre `index.html` en tu navegador
2. Presiona `F12` para abrir DevTools
3. Ve a la pestaña "Elements"
4. Pasa el mouse sobre cada elemento y observa qué se resalta en la página
5. Identifica: `<header>`, `<nav>`, `<section>`, `<footer>`

### Ejercicio 2: Modificar texto en vivo
1. En DevTools, haz doble click en el título "Reparadora y Ortopedia Alemana"
2. Cámbialo a "Mi Tienda de Prueba"
3. Presiona Enter
4. ¡El cambio es inmediato! (pero temporal, no se guarda)

### Ejercicio 3: Experimentar con CSS
1. En DevTools, selecciona el `<h1>` del logo
2. En la pestaña "Styles", busca `font-size: 1.8rem`
3. Cámbialo a `3rem` → el título crece
4. Cambia `color: var(--color-dark)` a `color: blue`
5. Agrega una nueva propiedad: `text-shadow: 2px 2px 4px rgba(0,0,0,0.5);`

### Ejercicio 4: Probar responsive
1. En DevTools, haz click en el ícono de "Device Toolbar" (celular/tablet)
2. Selecciona diferentes dispositivos (iPhone, iPad, etc.)
3. Observa cómo el diseño se adapta
4. O simplemente redimensiona la ventana manualmente

### Ejercicio 5: Agregar un producto manual
1. Abre `index.html` en tu editor de código
2. Busca `<div id="calzadoProducts">`
3. Agrega un producto temporal:
```html
<div class="product-card">
    <div class="product-image">
        <img src="https://via.placeholder.com/300x200" alt="Producto prueba">
    </div>
    <div class="product-info">
        <h3>Producto de Prueba</h3>
        <p>Este es un producto temporal para practicar HTML.</p>
        <p class="product-price">$9.990</p>
        <button class="btn-add-to-cart">Agregar al carrito</button>
    </div>
</div>
```
4. Guarda y recarga la página (`F5`)
5. ¡Tu producto aparece!

---

## 📝 Tarea para la próxima lección

Antes de pasar a JavaScript:

1. ✅ Lee los comentarios en `index.html` (línea por línea)
2. ✅ Lee los comentarios en `style.css` (sección por sección)
3. ✅ Experimenta con DevTools al menos 15 minutos
4. ✅ Agrega al menos 2 productos manuales al HTML
5. ✅ Cambia colores o fuentes y observa el resultado

**No necesitas memorizar nada.** Solo familiarízate con la estructura.

En la próxima lección empezaremos con **JavaScript** — ahí es donde la página cobra vida.

---

## ❓ Preguntas Frecuentes

### ¿Necesito memorizar todas las etiquetas?
**No.** Los desarrolladores senior buscan propiedades todo el tiempo. Lo importante es entender **qué existe** y **dónde buscar**.

### ¿Cuánto tiempo debo dedicar a HTML/CSS?
Hasta que te sientas cómodo leyendo el código y haciendo cambios pequeños. Para este proyecto, **1-2 semanas** es suficiente antes de pasar a JS.

### ¿Puedo saltar directo a JavaScript?
Puedes, pero te costará más. JavaScript **manipula** HTML y CSS. Si no entiendes qué son, JS será magia negra.

### ¿Qué pasa si rompo algo?
¡Nada! Tienes Git. Puedes:
```bash
git checkout frontend/index.html  # Restaura el archivo
git reset --hard origin/main      # Restaura todo el repo
```

---

## 📚 Recursos Adicionales

- **MDN Web Docs** (Mozilla Developer Network): La biblia del desarrollo web  
  https://developer.mozilla.org/es/docs/Web

- **CSS-Tricks:** Guías visuales de CSS (especialmente Flexbox y Grid)  
  https://css-tricks.com/

- **freeCodeCamp:** Curso interactivo gratuito  
  https://www.freecodecamp.org/

---

**¿Listo para JavaScript?** Avísame cuando hayas completado los ejercicios y pasamos a la Lección 2.
