import React from 'react';
import { Button } from 'react-native-paper';


const ReusableButton = ({ label, onPress, style, textColor }) => {
  return (
    <Button mode="contained" onPress={onPress} style={[{ width: '100%', }, style]} labelStyle={{ color: textColor ? textColor : '#fff' }} >
      {label}
    </Button>
  );
};


export default ReusableButton;

