import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../../firebaseConfig';

const SearchCustomers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = collection(db, 'Customers');
        const querySnapshot = await getDocs(collectionRef);

        // Extract data from the snapshot
        const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // Update state with the fetched data
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {data.length > 0 ? (
        data.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.text}>Customer Name: {item.Customer_Name}</Text>
            <Text style={styles.text}>Area: {item.Area}</Text>
            <Text style={styles.text}>Address: {item.Address}</Text>
          </View>
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
  },
});

export default SearchCustomers;
