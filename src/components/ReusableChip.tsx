import React from 'react';
import { Chip } from 'react-native-paper';

const ReusableChip = ({ icon, onPress, label, backgroundColor }) => {
  return (
    <Chip icon={icon} onPress={onPress} style={{ backgroundColor }}>
      {label}
    </Chip>
  );
};

export default ReusableChip;