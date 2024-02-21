import React from 'react';
import { View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const ChatScreen = () => {
  // Sample data for the chart
  const data = [
    { label: 'Jan', value:  100 },
    { label: 'Feb', value:  150 },
    { label: 'Mar', value:  200 },
    // ... add more data points as needed
  ];

  return (
    <View style={{ flex:  1, justifyContent: 'center', alignItems: 'center' }}>
      <BarChart
        data={data}
        width={300}
        height={200}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          color: (opacity =  1) => `rgba(255,  255,  255, ${opacity})`,
          labelColor: (opacity =  1) => `rgba(255,  255,  255, ${opacity})`,
        }}
        style={{
          marginVertical:  8,
          borderRadius:  16,
        }}
      />
    </View>
  );
};

export default ChatScreen;