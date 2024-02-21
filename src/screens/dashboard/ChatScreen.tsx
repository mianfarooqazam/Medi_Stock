import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View, Dimensions } from 'react-native'
import PieChart from 'react-native-pie-chart'

const { width } = Dimensions.get('window')

export default class TestChart extends Component {
  render() {
    const widthAndHeight =  200
    const series = [123,  521,  123,  789,  537]
    const sliceColor = ['#fbd203', '#15F5BA', '#BFEA7C', '#FFF67E', '#ff3c00']

    return (
      <ScrollView style={{ flex:  1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Basic</Text>
          <PieChart widthAndHeight={widthAndHeight} series={series} sliceColor={sliceColor} />
          <Text style={styles.title}>Doughnut</Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:  1,
    alignItems: 'center',
  },
  title: {
    fontSize:  24,
    margin:  10,
  },
})