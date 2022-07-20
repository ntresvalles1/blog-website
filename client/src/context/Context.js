import {createContext, useEffect, useReducer} from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null, 
    isFetching: false,
    error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) =>{
    // send credentials --> fail OR successful --> if successful, update state ; if fail, change err to true 
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE); //reducer updates Initial_State

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]); //so if refresh page, we are still able to use the same user

    return(
        <Context.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch, //dispatch success/fail when hit login button
        }}>
            {children}
        </Context.Provider>
    );
};