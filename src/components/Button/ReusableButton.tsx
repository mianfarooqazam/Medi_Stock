import React from 'react';
import { Button } from 'react-native-paper';


const ReusableButton = ({ label, onPress, style}) => {
  return (
    <Button mode="contained" onPress={onPress} style={[{ width: '100%' }, style]}   >
      {label}
    </Button>
  );
};

export default ReusableButton;
