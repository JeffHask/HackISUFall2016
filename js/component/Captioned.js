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


export default function Captioned({ tagText, styles }) {

  console.log('Captioned: ' +  tagText);
  return (
    <View>
    <Text>Loading...</Text>
    {tagText === '' ? <MKSpinner /> : <Text>{tagText}</Text>}
  </View>
  );
}