import {Text, SafeAreaView, View, Pressable} from 'react-native';
import React, {useEffect, useState} from "react"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useDispatch, useSelector} from "react-redux";
import styles from "../../styles/Language"
import pol from "../../assets/icons/pol.png"
import eng from "../../assets/icons/eng.png"
import swe from "../../assets/icons/swe.png"
import LanguageButton from "../../components/LanguageButton";
import {COLORS} from "../../styles/config";
import {Button} from "react-native-paper";
import {useTranslation} from "react-i18next";

const Language = ({navigation}) => {
    const {t, i18n} = useTranslation()

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>{t('initialConfiguration:chooseLang')}</Text>

            <View style={styles.lang_box}>
                <LanguageButton mode={"contained"} style={styles.lang_btn} code={"eng"}> {t('initialConfiguration:eng')} </LanguageButton>
                <LanguageButton mode={"contained"} style={styles.lang_btn} code={"pol"}> {t('initialConfiguration:pol')} </LanguageButton>
                <LanguageButton mode={"contained"} style={styles.lang_btn} code={"swe"}> {t('initialConfiguration:swe')} </LanguageButton>
            </View>

        </SafeAreaView>
    )
}


export default Language