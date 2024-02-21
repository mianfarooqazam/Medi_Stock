import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Reports = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("You Pressed ${count} times ")
        return () => {
            console.log("react app")
        };
    }, [])
    return (
        <View style={{justifyContent:"center",alignItems:'center',flex:1}}>
            <Text>Your Pressed {count} times and times</Text>
            <Text onPress={()=>setCount(count+1)}>Reports</Text>
        </View>
    )
}

export default Reports

const styles = StyleSheet.create({})