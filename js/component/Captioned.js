/**
 * Created by Jeff on 9/17/2016.
 */
import React from 'react';
import {
  View,
Text
} from 'react-native';

import {
  MKSpinner
} from 'react-native-material-kit';

export default function Captioned() {
  return <View refreshing={true}>
    <Text>Loading...</Text>
    <MKSpinner />
  </View>
}