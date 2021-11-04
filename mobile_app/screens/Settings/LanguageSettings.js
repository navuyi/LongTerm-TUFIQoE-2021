import React, {useState} from "react"
import {SafeAreaView, View} from "react-native";
import {Text} from "react-native";
import {useTranslation} from "react-i18next";
import styles from "../../styles/LanguageStyle";
import LanguageButton from "../../components/LanguageButton";
import {COLORS} from "../../styles/config";


const LanguageSettings = (props) => {
    const {t, i18n} = useTranslation()
    const [disabled, setDisabled] = useState(true)

    const style = {
        backgroundColor: COLORS.info,
        width: "50%",
        marginTop: 40
    }

    return(
        <SafeAreaView>
            <View style={styles.lang_box}>
                <Text style={{
                    color: "#222222",
                    fontSize: 20,
                    marginBottom: 50
                }}>{t('initialConfiguration:chooseLang')}</Text>
                <LanguageButton mode={"contained"} style={style} code={"eng"}> {t('initialConfiguration:eng')} </LanguageButton>
                <LanguageButton mode={"contained"} style={style} code={"pol"}> {t('initialConfiguration:pol')} </LanguageButton>
                <LanguageButton mode={"contained"} style={style} code={"swe"}> {t('initialConfiguration:swe')} </LanguageButton>
            </View>
        </SafeAreaView>
    )
}

export default LanguageSettings