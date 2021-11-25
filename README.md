# Preparación y estructura de proyectos React-Redux
Este proyecto sirve como una guia de como preparar el proyecto inicial, crear los archivos necesarios para la aplicación con React-Redux, y entender el Ciclo de Vida.

## Creación de aplicacion

En la terminal correr los siguientes comandos:

```bash
npx create-react-app nombre-app
cd nombre-app
npm install redux react-redux
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
     type: 'INCREMENTAR'
   }
}

const decrement =  () => {
   return {
     type: 'DECREMENTAR'
   }
}
```

Incluir las acciones que sean necesarias

Se sugiere crear el siguiente contenido (ejemplo para una aplicacion de contador):

### Archivo reducer.js
Se sugiere crear el siguiente contenido con switch:

```javascript
const initialState = { counter: 0 }
const counterReducer = (state = initialState, action) { 
   switch(action.type){
      case 'INCREMENTAR':
          return { ...state, counter: state.counter + 1};
      case 'DECREMENTAR':
          return { ...state, counter: state.counter - 1};
      default:
          return state
   }
}
```
Se sugiere crear el siguiente contenido con if:

```javascript
const initialState = { counter: 0 }
const counterReducer = (state = initialState, action) { 
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
import { counterReducer } from './reducer' // Cambiar nombre y ubicación dependiendo a lo creado.

const store = createStore(counterReducer);

export default store;
```

### Archivo index.js principal
Recordar configurar este archivo:

```javascript
import store from './store' // Cambiar nombre y ubicación dependiendo a lo creado.
import { Provider } from 'react-redux'

ReactDom.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
```

## Components

Para crear components tenemos 2 opciones, con clases o con funciones.
### Clases
```javascript
import React from 'react';

// Hacer importación de las demas librerias

export class NombreDeClase extends React.Component{
  constructor(props){
    super(props);
    this.state = {
       title: ¨
    };
  }

  // Ingresar funciones o variables

  render (){
    return (
       <div>
          <h1>Hello</h1>
       </div>
    );
  }
}

// Para Redux
function mapStateToProps(state){
  return {
     // mapear el estado del store
    // codigo aqui
  }
}



function mapDispatchToProps(state){
  return {
    // codigo aqui
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NombreDeClase)
```

### Funciones 

```javascript
import React from 'react';

// Hacer importación de las demas librerias

const NombreDeFuncion = (props) => {
  const [name, setName] = React.useState("")

  // Ingresar funciones o variables

    return (
       <div>
          <h1>Hello</h1>
       </div>
    );
}

// Para Redux
function mapStateToProps(state){
  return {
    // codigo aqui
  }
}



function mapDispatchToProps(dispatch){
  return {
    // definir las acciones aqui
    // codigo aqui
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NombreDeFuncion)
```
