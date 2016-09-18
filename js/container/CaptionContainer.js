import React, { Component } from 'react';
import Captioned from './../component/Captioned';
import { StyleSheet, Image } from 'react-native';
import Sound from 'react-native-sound';
var Platform = require('react-native').Platform;

export default class CaptionContainer extends Component {
  constructor(props) {

    super(props);

    this.state = {
      tagText: ''
    }
  }

  componentDidMount() {
    Clarifai.getTagsByImageBytes(this.props.image.data).then(
      (res) => {
        this.setState({tagText:res.results[0].result.tag.classes.toString()});
        // console.log(res);
        // let request = new Request('https://captionserver.herokuapp.com/api/captions', {method: 'GET'});
        airhorn.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
        // fetch(request).then(function (response) {
        //   console.log(response);
        // });
      },
      (error)=>{
        console.log(error);
      });
  }

  render() {
    console.log('TAG TEXT: ' + this.state.tagText);
    console.log('image source: ' + this.props.imageSource);
    return <Captioned tagText={this.state.tagText} styles={styles} imageSource={this.props.imageSource} />;
  }
}

let airhorn = new Sound('./airhorn.mp3', Sound.MAIN_BUNDLE);

const fontFamily = Platform.OS === 'ios' ? "HelveticaNeue-CondensedBold" : 'impact';
const styles = StyleSheet.create({
  spinner : {
    width: 33,
    height: 33
  },
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 400,
    height:400,
    marginTop: 20
  },
  backdropViewTop: {
    height: 400,
    width: 400,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  backdropViewBottom: {
    height: 200,
    width: 400,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 54,
    fontFamily: fontFamily,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    textShadowOffset: {
      width: 4,
      height: 4
    },
    textShadowRadius: 9,
    textShadowColor: '#000'
  },
  textBorder: {

  }
});

