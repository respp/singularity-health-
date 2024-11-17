** Estructura basada en vistas **

src/
├── @types/
│   └── index.d.ts
├── assets/
│   └── images/
├── components/
│   ├── common/  # Componentes reutilizables globalmente
│   ├── auth/    # Relacionado con autenticación
│   ├── home/    # Relacionado con la página de inicio
├── views/
│   ├── AuthPage/  # Página o vista de login/registro
│   ├── HomePage/  # Página o vista principal
│   └── OtherPage/ # Otras vistas
├── services/
│   ├── authService.ts
│   ├── homeService.ts
├── store/
│   ├── slices/
│   ├── actions/
│   └── reducers/
└── utils/
    ├── helpers.ts

Desarrollar sobre los puntos a evaluar

1. Buenas prácticas de desarrollo: no exponer la api - estructura de carpetas
2. Buen manejo de estados en la App: se utiliza redux con hooks, tanto con inicio de sesion como con el home para evitar el prop drilling
3. Maquetación de XD: algunos elementos brindados por el xd no eran iguales asi que a ojo tuve que cambiarlas
4. Arquitectura de la app: (La arquitectura de la aplicación debe ser
pensada para ser escalable).