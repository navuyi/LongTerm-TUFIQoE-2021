import {Text, SafeAreaView, View, Pressable} from 'react-native';
import React, {useEffect, useState} from "react"
import styles from "../../styles/LanguageStyle"
import pol from "../../assets/icons/pol.png"
import eng from "../../assets/icons/eng.png"
import swe from "../../assets/icons/swe.png"
import LanguageButton from "../../components/LanguageButton";
import {COLORS} from "../../styles/config";
import {Button} from "react-native-paper";
import {useTranslation} from "react-i18next";

const Language = ({navigation}) => {
    const {t, i18n} = useTranslation()
   const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setDisabled(false)
        }, 2000)
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.lang_box}>
                <Text style={styles.header}>{t('initialConfiguration:chooseLang')}</Text>
                <LanguageButton mode={"contained"} style={styles.lang_btn} code={"eng"}> {t('initialConfiguration:eng')} </LanguageButton>
                <LanguageButton mode={"contained"} style={styles.lang_btn} code={"pol"}> {t('initialConfiguration:pol')} </LanguageButton>
                <LanguageButton mode={"contained"} style={styles.lang_btn} code={"swe"}> {t('initialConfiguration:swe')} </LanguageButton>
            </View>
            <Button
                mode={"flat"}
                onPress={() => {
                    navigation.reset({
                        index: 0,
                        routes: [{name: "General"}]
                    })
                }}
                color={"whitesmoke"}
                disabled={disabled}
                style={{
                    color: "whitesmoke",
                    width: "50%",
                    backgroundColor: COLORS.success,
                    opacity: disabled ? 0 : 100
                }}
            > Dalej</Button>

        </SafeAreaView>
    )
}


export default Language