import {Text, View} from "react-native"
import React from "react"
import {Button} from "react-native-elements"
import styles from "../styles/LandingStyle"
import {LinearGradient} from "expo-linear-gradient";

const Landing = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}> LongTerm Study </Text>
                <Text style={styles.info}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. </Text>
            </View>
            <View style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Text style={styles.info_2}>
                    Kliknij “Rozpocznij” aby przejść do konfiguracji początkowej.
                </Text>
                <LinearGradient
                    colors={["#930035", "#FB0B70"]}
                    style={styles.button}
                    start={{x: 0.2, y: 0.5}}
                >
                    <Text
                        style={styles.buttonText}
                        onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{name: "General"}]
                        })
                    }}> Rozpocznij </Text>
                </LinearGradient>
            </View>
        </View>
    )
}


export default Landing