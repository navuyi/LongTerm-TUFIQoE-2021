import React, {useCallback, useEffect, useState} from 'react';
import * as SplashScreen from 'expo-splash-screen'
import * as Network from "expo-network"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import axios from "axios";
import {Provider} from "react-redux"
import {Store} from "./redux/store";
import {Appearance, Button} from "react-native";
import {useColorScheme} from "react-native";
import * as FileSystem from "expo-file-system"
import * as Notifications from "expo-notifications"

import General from "./screens/InitialConfiguration/General";
import Cellular from "./screens/InitialConfiguration/Cellular";

import Home from './screens/Home'
import Landing from "./screens/Landing";
import NoConnection from "./screens/NoConnection";

// Test views
import FileSystemTest from "./screens/TestViews/FileSystemTest";
import AVTest from "./screens/TestViews/AVTest";

function App() {
    const [appIsReady, setAppIsReady] = useState(false)
    const Stack = createNativeStackNavigator()
    const colorScheme = useColorScheme()
    const [initialView, setInitialView] = useState("")


    useEffect(() => {
        console.log("Color scheme changed " + colorScheme)
    }, [colorScheme])

    // This is code responsible for displaying splash screen as long as app is loading/fetching external data
    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync(); // <-- remain splash screen visible

                // // //Place for fetching data and async operations, before starting the app // // //
                const network = await Network.getNetworkStateAsync()
                //network.isInternetReachable = false // DELETEME LATER
                if(network.isConnected === true && network.isInternetReachable === true){
                    network.isConnected = false
                    try{
                        //const res = await axios.get("https://figlus.pl/api")
                        const registered = false
                        if(registered === true){
                            setInitialView("Home")
                        }
                        else{
                            //setInitialView("Landing") //TODO Uncomment it later
                            setInitialView("AVTest")
                        }
                    }
                    catch (err){
                        console.log(err)
                    }
                }
                else{
                    console.log("No Internet Connection")
                    setInitialView("NoConnection")
                }
                // Check system color scheme (if dark mode is enabled)
                console.log(Appearance.getColorScheme()) // <-- This is always returning "light"

                // Read files from the directory
                const items = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory)
                console.log(items)

            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
                await SplashScreen.hideAsync() // <-- Hiding SplashScreen
            }
        }

        // Handle notifications
        async function handleNotifications(){
            let notifications = await Notifications.getAllScheduledNotificationsAsync()
            console.log("Asd")
            console.log(notifications)

            // Cancel all scheduled notifications
            await Notifications.cancelAllScheduledNotificationsAsync()

            //IMPORTANT Method below enables notifications when the app is in foreground
            // I guess we do NOT want that to happen
            Notifications.setNotificationHandler({
                handleNotification: async () => ({
                    shouldShowAlert: true,
                    shouldPlaySound: false,
                    shouldSetBadge: false,
                })
            })

            const settings = await Notifications.getPermissionsAsync()
            console.log(settings)

            // Schedule notification
            await Notifications.requestPermissionsAsync({
                ios: {
                    allowAlert: true,
                    allowBadge: true,
                    allowSound: true,
                    allowAnnouncements: true
                }
            })

            /*
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: 'Remember to drink water!',
                },
                trigger: {
                    seconds: 60, // 60 seconds
                    repeats: true
                }
            });
             */


            notifications = await Notifications.getAllScheduledNotificationsAsync()
            console.log("Asd")
            console.log(notifications)

        }

        handleNotifications()
        prepare();
    }, []);

    /*
    const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    }, [appIsReady]);

     */



    if (!appIsReady) {
        return null;
    }
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={initialView} screenOptions={{
                    headerStyle: {
                        backgroundColor: colorScheme === "dark" ? "#222222" : colorScheme === "light" ? "#222222" : "00ff00"
                    },
                    headerTintColor: "#ffffff",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    },
                    headerTitleAlign: "center",
                    headerShadowVisible: false // Disables the visible shadow/separator on bottom of the header
                }}>
                    <Stack.Group screenOptions={{
                        title: "Konfiguracja"
                    }}>
                        <Stack.Screen
                            name={"General"}
                            component={General}
                        />
                        <Stack.Screen
                            name={"Cellular"}
                            component={Cellular}
                        />
                    </Stack.Group>
                    <Stack.Screen
                        name="Landing"
                        component={Landing}
                        options={{
                            title: ""
                        }}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                    />
                    <Stack.Screen
                        name="NoConnection"
                        component={NoConnection}
                        options={{
                            title: ""
                        }}
                    />
                    <Stack.Screen
                        name="FileSystemTest"
                        component={FileSystemTest}
                        options={{
                            title: "FileSystemTest"
                        }}
                    />
                    <Stack.Screen
                        name="AVTest"
                        component={AVTest}
                        options={{
                            title: "AVTest"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App