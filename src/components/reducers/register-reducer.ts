import { IRegisterState } from ".";
import { registerTypes } from "../action-mapper/register-action";



const initialState:IRegisterState = {
    message:''
}


//we have a function that recieves actions, and returns the new state after that action
export const registerReducer = (state = initialState, action:any) => {
    //all of the different ways for the reducer to update state
    //based on the type of the action it recieves
    switch (action.type) {
        case registerTypes.SUCCESSFUL_REGISTRATION:{
            return {//we always return the new state, which means, spread the old state
                ...state,
                message: 'You have been registered!'
            }
        }
        case registerTypes.UNSUCCESSFUL_REGISTRATION: {
            return {
                ...state,
                message:action.payload.message
            }
        } 
    
        default:
            return state;
    }
}