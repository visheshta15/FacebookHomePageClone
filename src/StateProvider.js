import React, {createContext, useContext, useReducer} from 'react';

//preparing data layer
export const StateContext = createContext();

//higher order component
export const StateProvider = ({
    reducer, initialState, children
}) => {
    return (<StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>);
};


//useStateValue hooks that allows to pull information from data layer
export const useStateValue = () => useContext(StateContext);