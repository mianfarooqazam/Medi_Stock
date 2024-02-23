import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import animationData from '../../../assets/animation/animation2.json';
import ReusableButton from '../../components/Button/ReusableButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        {/* <LottieView
          source={animationData}
          autoPlay
          loop
          style={styles.animation}
        /> */}
        <Image source={require('../../../assets/images/medicine_logo_white.png')} />
        <Text style={styles.logoText}>Medi Stock</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.formTextView}>
          <TextInput mode='outlined' label="Email" value={email} onChangeText={text => setEmail(text)} style={styles.textInput} activeOutlineColor='#4683FB' outlineColor='#4683FB' />
          <TextInput mode='outlined' label="Password" value={password} onChangeText={text => setPassword(text)} style={styles.textInput} outlineColor='#4683FB' activeOutlineColor='#4683FB' />
        </View>
        <View style={styles.formButtonView}>
          <ReusableButton label="Login" onPress={undefined} style={styles.button} textColor="#fff" />
        </View>
      </View>

      <View style={styles.footer}>
        <Text>Forgot Password 🤦</Text>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: "#fff"
  },
  logo: {
    width: "100%",
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: "#bebebe",
  },
  logoText: {
    fontSize: 30,
    fontWeight: "300",
    color: "#4683FB"
  },
  form: {
    flex: 2,
    justifyContent: 'center',
    // backgroundColor: "yellow",
    width: "100%",
    gap: 30
  },
  formTextView: {
    gap: 10
  },
  formButtonView: {

  },
  textInput: {
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: 'center',
  },
  button: {
    backgroundColor: "#4683fb",
    width: "90%",
    alignSelf: "center",

  },

  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#bebebe",
    width: "100%"
  },
  animation: {
    width: '100%',
    height: '100%',
  },
});

export default Login;