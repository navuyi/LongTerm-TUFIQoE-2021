import {COLORS} from "./config";
import {StyleSheet} from "react-native";


const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "space-around",
        alignItems: "center",
        padding: 30
    },
    box: {
        width: "100%",
        marginTop: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default style