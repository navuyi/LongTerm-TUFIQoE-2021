import * as Notifications from "expo-notifications"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Alert} from "react-native";

export const scheduleNotificationsForTheDay = async () => {
    // This method shall be invoked on every application enter - on loading
    const config_json = await AsyncStorage.getItem("notifications_config") // <-- This is stored as JSON string
    if(!config_json){
        await notificationsConfigReminder()
        return
    }
    const config = JSON.parse(config_json)

    // Ask permission for scheduling notifications
    await Notifications.requestPermissionsAsync({
        ios: {
            allowAlert: true,
            allowBadge: true,
            allowSound: true,
            allowAnnouncements: true
        }
    })

    try{
        const hours = config.hours // <-- hours is an array of hours for the notifications to be scheduled
        for(let i=0; i<hours.length; i++){
            console.log(hours)
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: "Zwiastun filmowy gotowy do obejrzenia!",
                    body: "Wejdź i zobacz."
                },
                trigger: {
                    hour: parseInt(hours[i]),
                    minute: 0,
                    repeats: true
                }
            });
        }
        }
    catch(err){
        console.log(err)
    }
}

export const scheduleNotificationsForUpcomingDays = async () =>{
    // First clear all notifications
    clearNotifications()

    const day_01 = new Date()
    //day_01.setDate(parseInt(day_01.getDate)+1)
    day_01.setHours(13)
    day_01.setMinutes(26)
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "Zwiastun filmowy gotowy do obejrzenia!",
            body: "Wejdź i zobacz."
        },
        trigger: day_01
    });
}


export const clearNotifications = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync()
}


export const notificationsConfigReminder = async () => {
    Alert.alert(
        "Konfiguracja powiadomień",
        "Wygląda na to, że konfiguracja powiadomień została pominięta. Czy chcesz ją teraz uzupełnić?",
        [
            {
                text: "Później",
                onPress: () => {
                    console.log("Uzupełnię później")
                }
            },
            {
                text: "Uzupełnij",
                onPress: () => {
                    //TODO Redirect to proper settings page
                    console.log("Przekierowanie")
                }
            }
        ],
        {cancelable: false}
    )
}