import React from "react"
import Settings from "./Settings/Settings";
import Trailers from "./Trailers";
import Issues from "./Issues";
import AVTest from "./TestViews/AVTest";
import FileSystemTest from "./TestViews/FileSystemTest";

import * as config from "../styles/config"


import {createDrawerNavigator} from "@react-navigation/drawer";


const Home = () => {

    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator screenOptions={{
            headerTitleAlign: "center",
            drawerType: "front",
            headerStyle: {
                backgroundColor: "#1F7A8C",
            },
            headerTintColor: "whitesmoke",
            drawerActiveBackgroundColor: config.HEADER_BG_COLOR,
            drawerActiveTintColor: "whitesmoke"
        }}
        >
            <Drawer.Screen name={"Zwiastuny"} component={Trailers} />
            <Drawer.Screen name={"Ustawienia"} component={Settings} />
            <Drawer.Screen name={"Zgłoś problem"} component={Issues} />
            <Drawer.Screen name={"AVTest"} component={AVTest} />
            <Drawer.Screen name={"FSTest"} component={FileSystemTest} />

        </Drawer.Navigator>
    )

}


export default Home