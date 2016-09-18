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
    const shareLinkContent = {
      contentType: 'link',
      contentUrl: "https://facebook.com",
      contentDescription: 'Wow, check out this great site!',
    };
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

    const ShareImage = MKButton.coloredButton()
      .withText('Share Image On Facebook')
      .withOnPress(this.props.facebookShare)
      .withStyle({
        width: 425,
        height: 70,
        position: 'absolute',
        bottom:0,
      })
      .withTextStyle({
        fontSize: 21,
        color: 'white'
      })
      .build();

    const topText = this.props.captions != ''? this.props.captions[0].topText.toUpperCase() : '';
    const bottomText = this.props.captions != '' ? this.props.captions[0].bottomText.toUpperCase() : '';
    
    let imageComp = this.props.imageSource !== '' ? <Image
      source={{uri: this.props.imageSource, isStatic: true}}
      style={this.props.styles.image}
      ref="memeImage" >

      <View style={this.props.styles.backdropViewTop}>
        <Text style={this.props.styles.text}>{topText}</Text>
        <Text style={this.props.styles.text}>{bottomText}</Text>
      </View>
    </Image> : <Text></Text>;
  return (
    <View style={this.props.styles.container}>
          { imageComp }
          <SaveImage />
        <ShareImage />
      </View>
    );
  }
}