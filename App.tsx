import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { addContact, getContacts } from './lib/firestore-actions';
import { useEffect, useState } from 'react';
export default function App() {
  const [contacts, setContacts] = useState([]) as any[];

  const getData = async () => {
    const data = await getContacts();
    setContacts(data);
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {
        contacts.map((contact, index) => {
          return (
            <Text key={index}>{JSON.stringify(contact)}</Text>
          )
        })
      }

      <Button onPress={addContact}>Add Data</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
