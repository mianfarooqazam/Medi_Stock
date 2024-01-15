import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const delay = setTimeout(() => {
      navigation.replace('Dashboard');
    }, 1000);

    return () => clearTimeout(delay);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={{ uri: 'https://lottie.host/b15dc61a-d81d-4260-acc7-1e26ef9e0c8e/7Po5Fklu0q.json' }}
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
    // flex: 1,r
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
