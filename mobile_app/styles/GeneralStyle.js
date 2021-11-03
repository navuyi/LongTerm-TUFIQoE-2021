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
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    box_sex:{
        width: "100%",
        marginTop: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    label: {
        width: "100%",
        textAlign: "left",
        fontSize: 18,
        fontWeight: "normal"
    },
    input: {
        width: "100%",
        height: 35,
        textAlign: "center"
    }
})

export default style