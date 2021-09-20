import {COLORS} from "./config";
import {StyleSheet} from "react-native";


const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        width: "100%",
        marginTop: 20
    },
    box_check: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10
    },
    checkboxContainerStyle: {
      width: "80%"
    },
    label: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default style