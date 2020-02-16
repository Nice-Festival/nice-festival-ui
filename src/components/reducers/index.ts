import { combineReducers } from "redux";
import { registerReducer } from "./register-reducer";
import { loginReducer } from "./login-reducer";

export interface IUserState {
    currentUser:any
    loginMessage:string
}
export interface IRegisterState {
    message:string
}

export interface IState {
    userState : IUserState
    // pokemonState: IPokemonState
    // clickerState: IClickerState
    // starWarsState:IStarWarsState
    // t3State:ITicTacToeState
    registerState:IRegisterState
}


// we will take the individual reduces for each part of state
// and turn them into one super reducer that represents all of state
export const state = combineReducers<IState>({
    // userState:loginReducer,
    // pokemonState:pokemonReducer,
    // clickerState:clickerReducer,
    // starWarsState:starWarsReducer,
    // t3State:ticTacToeReducer
    registerState:registerReducer,
    userState: loginReducer
})