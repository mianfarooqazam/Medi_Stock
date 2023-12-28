import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import auth from '@react-native-firebase/auth';

//

const SignUp = () => {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const handleSignUp = async () => {
      try {
        const fireBaseSignup = await createUserWithEmailAndPassword(auth, email, password);
        console.log(fireBaseSignup);
      } catch (error) {
        console.log('Sign Up Error: ',error)
      }

  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: 'center' }}>User Registration</Text>
      <TextInput label='Email' value={email} onChangeText={(text) => setEmail(text)} />


      <TextInput label='Password' value={password} onChangeText={(text) => setPassword(text)} secureTextEntry />
      <Button mode="contained" onPress={handleSignUp}> Sign Up </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // marginVertical:20
    // width: '90%',
  },
});

export default SignUp;
