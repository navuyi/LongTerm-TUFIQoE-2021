import {StyleSheet} from "react-native";
import {COLORS} from "./config";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor: "#222222",
        paddingLeft: 10,
        paddingRight: 10
    },
    welcome: {
        color: "whitesmoke",
        textAlign: "center",
        fontSize: 25
    },
    header: {
        fontSize: 30,
        color: "white",
        textAlign: "center",
        fontWeight: "bold"
    },
    info:{
        textAlign: "center",
        color: "whitesmoke",
        fontSize: 18,
        marginTop: 30
    },
    info_2: {
        textAlign: "center",
        color: "whitesmoke",
        fontSize: 18,
        marginBottom: 20
    },
    button: {
        backgroundColor: "#930035",
        width: "100%",
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 50
    }
})

export default styles