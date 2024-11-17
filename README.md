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
