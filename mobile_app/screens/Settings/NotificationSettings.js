import {Text, View} from "react-native"
import React, {useEffect} from "react"
import {SafeAreaView} from "react-native";
import styles from "../../styles/NotificationsSettingsStyle"
import NotificationNumberButton from "../../components/NotificationNumberButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {init} from "../../utils/init";
import {useDispatch} from "react-redux";
import {setNotificationsConfig} from "../../redux/actions";

const NotificationSettings = ({navigation}) => {
    const dispatch = useDispatch()

    useEffect( () => {
        async function init(){
            const schedule_string = await AsyncStorage.getItem("notifications_config")
            const schedule = JSON.parse(schedule_string)
            dispatch(setNotificationsConfig(schedule))
            if(!schedule){
                console.log("Notification schedule is empty")
                return
            }
            console.log(schedule)
        }

        const unsubscribe = navigation.addListener("focus", () => {
            init()
        })

        return unsubscribe
    }, [navigation])



    return (
        <SafeAreaView style={styles.container}>
            <Text>Ustawienia powiadomień</Text>
            <View style={styles.button_container}>
                <NotificationNumberButton number={1} />
                <NotificationNumberButton number={2} />
                <NotificationNumberButton number={3} />
                <NotificationNumberButton number={4} />
            </View>

        </SafeAreaView>
    )

}


export default NotificationSettings