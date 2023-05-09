import { AuthState } from "./AuthContext";

type AuthAction = 
        |{ type: 'signIn'}
        |{type: 'changeFavIcon' , payload: string}
        |{type: 'logout'}
        |{type: 'changeUser' , payload: string}


export const authReducer = (state : AuthState, action: AuthAction):AuthState => {

    switch ( action.type ) {
        case 'signIn':
                return{
                    ...state,
                    isLoggedIn:true,
                    username: 'no-username-yet'
                }
        case 'logout':
            return{
                ...state,
                isLoggedIn:false,
                username: undefined,
                favoriteIcon: undefined
            }
            break;
        case 'changeUser': 
        return{
            ...state,
            username:action.payload
        }
        case 'changeFavIcon':
            return{
                ...state,
                favoriteIcon: action.payload
            }
        default:
            return state
    }

}