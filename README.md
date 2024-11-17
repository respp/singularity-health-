# Prueba Técnica

## Instrucciones para ejecutar la aplicación

1. **Clonar el repositorio:**
Clona este repositorio a tu máquina local utilizando:

        git clone https://github.com/respp/web-app-development.git

2. **Instalar dependencias:**
    Dentro de la carpeta del proyecto, instala las dependencias necesarias ejecutando:

    ```bash
    npm install
    ```

3. **Configurar el archivo .env:**
    Dentro de la raíz del proyecto, encontrarás un archivo llamado .env.template, renombralo a .env. En este archivo, debes agregar las variables de entorno necesarias para el correcto funcionamiento de la aplicación.
    En este caso al ser una prueba se utiliza la siguiente API:

    ```bash
    VITE_API_URL = https://reqres.in/api
    ```
    Esto es por seguridad y buenas prácticas, no hay que exponer la URL de la API directamente en el código. Utilizo el archivo .env para manejar esta configuración de manera segura.

4. **Ejecutar la aplicación:**
    Una vez que el archivo .env esté configurado, podes iniciar la aplicación en modo de desarrollo con:

    ```bash
    npm run dev
    ```


## Puntos a evaluar

### 1. Buenas prácticas de desarrollo

La API está guardada originalmente en el archivo .env para evitar la exposición, ya que es considerada una clave sensible, y por ende, una buena práctica guardarla en una variable de entorno.
Además, se utiliza un token de autenticación para proteger las rutas y garantizar que solo los usuarios autorizados accedan a la web.
La estructura de carpetas está organizada de manera modular, facilitando la escalabilidad y el mantenimiento. Las carpetas se dividen en componentes, vistas, servicios y la configuración del estado.
Tambien hago uso de un hook personalizado para realizar las validaciones del formulario. 

### 2. Buen manejo de estados en la App

Usé **Redux con hooks** para manejar los estados , tanto para el inicio de sesión como para la home. Esto ayuda a evitar el **prop drilling** y facilita la gestión centralizada de los estados de la aplicación.

- Los **hooks personalizados** junto a redux son utilizados para el manejo de la asincronia.

### 3. Maquetación de XD

Hice la maquetacion de la web siguiendo los elementos del diseño de XD. Sin embargo, algunos elementos no coincidían, por lo que hice algunos cambios a ojo, pero con la intención de mantener la coherencia visual con el diseño original.

### 4. Arquitectura de la App

Utilicé la arquitectura de view-based structure, la cual se basa en gestionar la vista de forma separada y gestionada de manera modular, lo que facilita la incorporación de nuevas funcionalidades y páginas a futuro.

- **Ruta de inicio de sesión**: Hice una autenticación utilizando una API de prueba. Los usuarios pueden iniciar sesión con cualquier mail y contraseña válidos de la API de prueba.

  **Credenciales de ejemplo:**
  - **Email**: eve.holt@reqres.in
  - **Contraseña**: cityslicka

```python
src/
├── @types/                # Archivos de definición TypeScript
│   └── index.d.ts         # Definiciones globales de tipos
├── components/
│   ├── common/            # Componentes reutilizables globalmente
│   ├── auth/              # Componentes relacionados con autenticación
│   ├── home/              # Componentes específicos de la página de inicio
│   └── notfound/          # Componentes para manejar rutas no encontradas (404)
├── hooks/                 # Hooks personalizados para manejar lógica reutilizable
├── views/
│   ├── AuthPage/          # Página o vista de login/registro
│   ├── HomePage/          # Página o vista principal
│   └── OtherPage/         # Otras vistas adicionales de la aplicación
├── services/
│   ├── authService.ts     # Lógica de servicios para autenticación
│   └── homeService.ts     # Lógica de servicios para la página de inicio
├── store/
│   ├── slices/            # Slices de Redux para manejo de estado
│   ├── actions/           # Acciones de Redux para modificar el estado
│   └── reducers/          # Reducers de Redux para actualizar el estado
├── helpers/               # Funciones de ayuda y utilidades generales
└── routes/                # Configuración de rutas de la aplicación
```