import { useContext, useState, createContext } from "react";

const LanguageContext = createContext()

export function LangaugeProvider ({children}){
    const [language , setLanguage] = useState('en')

    return (
    <LanguageContext.Provider value = {{language, setLanguage}}>
        {children}
    </LanguageContext.Provider>
    )
  
}

export function useLangauge(){
  return useContext(LanguageContext)
}

