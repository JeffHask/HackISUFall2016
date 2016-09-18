/**
 * Created by Jeff on 9/17/2016.
 */
import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import {
  MKSpinner
} from 'react-native-material-kit';


export default function Captioned({ tagText, styles, imageSource }) {

  console.log('Captioned: ' +  tagText);
  console.log('Captioned imagio: ' + imageSource);
  console.log('Captioned: ' + imageSource);


  let imageComp = imageSource !== '' ? <Image
    source={{uri: imageSource, isStatic: true}}
    style={styles.image} >

    <View style={styles.backdropViewTop}>
      <Text style={styles.text}>TopText</Text>
      <Text style={styles.text}>BottomText</Text>
    </View>
  </Image> : <Text></Text>;
  return (
    <View>
    {tagText === '' ?<MKSpinner /> :

        <View>
          { imageComp }
          <Text>
            {tagText}
          </Text>
        </View>
        }
    </View>
  );
}