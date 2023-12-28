import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../../../firebaseConfig';
// import auth from '@react-native-firebase/auth';

//

const SignUp = () => {
    const [email, setEmail] = useState('');
 
    const [password, setPassword] = useState('');
    const handleSignUp = () => {
        
        auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
      
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ textAlign: 'center' }}>User Registration</Text>
            <TextInput label='Email' value={email} onChangeText={(text) => setEmail(text)} />

            
            <TextInput label='Password' value={password} onChangeText={(text) => setPassword(text)} secureTextEntry/>
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
