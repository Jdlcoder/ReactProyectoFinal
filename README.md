## Documentación del Proyecto Final - e-commerce
Este proyecto es una implementación de un sitio web de comercio electrónico utilizando las siguientes tecnologías:

* Bootstrap 5.2.3
* Firebase 9.17.1
* React 18.2.0
* React Bootstrap 2.7.0
* React Router DOM 6.6.2

### Instalación
###### Para instalar el proyecto, sigue los siguientes pasos:

1. Clona el repositorio https://github.com/Jdlcoder/ReactProyectoFinal.git v en tu máquina local.
2. Abre una terminal en la carpeta del proyecto.
3. Ejecuta el comando npm install para instalar las dependencias.
4. Configuración de Firebase
5. Para utilizar Firebase en el proyecto, debes crear un proyecto de Firebase y configurar las credenciales en el archivo .env del proyecto que se encuentra en el directorio raiz. 

###### Sigue los siguientes pasos para configurar Firebase:

1. Crea un proyecto en Firebase.
2. Crea una base de datos en Firebase.
3. Crea una cuenta de almacenamiento en Firebase.
4. Agrega las siguientes variables de entorno al archivo .env con los valores de tu proyecto de Firebase:
REACT_APP_API_KEY=TuApiKey
REACT_APP_AUTH_DOMAIN=TuDominioDeAutenticación
REACT_APP_PROJECT_ID=TuIdDeProyecto
REACT_APP_STORAGE_BUCKET=TuBucketDeAlmacenamiento
REACT_APP_MESSAGING_SENDER_ID=TuIdDeEnvíoDeMensajes
REACT_APP_APP_ID=TuIdDeAplicación


###### Ejecución
Para ejecutar el proyecto, sigue los siguientes pasos:

1. Abre una terminal en la carpeta del proyecto.
2. Ejecuta el comando npm start para iniciar el servidor.
3. Abre un navegador web y navega a http://localhost:3000/ para ver el sitio web.

###### Funcionalidades
Este proyecto implementa las siguientes funcionalidades:

1. Lista de productos
2. Lista de productos filtrados por categoría
3. Carrito de compras

##### Consideraciones

El proyecto cumple con los requerimientos solicitadas en la rúbrica. Se aclara que está fuera del alcance de este proyecto el manejo del stock, por lo que las validaciones que dicha funcionalidad conlleven no están implementadas en esta versión.

Para emular diferentes situaciones, producto con stock y sin stock, se implementó un método en el componente ItemDetail llamado randStockValue que asigna un valor de stock aleatorio entre 0 y 10. Si el producto no tiene stock se deshabilita el botón Agregar al Carrito.

##### Utilitario

Para popular la base de Firestore de manera automática se utilizó la herramienta https://github.com/Jdlcoder/ReactUtilities.git