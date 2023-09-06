import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOAD_PROFILE,
    LOG_OUT
} from '../actionType'


const initialState ={
    acessToken: sessionStorage.getItem("ytc-access-token")?sessionStorage.getItem("ytc-access-token"):null,
    user: sessionStorage.getItem("ytc-user")? JSON.parse(sessionStorage.getItem("ytc-user")):null,
    loading:false
}


export const authreducer =(prevState = initialState, action) =>{
    const {type, payload} = action 

    switch (type) {
        case LOGIN_REQUEST:
            return{
                ...prevState,
                loading:true,
            }

            case LOGIN_SUCCESS:
                return{
                    ...prevState,
                    acessToken:payload,
                    loading:false,
                }

                case LOGIN_FAIL:
                    return{
                        ...prevState,
                        acessToken:payload,
                        loading:false,
                        error:payload,
                    }

                    case LOAD_PROFILE:
                        return{
                            ...prevState,
                            user: payload,
                        }

                    case LOG_OUT:
                        return{
                        ...prevState,
                        accessToken: null,
                        user: null,
                    }
               
                 default:
                    return prevState
            
    }
}