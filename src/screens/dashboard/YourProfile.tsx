import { View, Text } from 'react-native'
import React from 'react'
import { Chip } from 'react-native-paper'
import ResuableInput from '../../components/TextInput/ReusableInput'

const YourProfile = () => {
  return (
    <View>
      <Text>YourProfile</Text>
      <View style={{width:"90%",alignSelf:'center'}}>
      <ResuableInput label={'undefined'} style={undefined}  />
      </View>
    </View>
  )
}

export default YourProfile