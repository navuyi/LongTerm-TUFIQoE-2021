import React, {useEffect, useRef, useState} from "react"
import {Text, View} from "react-native"
import {useDispatch, useSelector} from "react-redux";
import styles from "../../styles/GeneralStyle"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Button, TextInput} from "react-native-paper";
import {setAge, setPhoneNumber, setSex, setUserFirstName, setUserLastName} from "../../redux/actions";
import {COLORS} from "../../styles/config";
import {removeWhitespaces} from "../../utils/stringUtils";
import {isBlankString} from "../../utils/stringUtils";
import * as Crypto from "expo-crypto"
import AsyncStorage from "@react-native-async-storage/async-storage";
import SexButton from "../../components/SexButton";

const General = ({navigation}) => {
    const dispatch = useDispatch()
    const {sex, age, phone_number, user_first_name, user_last_name} = useSelector(state => state.userReducer)
    const [ready, setReady] = useState(false)

    const handleSexChange = (value, index) => {
        dispatch(setSex(value))
    }

    useEffect(() => {
        if(isBlankString(sex) === false && isBlankString(phone_number) === false && phone_number.length>=9 && !isBlankString(age) && !isBlankString(user_first_name) && !isBlankString(user_last_name)){
            setReady(true)
        }
        else{
            setReady(false)
        }
    }, [sex, phone_number, age, user_first_name, user_last_name])

    const handlePhoneInput = (text) => {
        if (isNaN(text) === false) {
            dispatch(setPhoneNumber(removeWhitespaces(text)))
        }
    }
    const handleAgeInput = (text) => {
        if (isNaN(text) === false) {
            if(parseInt(text) !== 0){
                dispatch(setAge(removeWhitespaces(text)))
            }
        }
    }
    const handleFirstNameInput = (text) => {
        dispatch(setUserFirstName(text))
    }
    const handleLastNameInput = (text) => {
        dispatch(setUserLastName(text))
    }

    const handleSubmit = async () => {
        // Do not generate access token on user side
        /*
        const access_token = await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            user_first_name.toLowerCase() + user_last_name.toLowerCase() +phone_number.toString()
        )
         */
        await AsyncStorage.multiSet([
            ["age", age],
            ["sex", sex],
            ["phone_number", phone_number],
            ["user_first_name", user_first_name],
            ["user_last_name", user_last_name],
            //["access_token", access_token] // <-- Access token is to be retrieved from server
        ])

        // Redirect to notifications configuration screen
        navigation.push("NotificationsInitial")
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={{width: "100%"}}>
                <View style={styles.box}>
                    <Text style={styles.label}> Imię </Text>
                    <TextInput
                        onChangeText={handleFirstNameInput}
                        value={user_first_name}
                        mode={"outlined"}
                        outlineColor={"#999999"}
                        dense={true}
                        style={styles.input}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}> Nazwisko </Text>
                    <TextInput
                        onChangeText={handleLastNameInput}
                        value={user_last_name}
                        mode={"outlined"}
                        outlineColor={"#999999"}
                        dense={true}
                        style={styles.input}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}> Numer telefonu </Text>
                    <TextInput
                        onChangeText={handlePhoneInput}
                        value={phone_number}
                        mode={"outlined"}
                        outlineColor={"#999999"}
                        keyboardType={"number-pad"}
                        dense={true}
                        style={styles.input}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}> Wiek </Text>
                    <TextInput
                        onChangeText={handleAgeInput}
                        value={age}
                        mode={"outlined"}
                        outlineColor={"#999999"}
                        keyboardType={"number-pad"}
                        dense={true}
                        style={styles.input}
                    />
                </View>
                <View style={styles.box}>
                    <Text style={styles.label}> Płeć </Text>
                    <View style={styles.box_sex}>
                        <SexButton type={"female"} style={styles.sex_btn}>Kobieta</SexButton>
                        <SexButton type={"male"} style={styles.sex_btn}>Mężczyzna</SexButton>
                    </View>
                </View>
            </View>
            {
                !ready ? null :
                    <Button style={{marginTop: 50}} uppercase={true} mode={"contained"} color={COLORS.info}
                            icon={"check-bold"} onPress={handleSubmit}>
                        Dalej
                    </Button>
            }
        </KeyboardAwareScrollView>
    )

}



export default General


/*  // 03.11.2021
    <Picker
        selectedValue={sex}
        prompt={"Płeć"}
        style={{
            width: "100%",
            height: 100,
            color: "whitesmoke",
        }}

        itemStyle={{
            height: 130
        }}
        onValueChange={handleSexChange}
    >
        <Picker.Item label={"Kobieta"} value={"female"}/>
        <Picker.Item label={"Mężczyzna"} value={"male"}/>
    </Picker>
 */



/*
<View style={styles.box_check}>
                <Text style={styles.label}> Płeć </Text>
                <CheckBox
                    size={25}
                    title={"Kobieta"}
                    containerStyle={styles.checkboxContainerStyle}
                    checked={checked.female}
                    onPress={() => {
                        console.log("ASd")
                        //const prev = checked.female
                        //setChecked({...checked, female: !prev})
                    }}
                />
                <CheckBox
                    size={25}
                    title={"Mężczyzna"}
                    containerStyle={styles.checkboxContainerStyle}
                    checked={checked.male}
                    onPress={() => {
                        console.log("ASasdadd")

                        //const prev = checked.male
                        //setChecked({...checked, female: !prev})
                    }}
                />
            </View>
 */