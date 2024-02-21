import { AntDesign, Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, TouchableRipple } from 'react-native-paper';
import PieChart from 'react-native-pie-chart'


const { width } = Dimensions.get('window')
const SegmentedButtonExample = () => {
    const [selectedSegment, setSelectedSegment] = useState(0);
    const widthAndHeight = 200
    const series = [123, 521, 123, 789, 537,]
    const sliceColor = ['#fbd203', '#000', '#468EFB', '#2ecc71', '#ff3c00']
    return (

        <View style={{ gap: 20 }} >

            <View style={{ flexDirection: "row", alignSelf: 'center' }}>
                <Button
                    mode={selectedSegment === 1 ? 'contained' : 'outlined'}
                    onPress={() => setSelectedSegment(1)}
                    color={selectedSegment === 1 ? '#468EFB' : 'black'}
                    dark={selectedSegment === 1}
                >

                    Months
                    </Button>
                    <Button
                    mode={selectedSegment === 2 ? 'contained' : 'outlined'}
                    onPress={() => setSelectedSegment(2)}
                    color={selectedSegment === 2 ? '#468EFB' : 'black'}
                    dark={selectedSegment === 2}
                >
                    Customers
                </Button>
                <Button
                    mode={selectedSegment === 3 ? 'contained' : 'outlined'}
                    onPress={() => setSelectedSegment(3)}
                    color={selectedSegment === 3 ? '#468EFB' : 'black'}
                    dark={selectedSegment === 3}
                >
                    Products
                </Button>
            </View>

            <ScrollView contentContainerStyle={{ gap: 20 }}>
                {selectedSegment === 2 && (
                    <TouchableRipple onPress={() => console.log("ripple pressed")} style={{}}>
                        <View style={{ padding: 10, backgroundColor: "#fff", borderRadius: 10, width: "90%", alignSelf: 'center', gap: 10 }} >

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
                            <View style={{ justifyContent: "flex-start", gap: 5 }}>
                                <Text>Jerry</Text>
                                <Text>Doe</Text>
                                <Text>Tom</Text>
                                <Text>Peter</Text>
                            </View>
                        </View>
                    </TouchableRipple>
                )}

                {selectedSegment === 3 && (
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
                                <Text>Cos</Text>
                                <Text>Doe</Text>
                                <Text>Tom</Text>
                                <Text>Peter</Text>
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

export default SegmentedButtonExample;

// <View style={{ gap:  20 }}>
// <View style={{ flexDirection: "row", alignSelf: 'center' }}>
//     <Button mode={selectedSegment ===  1 ? 'contained' : 'outlined'} onPress={() => setSelectedSegment(1)} style={{}}>
//         Months
//     </Button>
//     <Button mode={selectedSegment ===  2 ? 'contained' : 'outlined'} onPress={() => setSelectedSegment(2)}>
//         Customers
//     </Button>
//     <Button mode={selectedSegment ===  3 ? 'contained' : 'outlined'} onPress={() => setSelectedSegment(3)}>
//         Products
//     </Button>
// </View>
// <ScrollView contentContainerStyle={{ gap:  20 }}>
//     {selectedSegment ===  2 && (
//         <TouchableRipple onPress={() => console.log("ripple pressed")} style={{ width: "80%", alignSelf: 'center' }}>
//             <View style={{ padding:  10, backgroundColor: "#fff", borderRadius:  10, alignSelf: 'center' }}>
//                 {/* ... */}
//                 <PieChart
//                     widthAndHeight={widthAndHeight}
//                     series={series}
//                     sliceColor={sliceColor}
//                     coverRadius={0.5}
//                     coverFill={'#FFF'}
//                 />
//                 {/* ... */}
//             </View>
//         </TouchableRipple>
//     )}
//     {selectedSegment ===  3 && (
//         <TouchableRipple onPress={() => console.log("ripple pressed")} style={{ width: "80%", alignSelf: 'center' }}>
//             <View style={{ padding:  10, backgroundColor: "#fff", borderRadius:  10, alignSelf: 'center' }}>
//                 {/* ... */}
//                 <PieChart
//                     widthAndHeight={widthAndHeight}
//                     series={series}
//                     sliceColor={sliceColor}
//                     coverRadius={0.5}
//                     coverFill={'#FFF'}
//                 />
//                 {/* ... */}
//             </View>
//         </TouchableRipple>
//     )}
// </ScrollView>
// </View>