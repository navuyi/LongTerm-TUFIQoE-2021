import * as Notifications from "expo-notifications"

export const scheduleForTheDay = async () => {

}


/*
 // Handle notifications
        async function handleNotifications(){
            let notifications = await Notifications.getAllScheduledNotificationsAsync()
            console.log("Asd")
            //console.log(notifications)

            // Cancel all scheduled notifications
            await Notifications.cancelAllScheduledNotificationsAsync()

            //IMPORTANT Method below enables notifications when the app is in foreground
            //IMPORTANT ONLY FOREGROUND ! ! !

            Notifications.setNotificationHandler({
                handleNotification: async () => {
                    // Here we can check if daily video was already watched
                    // and then return proper behavior object
                    //IMPORTANT This process can not be longer than 3 seconds ! ! !
                    const res = await axios.get("https://figlus.pl/api")
                    //console.log(res.data.msg)

                    return {
                        shouldShowAlert: true,
                        shouldPlaySound: false,
                        shouldSetBadge: true,
                    }
                }
            })


            const settings = await Notifications.getPermissionsAsync()
            //console.log(settings)

            // Schedule notification
            await Notifications.requestPermissionsAsync({
                ios: {
                    allowAlert: true,
                    allowBadge: true,
                    allowSound: true,
                    allowAnnouncements: true
                }
            })

            // await AsyncStorage.setItem("token", "123asd123")

            const keys = await AsyncStorage.getAllKeys()
            console.log(keys)

            const token = await AsyncStorage.getItem("token")
            console.log(token)

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Remember to drink water!',
                    body: "Stay hydrated"
                },
                trigger: {

                    hour: 13,
                    minute: 44,
                    repeats: true
                }
            });

            //IMPORTANT Using Date() object to schedule notifications for upcoming days
            const trigger = new Date()
            trigger.setHours(17+24)
            trigger.setMinutes(6)
            trigger.setSeconds(0)
            console.log(trigger)

            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Remember to drink water!',
                    body: "Stay hydrated"
                },
                trigger: trigger
            });


            notifications = await Notifications.getAllScheduledNotificationsAsync()
            //console.log(notifications)
        }
 */