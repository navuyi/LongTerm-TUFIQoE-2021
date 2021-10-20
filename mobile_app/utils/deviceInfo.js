import * as Device from "expo-device"
import * as Filesystem from "expo-file-system"


export const getDeviceInformation = async () => {
    const brand = Device.brand
    const manufacturer = Device.manufacturer
    const model_name = Device.modelName
    const model_id = Device.modelId // <-- only iOS, on Android null is returned
    const device_year_class = Device.deviceYearClass
    const os_name = Device.osName
    const os_version = Device.osVersion
    const platform_api_level = Device.platformApiLevel // only Android, on iOS null is returned

    console.log(brand)
    console.log(manufacturer)
    console.log(model_name)
    console.log(model_id)
    console.log(device_year_class)
    console.log(os_name)
    console.log(os_version)
    console.log(platform_api_level)
}

export const getDeviceMemory = async () => {
    const free = await Filesystem.getFreeDiskStorageAsync()  // <-- Returns disk capacity in bytes
    const total = await Filesystem.getTotalDiskCapacityAsync()
    console.log(`${free} / ${total}`)
}


