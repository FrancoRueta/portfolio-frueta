import React, { useEffect, useState, createContext, useContext } from 'react'

const LangContext = createContext()

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'english');

    useEffect(() => {
        document.body.setAttribute('data-lang', lang);
        localStorage.setItem('lang', lang);
    }, [lang]);

    const toggleLang = () => {
        setLang((prevLang) => (prevLang === 'english' ? 'spanish' : 'english'));
    };

    return (
        <LangContext.Provider value={{lang, toggleLang}}>
            {children}
        </LangContext.Provider>
    );
};