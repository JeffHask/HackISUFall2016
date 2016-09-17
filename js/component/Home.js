import React from 'react';

import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

const MK = require('react-native-material-kit');

const {
  MKButton,
  MKColor,
} = MK;

export default function Home({ styles, selectImage, imageSource, tagText, nextPage }) {
  const ColoredRaisedButton = MKButton.coloredButton()
    .withText('Select or Take Picture')
    .withOnPress(selectImage)
    .build();
  return (
    <View style={styles.container}>
      {/*<TouchableHighlight onPress={nextPage}>*/}
        <ColoredRaisedButton />
      {/*</TouchableHighlight>*/}
      <Image
        source={{uri: imageSource}}
        style={styles.image}
      />
      <Text>{tagText}</Text>

    </View>
  );
}
