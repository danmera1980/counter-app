# Preparación y estructura de proyectos React-Redux
Este proyecto sirve como una guia de como preparar el proyecto inicial, crear los archivos necesarios para la aplicación con React-Redux, y entender el Ciclo de Vida.

## Creación de aplicacion

En la terminal correr los siguientes comandos:

```bash
npx create-react-app nombre-app
npm install redux react-redux
cd nombre-app
```
#### NOTA: Donde está 'nombre-app', se puede poner el nombre de la aplicación que desee.

Abrir el proyecto en el editor que use, por ejemplo en Visual Studio Code.

## Preparar Aplicación
Eliminar los siguientes archivos:
```files
App.css - Opcional
App.test.js
logo.svg
reportWebVitals.js
SetupTests.js
```
Luego eliminamos las importaciones de los archivos eliminados:

En App.js, eliminar la primera línea:

```javascript
1 import logo from ´../logo.svg´;
```

En el index.js, eliminar la línea 5 y lo ultimo en el archivo:

```javascript
5 import reportWebVitals from ´./reportWebVitals´;

// Eliminar los comentarios finales y
reportWebVitals();
```


## Estructura
Para tener una mejor organización crear los siguientes archivos y carpetas:

```files
.
├── components         # Aquí irán los archivos y carpetas de los componentes a ser creados.
├── redux              # Aquí van los archivos o carpetas de las diferentes partes del Redux.
      ├── actions.js   # Aquí creamos el código de las acciones
      ├── reducer.js   # Aquí creamos el código del reducer
      └── store.js     # Aqui creamos el código de store
```
Otra estructura recomendada es la siguiente:

```files
.
├── components             # Aquí irán los archivos y carpetas de los componentes a ser creados.
└── redux                  # Aquí van los archivos o carpetas de las diferentes partes del Redux.
    ├── actions            # Aquí van los archivos de las diferentes acciones.
          └── index.js     # Aquí creamos el código de las acciones
    ├── reducers           # Aquí van los archivos de los reducers.
          └── index.js     # Aquí creamos el código de los reducers
    └── store              # Aquí van los archivos del store
          └── index.js     # Aqui creamos el código de store
```

## Contenido de las partes de Redux

### Archivo actions.js
Se sugiere crear el siguiente contenido (ejemplo para una aplicacion de contador):

```javascript
const increment =  () => {
   return {
     type: 'INCREMENT'
   }
}

const decrement =  () => {
   return {
     type: 'DECREMENT'
   }
}
```

Incluir las acciones que sean necesarias

Se sugiere crear el siguiente contenido (ejemplo para una aplicacion de contador):

### Archivo reducer.js
Se sugiere crear el siguiente contenido con switch:

```javascript
const initialState = { counter: 0 }
const counter = (state = initialState, action) { 
   switch(action.type){
      case 'INCREMENTAR':
          return { ...state, counter: state.counter + 1};
      case 'DECREMENT':
          return { ...state, counter: state.counter - 1};
      default:
          return state
   }
}
```
Se sugiere crear el siguiente contenido con if:

```javascript
const initialState = { counter: 0 }
const counter = (state = initialState, action) { 
   if(action.type === "INCREMENTAR"){
        return {
            ...state,
            counter: state + 1
        }
    }

   if(action.type === "DECREMENTAR"){
        return {
            ...state,
            counter: state - 1
        }
    }
    return state;
}

```

### Archivo store.js
Se sugiere crear el siguiente contenido:

```javascript
import { createStore } from 'redux';
import { counter } from './reducer'

const store = createStore(counter);

export default store;
```
