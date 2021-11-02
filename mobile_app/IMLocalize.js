import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import eng from "./languages/eng"
import pol from "./languages/pol"
import swe from "./languages/swe"



const LANGUAGES = {
    eng,
    pol,
    swe
}
const LANG_CODES = Object.keys(LANGUAGES)


const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: callback => {
        AsyncStorage.getItem('language', (err, language) => {
            // if error fetching stored data or no language was stored
            // display errors when in DEV mode as console statements
            if (err || !language) {
                if (err) {
                    console.log('Error fetching Languages from asyncstorage ', err);
                } else {
                    console.log('No language is set, choosing English as fallback');
                }
                callback("eng");
                return;
            }
            callback(language);
        });
    },
    init: () => {},
    cacheUserLanguage: language => {
        AsyncStorage.setItem('language', language);
    }
};

i18next
    // detect language
    .use(LANGUAGE_DETECTOR)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // set options
    .init({
        resources: LANGUAGES,
        react: {
            useSuspense: false
        },
        interpolation: {
            escapeValue: false
        }
    });