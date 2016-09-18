import React from 'react';

import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  Image,
  Picker
} from 'react-native';

const MK = require('react-native-material-kit');

const {
  MKButton,
  MKColor,
} = MK;

export default function Home(props) {
  const ColoredRaisedButton = MKButton.coloredButton()
    .withText('Select or Take Picture')
    .withOnPress(props.selectImage)
    .build();
  const GenerateButton = MKButton.coloredButton()
    .withText('Generate Picture')
    .withOnPress(props.nextPage)
    .build();
  return (
    <View style={props.styles.container}>
        <ColoredRaisedButton  />
      {props.imageSource !== '' ?
      <Image
        source={{uri: props.imageSource, isStatic: true}}
        style={props.styles.image}
      >
      </Image> : <Text></Text> }
      <GenerateButton />
    </View>
  );
}
