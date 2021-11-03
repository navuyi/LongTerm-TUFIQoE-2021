import {Text, SafeAreaView, View, Pressable, TextInput} from 'react-native';
import React, {useEffect, useState} from "react"
import {useForm, Controller} from "react-hook-form";

const GeneralEnhanced = ({navigation}) => {
    const {control, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <SafeAreaView>
            <Controller
                control={control}
                rules={{
                    required: true,
                    valueAsNumber: false
                }}
                render={({
                   field: {onChange, onBlur, value}
                }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="f_name"
                defaultValue="Steve"
            />

            <Controller
                control={control}
                rules={{
                    required: true,
                    valueAsNumber: true
                }}
                render={({
                             field: {onChange, onBlur, value}
                         }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="f_name"
                defaultValue={5}
            />

            <Controller
                control={control}
                rules={{
                    required: true,
                    valueAsNumber: false
                }}
                render={({
                             field: {onChange, onBlur, value}
                         }) => (
                    <TextInput
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="f_name"
                defaultValue="Steve"
            />
        </SafeAreaView>
    )
}


export default GeneralEnhanced