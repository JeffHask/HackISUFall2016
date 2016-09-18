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

MK.setTheme({
  primaryColor: '#7E57C2',
  accentColor: MKColor.Teal
});
export default class Home extends React.Component {
  render() {
    const ColoredRaisedButton = MKButton.coloredButton()
      .withText('Select or Take Picture')
      .withOnPress(this.props.selectImage)
      .withStyle()
      .build();
    const GenerateButton = MKButton.coloredButton()
      .withText('Meme-ifai')
      .withOnPress(this.props.nextPage)
      .withStyle({
        height: 50
      })
      .withTextStyle({
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'impact',
        fontSize: 48
      })
      .build();
    return (
      <View style={this.props.styles.container}>
        <ColoredRaisedButton  />
        {this.props.imageSource !== '' ?
          <View><Image
            source={{uri: this.props.imageSource, isStatic: true}}
            style={this.props.styles.image}
          >
          </Image><GenerateButton /></View> : <Text></Text> }
      </View>
    );
  }
}
