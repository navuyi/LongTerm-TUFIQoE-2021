import {Text, View} from "react-native"
import React from "react"
import Icon from "react-native-elements"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NotificationSettings from "./NotificationSettings";
import LanguageSettings from "./LanguageSettings";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
const Tab = createBottomTabNavigator();
import {COLORS} from "../../styles/config";


const Settings = () => {

    return (
        <Tab.Navigator screenOptions={{
            headerTitleAlign: "center",
            headerShown: false
        }}>
            <Tab.Screen name="NotificationSettings" component={NotificationSettings} options={{
                title: "Ustawienia powiadomień",
                tabBarIcon: ({color, focused}) => {
                    return <MaterialIcons name={"notifications"} color={focused ? COLORS.info : COLORS.dark} size={26}/>
                }
            }}/>
            <Tab.Screen name="LanguageSettings" component={LanguageSettings} options={{
                title: "Język",
                tabBarIcon: ({color, focused}) => {
                    return <MaterialIcons name={"language"} color={focused ? COLORS.info : COLORS.dark} size={26}/>
                }
            }}/>
        </Tab.Navigator>
    )

}


export default Settings