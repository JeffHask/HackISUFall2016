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
        .withOnPress(props.selectImage)
        .build();
      const GenerateButton = MKButton.coloredButton()
        .withText('Generate Picture')
        .withOnPress(props.nextPage)
        .build();
      const SaveImage = MKButton.coloredButton()
        .withText('Save Image')
        .withOnPress(this.props.saveImage)
        .build();
      return (
        <View style={props.styles.container}>
            <ColoredRaisedButton  />
          <Image
            source={{uri: props.imageSource, isStatic: true}}
            style={props.styles.image}
            ref="imageMe"
          >
              <View style={props.styles.backdropViewTop}>
                  <Text style={props.styles.text}>TopText</Text>
                  {/*<Text style={props.styles.textBorder}>TopText</Text>*/}
                  <Text style={props.styles.text}>BottomText</Text>
                  {/*<Text style={props.styles.textBorder}>TopText</Text>*/}
              </View>
              {/*<View style={props.styles.backdropViewBottom}>*/}
                  {/*<Text style={props.styles.bottomText}>BottomText</Text>*/}
              {/*</View>*/}
          </Image>
          <Text>{props.tagText}</Text>
          {/*<Picker*/}
            {/*style={{width: 200}}*/}
            {/*selectedValue={props.selectValue}*/}
            {/*onValueChange={props.changePicker}>*/}
            {/*<Picker.Item label="Funny" value="funny" />*/}
            {/*<Picker.Item label="Meme-ify" value="dank" />*/}
          {/*</Picker>*/}
          <GenerateButton />
          <SaveImage />
        </View>
    );
  }
}
