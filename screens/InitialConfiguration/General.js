import React, {useState} from "react"
import {Text, View} from "react-native"
import {useDispatch, useSelector} from "react-redux";
import {Picker} from "@react-native-picker/picker";
import styles from "../../styles/GeneralStyle"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Button, TextInput} from "react-native-paper";
import {setAge, setPhoneNumber, setSex} from "../../redux/actions";
import {COLORS} from "../../styles/config";

const General = ({navigation}) => {
    const dispatch = useDispatch()
    const {sex, age, phone_number} = useSelector(state => state.userReducer)
    const [checked, setChecked] = useState({
        female: true,
        male: false
    })

    const handleSexChange = (value, index) => {
        dispatch(setSex(value))
    }

    const handlePhoneInput = (text) => {
        console.log(text)
        if (isNaN(text) === false) {
            dispatch(setPhoneNumber(text))
        }
    }
    const handleAgeInput = (text) => {
        console.log(text)
        if (isNaN(text) === false) {
            dispatch(setAge(text))
        }
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={{width: "100%"}}>
            <View style={styles.box}>
                <Text style={styles.label}> Numer telefonu </Text>
                <TextInput
                    onChangeText={handlePhoneInput}
                    value={phone_number}
                    mode={"outlined"}
                    outlineColor={"#222222"}
                    dense={true}
                    style={{
                        width: "100%"
                    }}
                />
            </View>
            <View style={styles.box}>
                <Text style={styles.label}> Wiek </Text>
                <TextInput
                    onChangeText={handleAgeInput}
                    value={age}
                    mode={"outlined"}
                    outlineColor={"#222222"}
                    dense={true}
                    style={{
                        width: "100%"
                    }}
                />
            </View>
            <View style={styles.box}>
                <Text style={styles.label}> Płeć </Text>
                <Picker
                    selectedValue={sex}
                    prompt={"Płeć"}
                    style={{
                        width: "100%",
                        height: 100
                    }}
                    itemStyle={{
                        height: 120
                    }}
                    onValueChange={handleSexChange}
                >
                    <Picker.Item label={"Kobieta"} value={"female"}/>
                    <Picker.Item label={"Mężczyzna"} value={"male"}/>
                </Picker>
            </View>
            </View>
            <Button style={{marginTop: 50}} uppercase={true} mode={"contained"} color={COLORS.success}
                    icon={"check-bold"} onPress={() => {
                // TODO navigate to next page
            }
            }>
                Dalej
            </Button>
        </KeyboardAwareScrollView>
    )

}

// file download example
/*
<Button
                title={"Download"}
                onPress={() => {
                    FileSystem.downloadAsync(
                        "https://figlus.pl/storage/videos/batman.mp4",
                        FileSystem.documentDirectory + "batman.mp4"
                    ).then(({uri}) => {
                        console.log('Finished downloading to ', uri);
                    })
                        .catch(error => {
                            console.error(error);
                        });
                }}

                buttonStyle={{
                    width: "100%",
                    marginTop: 50,
                    backgroundColor: COLORS.danger
                }}
            />
 */

export default General


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