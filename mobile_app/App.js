import React, {useCallback, useEffect, useState} from 'react';
import * as SplashScreen from 'expo-splash-screen'
import * as Network from "expo-network"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import axios from "axios";
import {Provider} from "react-redux"
import {Store} from "./redux/store";

import {useColorScheme} from "react-native";

import * as Notifications from "expo-notifications"

import AsyncStorage from '@react-native-async-storage/async-storage';
import './IMLocalize'
import * as config from "./styles/config";
import Language from "./screens/InitialConfiguration/Language";
import General from "./screens/InitialConfiguration/General";
import Cellular from "./screens/InitialConfiguration/Cellular";
import NotificationsInitial from "./screens/InitialConfiguration/NotificationsInitial"

import Settings from "./screens/Settings/Settings";
import Home from './screens/Home'
import Landing from "./screens/Landing";
import NoConnection from "./screens/NoConnection";

import {clearNotifications, scheduleNotificationsForUpcomingDays} from "./utils/notifications";
import {scheduleNotificationsForTheDay} from "./utils/notifications";
import {getDeviceInformation} from "./utils/deviceInfo";
import {getDeviceMemory} from "./utils/deviceInfo";
import {listenToDeviceMotion} from "./utils/deviceMotion";
// Test views
import FileSystemTest from "./screens/TestViews/FileSystemTest";
import AVTest from "./screens/TestViews/AVTest";


function App() {
    const [appIsReady, setAppIsReady] = useState(false)
    const Stack = createNativeStackNavigator()
    const colorScheme = useColorScheme()
    const [initialView, setInitialView] = useState("")


    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });

    // This is code responsible for displaying splash screen as long as app is loading/fetching external data
    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync(); // <-- remain splash screen visible
                // // //Place for fetching data and async operations, before starting the app // // //
                //await AsyncStorage.clear()
                const network = await Network.getNetworkStateAsync()
                if(network.isConnected === true && network.isInternetReachable === true){
                    try{
                        const access_token = await AsyncStorage.getItem("access_token")
                        console.log(access_token)
                        if(access_token){
                            setInitialView("Home")

                            await AsyncStorage.clear()  //IMPORTANT <-- CLEARING ALL ASYNC STORAGE CONFIG
                            // Handle notification rescheduling


                            await clearNotifications()
                            await scheduleNotificationsForTheDay()
                            //await scheduleNotificationsForUpcomingDays()
                            const schedule = await Notifications.getAllScheduledNotificationsAsync()
                            console.log(schedule)
                            //await getDeviceInformation()           // <-- to be moved
                            //await getDeviceMemory()                // <-- to be moved
                            //await listenToDeviceMotion()          // <-- to be moved
                        }
                        else{
                            setInitialView("Landing")
                            //setInitialView("NotificationsInitial")
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





            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
                await SplashScreen.hideAsync() // <-- Hiding SplashScreen
            }
        }

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
                        backgroundColor: config.HEADER_BG_COLOR
                    },
                    headerShown: true,
                    headerTintColor: "#ffffff",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    },
                    headerTitleAlign: "center",
                    headerShadowVisible: false // Disables the visible shadow/separator on bottom of the header
                }}>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerShown: false
                        }}
                    />

                    <Stack.Group screenOptions={{
                        title: "Konfiguracja"
                    }}>
                        <Stack.Screen
                            name={"General"}
                            component={General}
                        />
                        <Stack.Screen
                            name={"NotificationsInitial"}
                            component={NotificationsInitial}
                        />
                    </Stack.Group>

                    <Stack.Screen
                        name={"Language"}
                        component={Language}
                        options={{
                            title: "",
                            headerShown: false
                        }}
                    />

                    <Stack.Screen
                        name="Landing"
                        component={Landing}
                        options={{
                            title: "",
                            headerShown: false
                        }}
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