import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './screens/Home';
import MobileTransferDecision from './screens/MobileTransferDecision';

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const Stack = createNativeStackNavigator()

  /*// This is code responsible for displaying splash screen as long as app is loading/fetching external data
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync(); // <-- remain splash screen visible
       
        // Place for fetching data and async operations, before starting the app
        await new Promise(resolve => setTimeout(resolve, 2000)); // <-- dummy delay


      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  */

  const style = { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: "#222222"
  }


  


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MobileTransferDecision">
        <Stack.Screen 
          name="MobileTransferDecision" 
          component={MobileTransferDecision} 
          options={
            {title: "Dopuszczać transfer komórkowy?"}
          }
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

export default App