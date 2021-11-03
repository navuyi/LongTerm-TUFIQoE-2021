import React, {useState} from "react"
import {SafeAreaView, View} from "react-native";
import {Text} from "react-native";
import {useTranslation} from "react-i18next";
import styles from "../../styles/LanguageStyle";
import LanguageButton from "../../components/LanguageButton";


const LanguageSettings = (props) => {
    const {t, i18n} = useTranslation()
    const [disabled, setDisabled] = useState(true)

    return(
        <SafeAreaView>
            <View style={styles.lang_box}>
                <Text style={{
                    color: "#222222",
                    fontSize: 20,
                    marginBottom: 50
                }}>{t('initialConfiguration:chooseLang')}</Text>
                <LanguageButton mode={"contained"} style={styles.lang_btn} code={"eng"}> {t('initialConfiguration:eng')} </LanguageButton>
                <LanguageButton mode={"contained"} style={styles.lang_btn} code={"pol"}> {t('initialConfiguration:pol')} </LanguageButton>
                <LanguageButton mode={"contained"} style={styles.lang_btn} code={"swe"}> {t('initialConfiguration:swe')} </LanguageButton>
            </View>
        </SafeAreaView>
    )
}

export default LanguageSettings