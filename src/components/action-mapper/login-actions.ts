import { apiLogin } from "../remote/login"


export const loginTypes = {
    SUCCESSFUL_LOGIN: 'LOGIN_SUCCESSFUL_LOGIN',
    UNSUCCESSFUL_LOGIN: 'LOGIN_UNSUCCESSFUL_LOGIN',
    LOGOUT: 'LOGOUT'
}


export const updateCurrentUser = (username:string, password:string, logout:boolean) => async (dispatch:any) => {
    if(logout === true){
        dispatch({//this object is called an action
            type:loginTypes.LOGOUT,
            payload:{
                currentUser: null
            }
        })
        return;
    }
    let response:any = await apiLogin(username,password)
    console.log(response);
    if(response.body){
        dispatch({//this object is called an action
            type:loginTypes.SUCCESSFUL_LOGIN,
            payload:{
                currentUser:response.body
            }
        })
    }
    else {
        dispatch({
            type:loginTypes.UNSUCCESSFUL_LOGIN,
            payload: {
                loginMessage:response.loginMessage
            }
        })

    }


}