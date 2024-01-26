import React, { createContext } from "react";
import { useState } from "react";

export const LanguageContext = createContext({});

const langData = {
    "en":{
        name:"name",
        email:"mail",
        search: "Search",
        seeall: "See all"
    },
    "es":{
        name:"nombre",
        email:"correo",
        search: "Buscar",
        seeall: "ver todos"
    }
}

export function LanguageProvider(props){

    const [lang, setLanguage] = useState("es");

    function switchLang(newLang){
        setLanguage(newLang);
    }

    const context = {
        language: lang,
        strings: langData[lang],
        switchLang: switchLang
    }
    return <LanguageContext.Provider value={context}>
        {props.children}
    </LanguageContext.Provider>


}