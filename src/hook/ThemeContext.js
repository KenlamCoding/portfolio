import React, {
    useState,
    useContext
} from "react";
const ThemeContext = React.createContext()
const ThemeUpdateContext=React.createContext()
const ThemeUpdateColor = React.createContext()

export function useTheme(){
    return useContext(ThemeContext)

}
export function useThemeUpdate() {
    return useContext(ThemeUpdateContext) 
}
export function useThemeUpdateColor() {
    return useContext(ThemeUpdateColor)
}
export function ThemeProvider({children}){
    const [dark, setDark] = useState(false);
    
    function toggleTheme(){
        setDark(pervDark=>!pervDark)
    }
    
    const themeStyles = {
        backgroundColor: dark ? 'var(--dark-white)' : 'var(--white)',
        color: dark ? 'var(--white)' : 'var(--black)',
    }
    return(
        <ThemeUpdateColor.Provider value = {themeStyles} >
            <ThemeContext.Provider value={dark}> 
                <ThemeUpdateContext.Provider value={toggleTheme}>
                    {children} 
                </ThemeUpdateContext.Provider>
            </ ThemeContext.Provider>
         </ThemeUpdateColor.Provider>
    )
}