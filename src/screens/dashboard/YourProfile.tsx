import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Modal, Portal, Provider, Button, Divider, } from 'react-native-paper';
import ReusableChip from '../../components/ReusableChip';

const YourProfile = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);


    return (
        <View style={styles.container}>

            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal}>
                        <View style={styles.containerStyle}>
                            <Text style={{fontWeight:"bold"}}>Customer Name</Text>
                            <Divider style={{borderWidth:1,borderColor:"#808080",marginVertical:10}} />
                            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                            <Text style={styles.text}>Total Bill: </Text>
                            <Text style={styles.text}>Rs. 30000 </Text>
                            </View>
                        
                            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                            <Text style={styles.text}>Last Bill: </Text>
                            <Text style={styles.text}>Rs. 30000</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                            <Text style={styles.text}>Pending: </Text>
                            <Text style={styles.text}>Rs. 32300000</Text>
                            </View>
                            
                            <View style={{flexDirection:'row',justifyContent:"space-evenly"}}>
                            <ReusableChip icon="close" onPress={() => console.log('Accepted')} label="Accept" backgroundColor="#9ade7b" />
                            <ReusableChip icon="close" onPress={() => console.log('Rejected')} label="Reject" backgroundColor="#ff004b" />
                           
                            </View>
                        </View>
                    </Modal>
                </Portal>
                <Button style={{ marginTop: 30 }} onPress={showModal}>
                    Show
                </Button>
            </Provider>

        </View>
    );
}
//

const styles = StyleSheet.create({
    container: {
        flex: 1, 
backgroundColor:"#8efb"
    },
    containerStyle: {
        backgroundColor: '#ffff', 
        padding: 10, 
        height: '50%', 
        margin: '5%',
    },
    text: {
        marginBottom:10
    }

});
//
export default YourProfile;
