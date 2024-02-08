import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';


const SplashScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/animation/animation1.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          navigation.replace('OnBoarding');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
