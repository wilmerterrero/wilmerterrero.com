---
title: "Error: could not find a declaration file for module 'xyz'"
tags: ["react"]
date: "2020-12-25"
spoiler: "Solucion practica a este error"
posttype: blog
---

> Más de una vez consturyendo apps con React y muchas dependencias me ha sucedido este error y decidí documentar la solución.

### ¿Por qué sucede?
Este error sucede cuando intentamos utilizar un modulo de terceros y este no llega a indexarse correctamente en nuestras dependencias.

### Solución
Crear un archivo `react-app-env.d.ts` junto donde está nuestro package.json y demás archivos de configuración.

Dentro de este archivo simplemente declarar el modulo que no se indexa:
```ts
/// <reference types="react-scripts">
declare module 'example-xyz';
```
