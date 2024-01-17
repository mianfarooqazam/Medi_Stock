import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import animationData from '../../assets/animation3.json'; 

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const onAnimationFinish = () => {
      navigation.replace('Dashboard');
    };

    return () => {};
  }, [navigation]);

  function onAnimationFinish(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.container}>
      <LottieView
     source={require('../../assets/animation3.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          navigation.replace('Dashboard');
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
