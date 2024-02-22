import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message';
import { Button } from 'react-native-paper';

const ChatScreen = () => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  }
  return (
    <View>
      <Text>ChatScreen</Text>
      <Button onPress={showToast}>Press</Button>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})