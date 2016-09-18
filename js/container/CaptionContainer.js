import React, { Component } from 'react';
import Captioned from './../component/Captioned';
import { StyleSheet, Image, CameraRoll, ToastAndroid } from 'react-native';
import Sound from 'react-native-sound';
var Platform = require('react-native').Platform;
import RNViewShot from "react-native-view-shot";

export default class CaptionContainer extends Component {
  constructor(props) {

    super(props);

    this.state = {
      captions: ''
    };
    this.saveImage = this.saveImage.bind(this);
  }

  _fetchData(result) {

    fetch('https://captionserver.herokuapp.com/api/captions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        result: result
      })
    })
        .then((response) => response.json())
        .then((responseData) => {

          console.log("THIS IS NEWER:" + JSON.stringify(responseData));
          this.setState({captions:responseData});
        })
        .done();
  }

  componentDidMount() {
    Clarifai.getTagsByImageBytes(this.props.image.data).then(
      (res) => {
        this._fetchData(res.results[0].result);
        let airhorn = new Sound('airhorn.mp3', Sound.MAIN_BUNDLE, (e) => {
          if (e) {
            console.log('error');
          } else {
            console.log('duration', airhorn.getDuration());
            airhorn.play();
          }
        });
      },
      (error)=>{
        console.log(error);
      });
  }

  saveImage() {
      // console.log(this.refs.home.refs.imageMe);
      RNViewShot.takeSnapshot(this.refs.captioned.refs.memeImage, {
          format: "jpeg",
          quality: 0.8
      })
          .then(
              uri => CameraRoll.saveToCameraRoll(uri, 'photo'),

              error => console.log("Oops, snapshot failed")
          );
    ToastAndroid.show('Photo Saved', ToastAndroid.SHORT);
    }

  render() {
    // console.log('TAG TEXT: ' + this.state.tagText);
    console.log('image source: ' + this.props.imageSource);
    console.log('captions:' + JSON.stringify(this.state.captions));
    return <Captioned captions={this.state.captions}
                      saveImage={this.saveImage}
                      styles={styles} imageSource={this.props.imageSource}
                      ref="captioned" />;
  }
}

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
    backgroundColor: '#EEEEEE'
  },
  image: {
    width: 400,
    height: 400,
    marginTop: 5,
    alignItems: 'center',
    marginBottom: 50
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
  }
});

function getCaptions(result) {
  console.log("HELLO:" + JSON.stringify(result));
  fetch('https://captionserver.herokuapp.com/api/captions', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      result: result
    })
  })
  .then((response) => response.json())
  .then((responseData) => {

    console.log("THIS IS NEWER:" + JSON.stringify(responseData));
    this.setState({captions:responseData});
  })
  .done();
}