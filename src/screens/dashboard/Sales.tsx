import { AntDesign, Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, TouchableRipple } from 'react-native-paper';
import PieChart from 'react-native-pie-chart'
import DividerBar from '../../components/Divider/DividerBar';


const { width } = Dimensions.get('window')
const Sales = () => {
    const [selectedSegment, setSelectedSegment] = useState(0);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null)
    const widthAndHeight = 200
    const customerSalesData = {
        Jerry: 123,
        Doe: 521,
        Tom: 433,
        Peter: 789,
        Emilia: 537,
    };
    const productSalesData = {
        Cosflor: 323,
        Regix: 421,
        Costio: 133,
        Refix: 589,
        Mativ: 437,
    };

    const sliceColors = ['#fbd203', '#7F27FF', '#2ecc71', '#ff3c00', '#468EFB',]

    const customerSeries = Object.values(customerSalesData);
    const sliceCustomerColor = Object.keys(customerSalesData).map((customer, index) => {
        return customer === selectedCustomer ? '#000' : sliceColors[index];
    });

    const productSeries = Object.values(productSalesData);
    const sliceProductColor = Object.keys(productSalesData).map((product, index) => {
        return product === selectedProduct ? '#000' : sliceColors[index];
    });

    const totalSales = Object.values(customerSalesData).reduce((a, b) => a + b, 0);


    const customerPercentages = Object.entries(customerSalesData).map(([customer, sales]) => {
        return { customer, percentage: (sales / totalSales) * 100 };
    });
    const productPercentages = Object.entries(productSalesData).map(([product, sales]) => {
        return { product, percentage: (sales / totalSales) * 100 };
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

            <ScrollView contentContainerStyle={{ gap: 20, }}>
                {selectedSegment === 2 && (

                    <View style={{ padding: 10, backgroundColor: "#fff", borderRadius: 10, width: "90%", alignSelf: 'center', gap: 10, }} >

                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold", }}>Sales by Customer</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <PieChart
                                widthAndHeight={widthAndHeight}
                                series={customerSeries}
                                sliceColor={sliceCustomerColor}
                                coverRadius={0.5}
                                coverFill={'#FFF'}
                            />
                        </View>
                        <View style={{ flexDirection: "row", gap: 20, }}>
                            <View style={{ gap: 5, }}>
                                
                                {customerPercentages.map(({ customer }) => (
                                    <Text key={customer} onPress={() => setSelectedCustomer(customer)} style={{ fontSize: 20, }}>
                                        {customer}

                                    </Text>
                                ))}

                            </View>

                            <View style={{ gap: 5 }}>
                                {customerPercentages.map(({ percentage }) => (
                                    <Text key={percentage} style={{ fontSize: 20, }}>
                                        {percentage.toFixed(2)} %
                                    </Text>

                                ))}

                            </View>
                        </View>
                    </View>

                )}


                {selectedSegment === 3 && (

                    <View style={{ padding: 10, backgroundColor: "#fff", borderRadius: 10, width: "90%", alignSelf: 'center', gap: 10, }} >

                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: "#468EFB", fontSize: 25, fontWeight: "bold", }}>Sales by Products</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <PieChart
                                widthAndHeight={widthAndHeight}
                                series={productSeries}
                                sliceColor={sliceProductColor}
                                coverRadius={0.5}
                                coverFill={'#FFF'}
                            />
                        </View>
                        <View style={{ flexDirection: "row", gap: 20, }}>
                            <View style={{ gap: 5, }}>
                            {productPercentages.map(({ product }) => (
                                    <Text key={product} onPress={() => setSelectedProduct(product)} style={{ fontSize: 20, }}>
                                        {product}
                                    </Text>
                                ))}
                            </View>
                            <View style={{ gap: 5 }}>
                                {productPercentages.map(({ percentage }) => (
                                    <Text key={percentage} onPress={() => setSelectedProduct(percentage)} style={{ fontSize: 20, }}>
                                        {percentage.toFixed(2)} %
                                    </Text>
                                ))}
                            </View>
                        </View>
                    </View>

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

export default Sales;

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