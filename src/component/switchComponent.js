import React, {useState} from 'react';
import {Switch} from 'react-native';

export default function SwitchComponent() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Switch
      trackColor={{false: '#767577', true: '#03CF54'}}
      thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
    />
  );
}
