import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppIntroSlider from 'react-native-app-intro-slider';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-paper';

const Slides = [
  {
    Description: "Add, Manage, Engage & Personalize your Customers",
    Icon: "people",
    backgroundColor: "#FF9800",

  },
  {
    Description: "Add, Manage & Elevate your Products",
    Icon: "healing",
    backgroundColor: "#24BcB5",

  },
  {
    Description: " Stay organized with real-time inventory tracking and automated stock alerts.",
    Icon: "inventory",
    backgroundColor: "#3395FF",

  },
  {
    Description: "Streamline your sales process, track performance, and optimize revenue streams",
    Icon: "attach-money",
    backgroundColor: "#F7437B",

  },
  {
    Description: "Communicate with your Customers direclty through the app",
    Icon: "chat-bubble",
    backgroundColor: "#FEBE28",

  }
]

const OnBoarding = ({ navigation }) => {
  const [slider, setSlider] = useState(false);

  const onDone = () => {
    setSlider(true)
    //  navigation.replace("Dashboard")
  };
  const onSkip = () => {
    setSlider(true)
    //  navigation.replace("Dashboard")
  };

  const RenderItem = ({ item }) => {
    return (
      <View style={[styles.itemContainer, { backgroundColor: item.backgroundColor, }]}>
        <Icon name={item.Icon} size={300} color={'#fff'} />
        <Text style={styles.text} >
          {item.Description}
        </Text>

      </View>
    )
  }

  return (
    <>
      <AppIntroSlider
        data={Slides}
        renderItem={RenderItem}
        onDone={onDone}
        showSkipButton={true}
        onSkip={onSkip}
        activeDotStyle={{width:'6%',backgroundColor:"#fff"}}
        doneLabel='Dashboard'
      
        
      />
    </>
  )
}
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 30
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center"
  }

});
export default OnBoarding
