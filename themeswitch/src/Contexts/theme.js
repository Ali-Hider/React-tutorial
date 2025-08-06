import { createContext, useContext } from "react";

export const Themecontext = createContext({
    thememode: "light",
    darkTheme: ()=>{},
    lightTheme: () =>{},
})

export const Themeprovider = Themecontext.Provider

export default function useTheme(){
    return useContext(Themecontext)
}