import { View, Text } from 'react-native';
import React from 'react';
import { Modal, Portal, Provider } from 'react-native-paper';

const ReusableModal = () => {
  return (
    <Provider>
      <Portal>
        <Modal visible={false}>
         <View></View>
        </Modal>
      </Portal>
    </Provider>
  );
};

export default ReusableModal;
