import {Text, View} from "react-native"
import React, {useEffect} from "react"
import {Button} from "react-native-elements"
import styles from "../styles/LandingStyle"


const Landing = ({navigation}) => {
    const style = {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}> LongTerm Study </Text>
                <Text style={styles.info}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
            </View>

            <View>
                <Text style={styles.info_2}>
                    Kliknij “Rozpocznij” aby przejśc do konfiguracji początkowej.
                </Text>
                <Button
                    title={"Rozpocznij"}
                    buttonStyle={styles.button}
                    onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{name: "General"}]
                        })
                    }}
                />
            </View>
        </View>
    )
}


export default Landing