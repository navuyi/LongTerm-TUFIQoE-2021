import React from "react"
import {Button} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useTranslation} from "react-i18next";


const LanguageButton = (props) => {

    const LANGUAGES = [
        { code: 'eng', label: 'English' },
        { code: 'pol', label: 'Polski' },
        { code: 'swe', label: 'Svenska' }
    ]
    const {i18n} = useTranslation()
    const selectedLanguage = i18n.language


    const setLanguage = code => {
        return i18n.changeLanguage(code)
    }

    async function handleLanguageChange(){
        const code = props.code
        await AsyncStorage.setItem("language", code)
        setLanguage(code)
    }

    return(
        <Button style={props.style} mode={"contained"} onPress={handleLanguageChange} disabled={selectedLanguage === props.code}> {props.children} </Button>
    )
}


export default LanguageButton