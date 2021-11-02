import {StyleSheet} from "react-native";
import {COLORS} from "./config";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor: "#222222",
        paddingLeft: 10,
        paddingRight: 10
    },
    header: {
        color: "whitesmoke",
        fontSize: 24
    },
    lang_box: {
        marginTop: 50,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    lang_btn: {
        width: "50%",
        textAlign: "center",
        backgroundColor: "#2397d2",
        marginTop: 20
    }
})

export default styles