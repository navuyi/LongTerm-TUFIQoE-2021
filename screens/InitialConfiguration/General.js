import React from "react"
import {View, Text} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import {Input} from "react-native-elements/dist/input/Input";
import {CheckBox} from "react-native-elements/dist/checkbox/CheckBox";
import {useSelector, useDispatch} from "react-redux";
import {setAge} from "../../redux/actions";
import {setSex} from "../../redux/actions";
import styles from "../../styles/GeneralStyle"

const General = ({navigation}) => {
    const {sex, age} = useSelector(state => state.userReducer)


    //IMPORTANT  //TODO
    // Install npm i react-native-keyboard-aware-scroll-view and implement it so
    // the keyboard will not hide our elements
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.label}> Wiek </Text>
                <Input

                />
            </View>
            <View style={styles.box_check}>
                <Text style={styles.label}> Płeć </Text>
                <CheckBox
                    size={25}
                    title={"Kobieta"}
                    containerStyle={styles.checkboxContainerStyle}
                />
                <CheckBox
                    size={25}
                    title={"Mężczyzna"}
                    containerStyle={styles.checkboxContainerStyle}
                />
            </View>
            <View style={styles.box}>
                <Text style={styles.label}> Numer telefonu </Text>
                <Input

                />
            </View>


        </View>
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