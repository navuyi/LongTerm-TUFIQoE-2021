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


import General from "./screens/InitialConfiguration/General";
import Home from './screens/Home'
import Landing from "./screens/Landing";
import NoConnection from "./screens/NoConnection";


function App() {
    const [appIsReady, setAppIsReady] = useState(false)
    const Stack = createNativeStackNavigator()
    const colorScheme = useColorScheme()
    const [initialView, setInitialView] = useState("Part_I")



    useEffect(() => {
        console.log("Color scheme changed " + colorScheme)
    }, [colorScheme])

    // This is code responsible for displaying splash screen as long as app is loading/fetching external data
    useEffect(() => {
        async function prepare() {
            try {
                await SplashScreen.preventAutoHideAsync(); // <-- remain splash screen visible

                //IMPORTANT Place for fetching data and async operations, before starting the app
                const network = await Network.getNetworkStateAsync()
                //network.isInternetReachable = false // DELETEME LATER
                if(network.isConnected === true && network.isInternetReachable === true){
                    //TODO
                    // If Internet is OK send request to server and check if account/device was already registered
                    // If registered -> go to Home
                    // If not registered -> go to Landing for further registration
                    // Test http request
                    try{
                        const res = await axios.get("https://figlus.pl/api")
                        const registered = false
                        if(registered === true){
                            setInitialView("Home")
                        }
                        else{
                            setInitialView("Landing")
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
                        backgroundColor: colorScheme === "dark" ? "#222222" : colorScheme === "light" ? "#ffffff" : "00ff00"
                    },
                    headerTintColor: "#ffffff",
                    headerTitleStyle: {
                        fontWeight: "bold"
                    },
                    headerShadowVisible: false // Disables the visible shadow/separator on bottom of the header
                }}>
                    <Stack.Group screenOptions={{
                        title: "Konfiguracja"
                    }}>
                        <Stack.Screen
                            name={"General"}
                            component={General}
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
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App