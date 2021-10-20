import {DeviceMotion} from "expo-sensors";
import {Gyroscope, Accelerometer, Pedometer} from "expo-sensors"


export const listenToDeviceMotion = async () => {
    const is_available = await DeviceMotion.isAvailableAsync() && await Gyroscope.isAvailableAsync() && await Accelerometer.isAvailableAsync()
    if(!is_available){
        return null
    }
    else{
        await DeviceMotion.setUpdateInterval(500)
        const sub = await DeviceMotion.addListener((data) => {
            //DeviceMotion.setUpdateInterval(5000) //IMPORTANT After going bacground and then foreground interval was reseted to initial (very short)
            console.log(data)
        })
    }
}