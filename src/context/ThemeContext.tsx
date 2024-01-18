'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react"

type Theme = 'light' | 'dark'

interface IThemeContext{
    theme: Theme;
    toggleTheme:()=>void;
}

interface IThemeProviderProps{
    children: ReactNode;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = ()=>{
    const context = useContext(ThemeContext);
    if(context === undefined){
        throw new Error('useTHeme must be used within a Theme Provider');
    }
    return context;
} 

export const ThemeProvider = ({children}:IThemeProviderProps) =>{
    const [theme, setTheme] = useState<Theme>(()=>{
        if(typeof window !== 'undefined'){
            return (localStorage.getItem('theme') as Theme) || 'light';
        }
        return 'light';
    });

    useEffect(()=>{
        const root = window.document.documentElement;
        root.classList.remove('light','dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    },[theme]);

    const toggleTheme =()=>{
        setTheme((prevTheme)=>(prevTheme === "light"?'dark':'light'))
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );


    
}