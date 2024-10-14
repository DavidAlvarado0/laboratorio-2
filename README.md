
# My React App

## Instalación

1. Asegúrate de tener [Node.js](https://nodejs.org) instalado.
2. Ejecuta el siguiente comando para crear un nuevo proyecto en React:
   ```bash
   npx create-react-app my-react-app
   ```
3. Entra en la carpeta del proyecto:
   ```bash
   cd my-react-app
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```

Esto abrirá la aplicación en el navegador en `http://localhost:3000/`.

## Componentes en React

Un componente en React es una pieza reutilizable de la interfaz de usuario. Los componentes pueden ser clases o funciones, y cada componente puede tener su propio estado y lógica. En este proyecto, hemos creado un componente simple llamado `Header`, que muestra un encabezado básico en la interfaz de usuario.

```javascript
import React from 'react';

function Header() {
  return (
    <header>
      <h1>Bienvenido a Mi Aplicación React</h1>
    </header>
  );
}

export default Header;
```

## Diferencias entre JSX y HTML

JSX es similar a HTML, pero hay algunas diferencias importantes:

1. En JSX, las etiquetas deben estar cerradas correctamente. Incluso los elementos vacíos como `<img />` o `<br />` deben estar autocerrados.
2. Las propiedades en JSX usan camelCase en lugar de kebab-case. Por ejemplo, `class` en HTML se convierte en `className` en JSX.
3. JSX permite incluir expresiones de JavaScript dentro de llaves `{}`.

Ejemplo de JSX en este proyecto:

```javascript
return (
  <header>
    <h1>{titulo}</h1>
  </header>
);
```

## Props en React

Las props son argumentos que se pasan a los componentes en React. Permiten enviar datos de un componente a otro. En este proyecto, hemos creado un componente `UserInfo` que recibe las props `nombre` y `edad` para mostrar información de un usuario.

```javascript
function UserInfo({ nombre, edad }) {
  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}
```

## Flujo de Datos en React

React utiliza un flujo de datos unidireccional, donde los datos fluyen de los componentes padres a los hijos a través de props. Por ejemplo, en nuestro proyecto, `App` es el componente padre que envía datos (nombre y edad) al componente `UserInfo`.

```javascript
<UserInfo nombre="Juan Pérez" edad={25} />
```

## Manejo de Estado

En este proyecto, hemos implementado un contador que utiliza el estado para incrementar su valor cada vez que se hace clic en un botón.

```javascript
const [contador, setContador] = useState(0);

const incrementar = () => {
  setContador(contador + 1);
};
```

## Manejo de Eventos

El contador también maneja eventos de usuario a través del evento `onClick` que se dispara al hacer clic en el botón.
