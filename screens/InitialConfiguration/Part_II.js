import {StyleSheet, View} from 'react-native';
import React from "react"

import {useDispatch, useSelector} from "react-redux";
import {setAge} from "../../redux/actions";
import {Video} from "expo-av"
import * as FileSystem from "expo-file-system"

const Part_II = ({navigation}) => {
    const {sex, age} = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


    const handleChangeText = text => {
        console.log(text)
        dispatch(setAge(text))
    }


    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: FileSystem.documentDirectory + "/batman.mp4",
                }}
                useNativeControls={true}
                resizeMode="contain"
                isLooping={false}
                onPlaybackStatusUpdate={status => {
                    setStatus(() => status)
                    console.log(status.didJustFinish)
                    if (status.didJustFinish === true) {
                        navigation.reset({
                            index: 0,
                            routes: [{name: "Part_III"}]
                        })
                    }
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default Part_II