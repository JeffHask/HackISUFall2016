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

export default class Home extends React.Component {
    render() {
      const ColoredRaisedButton = MKButton.coloredButton()
        .withText('Select or Take Picture')
        .withOnPress(this.props.selectImage)
        .build();
      const GenerateButton = MKButton.coloredButton()
        .withText('Generate Picture')
        .withOnPress(this.props.nextPage)
        .build();
      return (
        <View style={this.props.styles.container}>
            <ColoredRaisedButton  />
          <Image
            source={{uri: this.props.imageSource, isStatic: true}}
            style={this.props.styles.image}
          >
              {/*<View style={this.props.styles.backdropViewTop}>*/}
                  {/*<Text style={this.props.styles.text}>TopText</Text>*/}
                  {/*<Text style={this.props.styles.textBorder}>TopText</Text>*/}
                  {/*<Text style={this.props.styles.text}>BottomText</Text>*/}
                  {/*<Text style={this.props.styles.textBorder}>TopText</Text>*/}
              {/*</View>*/}
              {/*<View style={this.props.styles.backdropViewBottom}>*/}
                  {/*<Text style={this.props.styles.bottomText}>BottomText</Text>*/}
              {/*</View>*/}
          </Image>
          <Text>{this.props.tagText}</Text>
          {/*<Picker*/}
            {/*style={{width: 200}}*/}
            {/*selectedValue={this.props.selectValue}*/}
            {/*onValueChange={this.props.changePicker}>*/}
            {/*<Picker.Item label="Funny" value="funny" />*/}
            {/*<Picker.Item label="Meme-ify" value="dank" />*/}
          {/*</Picker>*/}
          <GenerateButton />
        </View>
    );
  }
}
