import React, { Component } from 'react';
import Captioned from './../component/Captioned';
import { StyleSheet, Image, CameraRoll, ToastAndroid } from 'react-native';
import Sound from 'react-native-sound';
var Platform = require('react-native').Platform;
import RNViewShot from "react-native-view-shot";

const FBSDK = require('react-native-fbsdk');
const {
  ShareDialog,
} = FBSDK;

export default class CaptionContainer extends Component {
  constructor(props) {

    super(props);

    this.state = {
      tagText: '',
      sharePhotoContent: {
        contentType: 'photo',
        photos: []
      },
      sharePhoto : {
        imageUrl: '',// <diff_path_for_ios>
        userGenerated: false,
        caption: 'hello'
      },
      captions: '',
      shuffle: 0
    };
    this.saveImage = this.saveImage.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.shareLinkWithShareDialog = this.shareLinkWithShareDialog.bind(this);
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

  shareLinkWithShareDialog() {
    let thingyUri;
    RNViewShot.takeSnapshot(this.refs.captioned.refs.memeImage, {
      format: "jpeg",
      quality: 0.8
    }).then(
      uri => this.setState({sharePhoto : {
        imageUrl: uri,
        userGenerated: false,
        caption: 'Created using Aye Aye Caption'
      }})
    );
    let sendToFaceBook = this.state.sharePhotoContent;
    if (this.state.sharePhoto.imageUrl != undefined) {
      sendToFaceBook.photos = [this.state.sharePhoto];
      var tmp = this;
      ShareDialog.canShow(sendToFaceBook).then(
        function (canShow) {
          if (canShow) {
            return ShareDialog.show(sendToFaceBook);
          }
        }
      ).then(
        function (result) {
          if (result.isCancelled) {
            alert('Share cancelled');
          } else {
            alert('Share success with postId: '
              + result.postId);
          }
        },
        function (error) {
          alert('Share fail with error: ' + error);
        }
      );
    }
  }

  shuffle() {
    this.setState({shuffle: Math.floor(Math.random() * (15))});
  }

  render() {
    // console.log('TAG TEXT: ' + this.state.tagText);
    console.log('image source: ' + this.props.imageSource);
    return <Captioned
      shuffle={this.state.shuffle}
      shuffleImage={this.shuffle}
      tagText={this.state.tagText}
      captions={this.state.captions}
      saveImage={this.saveImage}
      styles={styles}
      imageSource={this.props.imageSource}
      ref="captioned"
      facebookShare={this.shareLinkWithShareDialog}
    />;
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
    fontSize: 42,
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