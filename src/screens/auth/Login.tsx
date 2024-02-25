import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import animationData from '../../../assets/animation/animation2.json';
import ReusableButton from '../../components/Button/ReusableButton';
import { useForm, Controller } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import ResuableInput from '../../components/TextInput/ReusableInput';

const Login = ({ navigation }) => {
  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
      const user = userCredential.user;
      console.log(data);
      Toast.show({
        type: 'success',
        position: 'top',
        text1: 'Logged in successfully',
        text2: 'Welcome to dashboard',
      });
      navigation.replace("Dashboard");
    })
      .catch((error) => {
        const errorMessage = error.message;
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Error while logging into your account',
          text2: errorMessage,
        });
      })
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../../../assets/images/medicine_logo_white.png')} />
        <Text style={styles.logoText}>Medi Stock</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.formTextView}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <ResuableInput
                mode='outlined'
                label="Email"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                style={styles.textInput}
                activeOutlineColor='#4683FB'
                outlineColor='#4683FB'
              />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <ResuableInput
                mode='outlined'
                label="Password"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                style={styles.textInput}
                outlineColor='#4683FB'
                activeOutlineColor='#4683FB'
              />
            )}
            name="password"
            rules={{ required: true }}
            defaultValue=""
          />
        </View>
        <View style={styles.formButtonView}>
          <ReusableButton label="Login" onPress={handleSubmit(onSubmit)} style={styles.button} textColor="#fff" />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textLink} onPress={() => navigation.navigate("ForgotPassword")}>Forgot Password 🤦</Text>
        <Text>Don't have an account? <Text style={styles.textLink} onPress={() => navigation.navigate("SignUp")}>Sign Up</Text></Text>
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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 30,
    fontWeight: "300",
    color: "#4683FB"
  },
  form: {
    flex: 2,
    justifyContent: 'center',
    width: "100%",
    gap: 30,
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: "100%",
    gap: 10
  },
  textLink: {
    color: "#4683FB",
    fontSize: 16
  },
  animation: {
    width: '100%',
    height: '100%',
  },
});

export default Login;



