import { apiRegister } from "../remote/register"



export const registerTypes = {
    SUCCESSFUL_REGISTRATION: 'REGISTRATION_SUCCESSFUL_REGISTRATION',
    UNSUCCESSFUL_REGISTRATION: 'REGISTRATION_UNSUCCESSFUL_REGISTRATION'
}


export const registerUser = (username:string, password:string, firstName:string, lastName:string, email:string, role:string) => async (dispatch:any) => {
    let response:any = await apiRegister(username,password,firstName,lastName,email,role)
    if(response.body){
        dispatch({//this object is called an action
            type:registerTypes.SUCCESSFUL_REGISTRATION,
            payload:{
                message:response.message
            }
        })
    }else {
        dispatch({
            type:registerTypes.UNSUCCESSFUL_REGISTRATION,
            payload: {
                message:response.message
            }
        })

    }


}