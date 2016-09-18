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
  MKSpinner,
  MKButton,
  MKColor
} from 'react-native-material-kit';

export default class Captioned extends React.Component {

  render() {
    console.log('Captioned: ' +  this.props.tagText);
    console.log('Captioned imagio: ' + this.props.imageSource);
    console.log('Captioned: ' + this.props.imageSource);


    const SaveImage = MKButton.coloredButton()
        .withText('Save Image')
        .withOnPress(this.props.saveImage)
      .withStyle({
        width: 160,
        height: 40
      })
      .withTextStyle({
        fontSize: 21,
        color: 'white'
      })
        .build();

    let imageComp = this.props.imageSource !== '' ? <Image
      source={{uri: this.props.imageSource, isStatic: true}}
      style={this.props.styles.image}
      ref="memeImage" >

      <View style={this.props.styles.backdropViewTop}>
        <Text style={this.props.styles.text}>TopText</Text>
        <Text style={this.props.styles.text}>BottomText</Text>
      </View>
    </Image> : <Text></Text>;
  return (
    <View style={this.props.styles.container}>
          { imageComp }
          <SaveImage />
      </View>
    );
  }
}