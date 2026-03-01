App de Clima – Módulo 5

POO, ES6+ y Consumo de API

Descripción

Aplicación web de clima que permite visualizar el estado climático actual y el pronóstico semanal de distintos lugares. La información se obtiene mediante el consumo de una API simulada en formato JSON, utilizando programación asíncrona con fetch y async/await.

El foco de esta versión del proyecto está en la correcta organización del código JavaScript aplicando Programación Orientada a Objetos (POO), el uso de funcionalidades modernas de ES6+ y la actualización dinámica del DOM. El diseño visual reutiliza estilos desarrollados en módulos anteriores.

Funcionalidades
Home

Listado de al menos 5 lugares.

Muestra temperatura actual y estado del clima.

Datos obtenidos desde una API simulada.

Renderizado dinámico desde JavaScript.

Navegación al detalle de cada lugar.

Detalle del lugar

Pronóstico semanal del lugar seleccionado.

Estadísticas calculadas a partir de los datos obtenidos:

Temperatura mínima.

Temperatura máxima.

Temperatura promedio semanal.

Cantidad de días lluviosos.

Sección de alertas climáticas:

Alerta de calor cuando el promedio semanal supera un umbral definido.

Alerta de semana lluviosa cuando se detectan varios días con lluvia.

La navegación entre vistas se realiza mediante parámetros en la URL, sin uso de router.

Estructura del proyecto
proyecto-clima/
├── index.html
├── detalle.html
├── css/
│   └── styles.css
├── js/
│   ├── apiClient.js
│   ├── weatherApp.js
│   ├── home.js
│   └── detalle.js
└── data/
    └── clima.json

Estructura de clases
ApiClient

Clase encargada de la comunicación con la API.

Responsabilidades:

Realizar peticiones utilizando fetch.

Manejar respuestas asíncronas.

Retornar datos en formato JSON.

Manejar errores básicos de carga.

WeatherApp

Clase principal de la aplicación.

Responsabilidades:

Procesar los datos climáticos obtenidos desde la API.

Calcular estadísticas semanales.

Generar alertas climáticas según reglas definidas.

Centralizar la lógica de negocio del proyecto.

API de clima utilizada

Tipo: API simulada (archivo JSON local).

Formato: JSON.

Ubicación: data/clima.json.

La API simulada permite cumplir con los requisitos de consumo de API y asincronía sin depender de servicios externos.

Programación asíncrona

La aplicación utiliza:

fetch para obtener los datos.

async / await para el manejo de asincronía.

try / catch para el control de errores.

En caso de error, se muestra un mensaje visible en la interfaz.

Uso de ES6+

El proyecto utiliza de forma consistente:

let y const.

Clases (class).

Arrow functions.

Template literals.

Métodos de arreglos como map, filter y reduce.

Módulos ES (import / export).

Ejecución del proyecto

Debido al uso de fetch, el proyecto debe ejecutarse desde un servidor local.

Forma recomendada:

Abrir el proyecto en Visual Studio Code.

Ejecutar index.html utilizando la extensión Live Server.