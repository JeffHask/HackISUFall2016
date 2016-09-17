import React from 'react';
import NavigationBar from 'react-native-navbar';
import { View } from  'react-native';

export default function Navbar() {
  const titleConfig = {
    title: 'Aye Aye Caption',
  };

  return (
    <View>
      <NavigationBar
        title={titleConfig}
      />
    </View>
  )
}