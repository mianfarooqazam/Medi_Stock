import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

const Login = () => {
  return (
    <View style={styles.container}>
     <Text style={{ textAlign: 'center' }}>Enter your details</Text>
      <TextInput label='Email'  />
      <TextInput label='Password'  secureTextEntry />
      <Button mode="contained" > Login </Button>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
    flex:1,
    justifyContent:'center',
  
}
})
export default Login