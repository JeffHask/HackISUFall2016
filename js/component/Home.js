import React from 'react';

import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default function Home({ styles, selectImage, imageSource, tagText }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={selectImage}>
        <Text>Select an image</Text>
      </TouchableHighlight>
      <Image
        source={{uri: imageSource}}
        style={styles.image}
      />
      <Text>{tagText}</Text>
    </View>
  );
}