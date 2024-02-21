import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReusableButton from '../../components/Button/ReusableButton'
import { Feather } from '@expo/vector-icons';
const InvoicePreview = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text>hello</Text>

            </View>
            <View style={styles.buttonContainer}>
                <View style={{flexDirection:"row",justifyContent:"space-evenly"}}> 
                <View style={{gap:5,alignItems:'center'}}>
                    <Feather name="send" size={30} color="#d3d3d3" />
                    <Text >Share</Text>
                </View>
                <View style={{gap:5,alignItems:'center'}}>
                    <Feather name="printer" size={30} color="#d3d3d3" />
                    <Text>Print</Text>
                </View>
                <View style={{gap:5,alignItems:'center'}}>
                    <Feather name="settings" size={30} color="#d3d3d3" />
                    <Text>Settings</Text>
                </View>
                </View>
            </View>
        </View>
    )
}

export default InvoicePreview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        padding: 20,

    },
    buttonContainer: {
        backgroundColor: '#fff',
        padding: 30,
        borderTopWidth: 1,
        borderTopColor: '#d3d3d3',
    },
})
