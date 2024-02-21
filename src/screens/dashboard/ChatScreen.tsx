import { AntDesign, Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, TouchableRipple } from 'react-native-paper';
import PieChart from 'react-native-pie-chart'


const { width } = Dimensions.get('window')
const ChatScreen = () => {
  const [selectedSegment, setSelectedSegment] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  
  const widthAndHeight = 200
  const salesData = {
    Jerry: 123,
    Doe: 521,
    Tom: 233,
    Peter: 789,
    Emilia: 537,
  };


  const sliceColors = ['#fbd203', '#7F27FF', '#2ecc71', '#ff3c00', '#468EFB',]
  const series = Object.values(salesData);
  const sliceColor = Object.keys(salesData).map((customer, index) => {
    return customer === selectedCustomer ? '#000' : sliceColors[index];
  });

  const totalSales = Object.values(salesData).reduce((a, b) => a + b, 0);

  
  const customerPercentages = Object.entries(salesData).map(([customer, sales]) => {
    return { customer, percentage: (sales / totalSales) * 100 };
  });
  return (

    <View style={{ gap: 20 }} >

      <View style={{ flexDirection: "row", alignSelf: 'center' }}>

        <Button
          mode={selectedSegment === 1 ? 'contained' : 'outlined'}
          onPress={() => setSelectedSegment(1)}
          color={selectedSegment === 1 ? '#468EFB' : 'black'}
          dark={selectedSegment === 1}
        >
          Customers
        </Button>
        <Button
          mode={selectedSegment === 2 ? 'contained' : 'outlined'}
          onPress={() => setSelectedSegment(2)}
          color={selectedSegment === 2 ? '#468EFB' : 'black'}
          dark={selectedSegment === 2}
        >
          Products
        </Button>
      </View>

      <ScrollView contentContainerStyle={{ gap: 20, }}>
        {selectedSegment === 1 && (

          <View style={{ padding: 10, backgroundColor: "#fff", borderRadius: 10, width: "90%", alignSelf: 'center', gap: 10, }} >

            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold", }}>Sales by Customer</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.5}
                coverFill={'#FFF'}
              />
            </View>
            <View  style={{flexDirection:"row", gap:20,}}>
              <View style={{gap:5,}}>
              {customerPercentages.map(({ customer }) => (
                <Text key={customer} onPress={() => setSelectedCustomer(customer)} style={{fontSize:20,}}>
                  {customer} 
                </Text>
              ))}
              </View>
              <View style={{gap:5}}>
              {customerPercentages.map(({  percentage }) => (
                <Text key={percentage} onPress={() => setSelectedCustomer(percentage)} style={{fontSize:20,}}>
                  {percentage.toFixed(2)} %
                </Text>
              ))}
              </View>
            </View>
          </View>

        )}

        {selectedSegment === 2 && (
          <TouchableRipple onPress={() => console.log("ripple pressed")} style={{}}>
            <View style={{ padding: 10, backgroundColor: "#fff", borderRadius: 10, width: "90%", alignSelf: 'center', gap: 10 }} >

              <View style={{ alignItems: 'center' }}>
                <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold", }}>Sales by Product</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <PieChart
                  widthAndHeight={widthAndHeight}
                  series={series}
                  sliceColor={sliceColor}
                  coverRadius={0.5}
                  coverFill={'#FFF'}
                />
              </View>
              <View style={{ justifyContent: "flex-start", gap: 5 }}>
                <Text>Cosflor</Text>
                <Text>Refix</Text>
                <Text>Augmen</Text>
                <Text>Costio</Text>
                <Text>Mativ</Text>
              </View>
            </View>

          </TouchableRipple>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  title: {
    fontSize: 24,
    margin: 10,
  },
})

export default ChatScreen;

