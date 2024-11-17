//Con este hook manejo la asincronía de la autenticación

import { useDispatch, useSelector } from "react-redux"
import { loginApi } from '../services/login'
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/slices/authSlice"
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom"

interface User {
    email: string,
    password: string
}

export const useAuthStore = () => {
    const { status, user, errorMessage } = useSelector((state: any) => state.auth )
    const dispatch = useDispatch()
    const navigate = useNavigate()

const startLogin = async({ email, password }: User)=>{
        console.log({email, password})
        dispatch( onChecking() )

        try {
            const { data } = await loginApi.post('', { email, password })
            console.log('data', {data})
            localStorage.setItem('token', data.token)
            dispatch( onLogin({ name:email, uid:uuid() }) )

            navigate('/');

        } catch (error) {
            console.log(error)
            dispatch( onLogout('credenciales incorrectas') )
            setTimeout(()=>{
                dispatch( clearErrorMessage() )
            }, 10)

        }
    }

const startLogout =()=>{
    localStorage.clear()
    dispatch(onLogout(null))
}

const checkAuthToken = async () => {
    const token = localStorage.getItem('token')

    if (!token) {
        dispatch(onLogout(null))
        return
    }
    dispatch(onLogin({ name: 'Usuario', uid: 'id_de_usuario' })) // Los datos se agregarían desde el backend
}


return {
    // Propiedades
    status, 
    user, 
    errorMessage,
    
    //Métodos
    startLogin,
    startLogout,
    checkAuthToken
  }
}
