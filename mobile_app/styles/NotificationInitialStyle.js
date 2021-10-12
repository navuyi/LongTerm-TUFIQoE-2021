import {StyleSheet} from "react-native";
import {COLORS} from "./config";


const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20,
        paddingBottom: 20
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        color: "#222222"
    },
    hourSelectContainer: {
        marginTop: 50,
    },
    hourSelectRow:{
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    index: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 25
    }
})

export default styles