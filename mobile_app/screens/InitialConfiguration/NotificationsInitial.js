import {Text, View} from "react-native"
import React, {useEffect, useState} from "react"
import NotificationNumberButton from "../../components/NotificationNumberButton";
import NotificationHourInput from "../../components/NotificationHourInput";
import styles from "../../styles/NotificationInitialStyle"
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {isBlankString} from "../../utils/stringUtils";
import {Button} from "react-native-paper";
import {COLORS} from "../../styles/config";
import {useDispatch, useSelector} from "react-redux";
import {setNotificationsConfig} from "../../redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {scheduleNotificationsForTheDay} from "../../utils/notifications";
import {Picker} from "@react-native-picker/picker";
import axios from "axios";

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
        // Schedule notifications after saving configuration
        await scheduleNotificationsForTheDay()

        // Send request to the server with all gathered data
        const url = "proper url will be here"
        const data = {
            f_name: await AsyncStorage.getItem("user_first_name"),
            l_name: await AsyncStorage.getItem("user_last_name"),
            phone_number: await AsyncStorage.getItem("phone_number"),
            sex: await AsyncStorage.getItem("sex"),
            age: await AsyncStorage.getItem("age"),
            language: await AsyncStorage.getItem("language"),
            notifications_config: JSON.parse(await AsyncStorage.getItem("notifications_config"))
        }
        console.log(data)
        await AsyncStorage.setItem("access_token", "blahblah123dummytoken") //TODO DELETE THIS LATER - LEAVE ONLY FOR DEVELOPMENT STAGE
        //axios.post(url, data).then() //TODO TO BE CONTINUED

        //TODO SAVE ACCESS TOKEN RECEIVED FROM THE SERVER
        //TODO IN CASE OF AN ERROR RETURN BACK TO FIRST STAGE OF INITIAL CONFIGURATION

        await navigation.reset({
            index: 0,
            routes: [{name: "Home"}]
        })
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

                <NotificationNumberButton number={1}/>
                <NotificationNumberButton number={2}/>
                <NotificationNumberButton number={3}/>
                <NotificationNumberButton number={4}/>
            </View>
            <View style={styles.hourSelectContainer}>
                <Text style={styles.header}> Wybierz godziny powiadomień: </Text>
                {
                    notifications_config.hours.map((num, index) => {
                        return (
                            <View key={index} style={styles.hourSelectRow}>
                                {/*  <Text style={styles.index}>{index + 1}</Text> */}
                                <NotificationHourInput index={index}/>
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



/*
    // Picker for selecting number of notifications per day - logic needs to be connected to this element
    <Picker
        selectedValue={notifications_config.notificationsPerDay.toString()}
        prompt={"Płeć"}
        style={{
            width: "100%",
            height: 100,
            color: "whitesmoke",
        }}
        itemStyle={{
            height: 130
        }}
    >
    <Picker.Item label={"1"} value={"1"}/>
    <Picker.Item label={"2"} value={"2"}/>
    <Picker.Item label={"3"} value={"3"}/>
    <Picker.Item label={"4"} value={"4"}/>
</Picker>
 */