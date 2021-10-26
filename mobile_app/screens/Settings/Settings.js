import {Text, View} from "react-native"
import React from "react"
import Icon from "react-native-elements"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NotificationSettings from "./NotificationSettings";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const Tab = createBottomTabNavigator();



const Settings = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerTitleAlign: "center",
            headerShown: false
        }}>
            <Tab.Screen name="Ustawienia powiadomień" component={NotificationSettings} options={{
                tabBarIcon: ({color}) => {
                    return <MaterialCommunityIcons name={"bell"} color={color} size={26}/>
                }
            }}/>
            <Tab.Screen name="Dane" component={NotificationSettings} options={{
                tabBarIcon: ({color}) => {
                    return <MaterialCommunityIcons name={"account"} color={color} size={35}/>
                }
            }}/>
            <Tab.Screen name="Spare" component={NotificationSettings} options={{
                tabBarIcon: ({color, focused}) => {
                    return <MaterialCommunityIcons name={"book"} color={focused ? "#1F7A8C" : color} size={35}/>
                }
            }}/>
        </Tab.Navigator>
    )

}


export default Settings