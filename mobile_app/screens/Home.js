import {Text, View} from "react-native"
import React from "react"

import Settings from "./Settings";
import MainMenu from "./MainMenu";
import * as config from "../styles/config"

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
    const style = {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
                backgroundColor: config.HEADER_BG_COLOR,
            },
            headerTintColor: "#ffffff",
        }} >
            <Tab.Screen name={"MainMenu"}  component={MainMenu} options={{
                title: "Menu Główne",
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name={"home"} color={color} size={26} selectionColor={"#ff0000"}/>
                )
            }}/>
            <Tab.Screen name={"Settings"} component={Settings} options={{
                title: "Ustawienia",
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name={"folder-settings"} color={color} size={26} />
                )
            }}/>
        </Tab.Navigator>
    )

}


export default Home