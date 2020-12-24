---
title: "Consumiendo APIs con Axios en React con Hooks"
tags: ["react"]
date: "2020-12-23"
spoiler: "Aprende a consumir APIs con Axios en React usando useEffect"
posttype: blog
---

![Axios](https://miro.medium.com/max/3164/1*80J2Wa21DYXxMbbtBziJHg.png)

> En este post aprenderás como usar Axios para utilizar cualquier API utilizando las últimas tecnologías de React, los Hooks, en especial useEffect.

### ¿Qué leches es Axios?
Axios es una tecnologia que nos sirve como puente hacia nuestras peticiones HTTP hacia un servidor. Nos facilita toda la verbosidad de realizar peticiones HTTP desde un cliente, en nuestro caso, React.

### Como instalar Axios
```bash
npm install -D axios -E
```
Instalamos Axios en su ultima version en nuestras dependencias de desarrollo.

### Configurando nuestro servidor Axios
Lo primero que necesitamos es nuestra API, en este ejemplo usaremos una API casera de Pokemon.

Creamos las siguientes carpetas y archivos:
```
├── axios
│   ├── index.js
│   └── server.js
```
En nuestro archivo server configuraremos nuestro servidor Axios de la siguiente manera:
```js
import axios from 'axios';

export default axios.create({
    baseURL: "https://localhost:44332/api"
})
```

Ya con nuestro servidor montado procederemos a realizar peticiones HTTP a nuestro servidor.

### Peticiones HTTP al servidor
En el archivo index:
```js
import API from './server';

export async function getPokemones() {
    try {
        const response = await API.get('/pokemones');
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export async function createPokemon(pokemon) {
    try {
        await API.post('/pokemones', pokemon);
        return pokemon;
    } catch (error) {
        console.log(error);
    }
}

...
```
En este ejemplo solo usaremos dos endpoints de nuestra API de pokemon.

### Consumiendo la API usando el hook useEffect
```js
  const [pokemones, setPokemones] = React.useState([]);

  React.useEffect(() => {
    async function getAllPokemones() {
      const result = await getPokemones();
      setPokemones(result);
    }
    getAllPokemones();
    //eslint-disable-next-line
  }, []);
```
Con un hook de estado definimos el estado de nuestra lista de pokemones, luego utilizamos el hook useEffect para en cada render utilice la funcion que creamos para hacer la peticion HTTP y al final guardamos el resultado en nuestro hook de estado de pokemones.

### Mostrando los datos
Como nuestros datos vienen en un array, creamos un componente para renderizar los resultados de la peticion HTTP de nuestra API:
```js
export default function Pokemones({ pokemones }) {
  if (pokemones.length === 0) return null;
  return (
    <>
      <h2>Lista de Pokemones</h2>
      <ul>
        {pokemones.map((pokemon) => {
          const { id, nombre } = pokemon;
          return <li key={id}>{nombre}</li>;
        })}
      </ul>
    </>
  );
}
```
En el primer render nuestra peticion de pokemones viene vacia, por eso preguntamos al inciio si el tamaño del arreglo que recibimos del componente principal viene vacio, entonces retorna null para luego poder mapear cada pokemon y ponerlo en una lista.

### Recomendaciones finales
- Asegurar que nuestra API tenga habilitado CORS
- Con useEffect solo renderizar lo necesario, para evitar un bucle infinito de renders
- Utilizar try-catch para cada peticion al servidor

**Repositorio de la demostracion:** https://github.com/wilmerterrero/pokedex

