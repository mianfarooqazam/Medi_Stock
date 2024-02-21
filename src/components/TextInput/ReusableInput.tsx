import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

const ResuableInput = ({label, style}) => {
  return (
    <View>
     <TextInput label={label} style={[{marginVertical: 10, width: '100%', backgroundColor: '#fff'},{style}]} />
    </View>
  )
}

export default ResuableInput