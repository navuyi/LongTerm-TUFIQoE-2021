import {Image, Text, View} from "react-native"
import React from "react"
import {Button} from "react-native-elements"
import styles from "../styles/NoConnectionStyle"

import * as Updates from "expo-updates"

const NoConnection = () => {
    const style = {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("../assets/icons/no-wifi.png")}
                    style={styles.image}
                />
                <Text style={styles.info}> Brak połączenia z Internetem. Połączenie Internetowe jest wymagane do
                    korzystania z aplikacji. </Text>
            </View>
            <Button
                title={"Spróbuj ponownie"}
                onPress={() => {
                    Updates.reloadAsync()
                }}
                buttonStyle={styles.button}
            />
        </View>
    )
}


export default NoConnection