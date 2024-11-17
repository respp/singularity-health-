// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { authSlice, homeTextSlice } from './slices';

// Configuración del store
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    homeText: homeTextSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

// Tipos de ayuda para TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
