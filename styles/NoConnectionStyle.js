import {StyleSheet} from "react-native";
import {COLORS} from "./config";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor: "#222222"
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100
    },
    info: {
        fontSize: 18,
        color: "whitesmoke",
        textAlign: "center",
        marginTop: 20
    },
    button: {
        backgroundColor: COLORS.danger,

    }
})



export default styles