import React from "react";

const AppContext = React.createContext();

export const useAppContext = () => React.useContext(AppContext);

export const AppContextProvider = ({ children }) => {
    const [appState, setAppState] = React.useState({
        data: [],
        addToCart:[],
    });
    const updateState = (newState) => {
        setAppState((prevstate) => ({
            ...prevstate,
            ...newState,
        }));
    };
    return (
        <AppContext.Provider value={{appState, updateState}}>
            {children}
        </AppContext.Provider>
    );
}