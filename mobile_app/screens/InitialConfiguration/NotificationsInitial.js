import {Text, View} from "react-native"
import React, {useEffect, useState} from "react"
import NotificationNumberButton from "../../components/NotificationNumberButton";
import NotificationHourInput from "../../components/NotificationHourInput";
import styles from "../../styles/NotificationInitialStyle"
import {Picker} from "@react-native-picker/picker";
import {ScrollView} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {isBlankString} from "../../utils/string_utils";
import {Button} from "react-native-paper";
import {COLORS} from "../../styles/config";
import {useDispatch, useSelector} from "react-redux";
import {setNotificationsConfig} from "../../redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NotificationsInitial = ({navigation}) => {
    const dispatch = useDispatch()
    //const [activeNumber, setActiveNumber] = useState()
    const [proceed, setProceed] = useState(false)
    const {notifications_config} = useSelector(state => state.userReducer)


    useEffect(() => {
        // Fill array with initial hours
        let initial = 10
        const arr = new Array(parseInt(notifications_config.notificationsPerDay)).fill(0)
        for (let i = 0; i < arr.length; i++) {
            arr[i] = initial
            initial += 4
        }
        const update = {
            ...notifications_config,
            hours: arr
        }
        dispatch(setNotificationsConfig(update))
    }, [notifications_config.notificationsPerDay])

    useEffect(() => {
        // Check if all hours are filled and correct
        const result = notifications_config.hours.every(hour => isBlankString(hour) === false)
        setProceed(result)
        console.log(notifications_config)
        console.log(result)

    }, [notifications_config])

    const handleSubmit = async () => {
        // Save configured hours to AsyncStorage
        const value = JSON.stringify(notifications_config) //IMPORTANT object has to be JSON serialized in order to save it in Storage
        await AsyncStorage.setItem("notifications_config", value)
        await navigation.push("Home")   //TODO Before navigating further - method scheduling notifications should be invoked
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}> Wybierz ilość powiadomień w ciągu dnia: </Text>
            <View style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                paddingTop: 40
            }}>
                <NotificationNumberButton number={1} />
                <NotificationNumberButton number={2} />
                <NotificationNumberButton number={3} />
                <NotificationNumberButton number={4} />
            </View>
            <View style={styles.hourSelectContainer}>
                <Text style={styles.header}> Wybierz godziny powiadomień: </Text>
                {
                    notifications_config.hours.map((num, index) => {
                        return (
                            <View key={index} style={styles.hourSelectRow}>
                                {/*  <Text style={styles.index}>{index + 1}</Text> */}
                                <NotificationHourInput index={index} />
                            </View>
                        )
                    })
                }
            </View>
            {
                proceed ? <Button style={{marginTop: 50}} uppercase={true} mode={"contained"} color={COLORS.info}
                                  icon={"check-bold"} onPress={handleSubmit}>
                    Gotowe
                </Button> : null
            }
        </KeyboardAwareScrollView>
    )
}


export default NotificationsInitial