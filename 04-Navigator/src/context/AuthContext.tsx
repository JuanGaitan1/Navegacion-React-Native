import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";


export interface AuthState{
    isLoggedIn:boolean;
    username?:string;
    favoriteIcon?: string;
}

//estado inicial

export const authInitialState: AuthState = {
    isLoggedIn:false,
    username:undefined,
    favoriteIcon: undefined,
}

//Lo usamos para decirle a react como luce y que expone el context

export interface AuthContextProps{
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUser: (username: string) => void;
}


//crear contexto ,,, loque muestra a las raices hijos

export const AuthContext = createContext ({} as AuthContextProps);

//Componente proveedor del estado

export const AuthProvider = ({children} : any) => {
    
//dispatch se usa para mandarle las acciones al authReducer
    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => {
        dispatch({ type : 'signIn'});
    }

    const changeFavoriteIcon = (iconName:string ) =>{
        dispatch({type: 'changeFavIcon' , payload :iconName})
    }

    const logout = () => {
        dispatch({type: 'logout'})
    }

    const changeUser = (username: string) => {
        dispatch({type: 'changeUser' , payload: username})
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            changeUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}