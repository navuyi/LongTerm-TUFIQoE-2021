import {Button, Text, View} from "react-native"
import React, {useState} from "react"
import {Audio, Video} from "expo-av"
import * as FileSystem from "expo-file-system"

const AVTest = () => {
    const video = React.useRef(null)
    const [status, setStatus] = useState({})

    return (
        <View style={style}>
            <Video
                ref={video}
                style={{
                    width: "100%",
                    height: 300
                }}
                source={{
                    uri: FileSystem.documentDirectory + "/batman.mp4",
                }}
                onPlaybackStatusUpdate={(status) => {
                    //console.log(status)
                }}
            />
            <View >
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>{
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                        video.current.presentFullscreenPlayer()
                    }}
                />
            </View>
        </View>
    )
}

const style = {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
}


export default AVTest