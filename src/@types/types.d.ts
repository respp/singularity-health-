export interface Credentials {
    email: string;
    password: string;
}

export interface User {
    token: string;
    id?: number; // Puede incluir el id si es que tu API devuelve este campo
    email?: string;
    [key: string]: any; // Para otros campos adicionales que pueda tener tu API
}

export interface AuthState {
    user: User | null;
}

export interface FormValidations {
    [key: string]: [(value: any) => boolean, string];
}