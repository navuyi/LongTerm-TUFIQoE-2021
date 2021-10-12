import {Text, View} from "react-native"
import React, {useEffect, useRef, useState} from "react"

import NotificationNumberButton from "../../components/NotificationNumberButton";
import NotificationHourInput from "../../components/NotificationHourInput";
import styles from "../../styles/NotificationInitialStyle"
import {Picker} from "@react-native-picker/picker";
import {ScrollView} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {isBlankString} from "../../utils/string_utils";
import {Button} from "react-native-paper";
import {COLORS} from "../../styles/config";

const NotificationsInitial = () => {
    const [activeNumber, setActiveNumber] = useState(1)
    const [proceed, setProceed] = useState(false)
    const [schedule, setSchedule] = useState({
        notificationsPerDay: 0,
        hours: []
    })

    useEffect(() => {
        // Fill array with initial hours
        let initial = 12
        const arr = new Array(activeNumber).fill(0)
        for (let i = 0; i < arr.length; i++) {
            arr[i] = initial
            initial += 2
        }
        const update = {
            ...schedule,
            hours: arr
        }

        setSchedule(update)
    }, [activeNumber])

    useEffect(() => {
        console.log(schedule)
        // Check if all hours are filled and correct
        const proceed = schedule.hours.every(hour => isBlankString(hour) === false)
        setProceed(proceed)

    }, [schedule])

    useEffect(() => {
        console.log(proceed)
    }, [proceed])

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}> Wybierz ilość powiadomień w ciągu dnia: </Text>
            <View style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-around",
                paddingTop: 40
            }}>
                <NotificationNumberButton number={1} setActiveNumber={setActiveNumber} activeNumber={activeNumber}/>
                <NotificationNumberButton number={2} setActiveNumber={setActiveNumber} activeNumber={activeNumber}/>
                <NotificationNumberButton number={3} setActiveNumber={setActiveNumber} activeNumber={activeNumber}/>
                <NotificationNumberButton number={4} setActiveNumber={setActiveNumber} activeNumber={activeNumber}/>
            </View>
            <View style={styles.hourSelectContainer}>
                <Text style={styles.header}> Wybierz godziny powiadomień: </Text>
                {
                    schedule.hours.map((num, index) => {
                        return (
                            <View key={index} style={styles.hourSelectRow}>
                                {/*  <Text style={styles.index}>{index + 1}</Text> */}
                                <NotificationHourInput index={index} schedule={schedule} setSchedule={setSchedule}/>
                            </View>
                        )
                    })
                }
            </View>
            {
                proceed ? <Button style={{
                    width: "50%",
                    marginTop: 50
                }} mode={"contained"} color={COLORS.info}> Dalej </Button> : null
            }
        </KeyboardAwareScrollView>
    )
}


export default NotificationsInitial