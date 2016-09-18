import React, { Component, CameraRoll } from 'react';
import Home from './../component/Home.js';
import ImagePicker from 'react-native-image-picker';
import { StyleSheet, Picker } from 'react-native';
import CaptionContainer from './CaptionContainer';
import RNViewShot from "react-native-view-shot";

export default class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
    imageSource:'',
      tagText: '',
      captionType: 'dank',
      image: {data: ''},
    };
    this.selectImage = this.selectImage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.changePicker = this.changePicker.bind(this);
    this.saveImage = this.saveImage.bind(this);
  }

  selectImage(){
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {

        // Do something with the selected image
        this.setState({imageSource: response.uri, image: response});

      }
    });
  }

  nextPage() {
    this.props.toRoute({
      name: "Here ya go, yarr",
      component: CaptionContainer,
      passProps: {
        image: this.state.image,
      }
    });

  }

  changePicker(caption) {
    this.setState({captionType: caption});
  }

  saveImage() {
    // console.log(this.refs.home.refs.imageMe);
    RNViewShot.takeSnapshot(this.refs.home.refs.imageMe, {
      format: "jpeg",
      quality: 0.8
    })
    .then(
        uri => CameraRoll.saveToCameraRoll("file://" + uri, 'photo'),

        error => console.error("Oops, snapshot failed", error)
    );
  }

  render() {
    return <Home
        ref="home"
      styles={styles}
      selectImage={this.selectImage}
      imageSource={this.state.imageSource}
      tagText={this.state.tagText}
      nextPage={this.nextPage}
      changePicker={this.changePicker}
      selectValue={this.state.captionType}
      saveImage={this.saveImage}
      />
  }
}
const fontFamily = "HelveticaNeue-CondensedBold";
const styles = StyleSheet.create({
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
    fontSize: 72,
    fontFamily: fontFamily,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  },
  textBorder: {

  }

});

const options = {
  title: 'Select an Image',
  storageOptions: {
    skipBackup: true,
  },
  maxWidth: 480
};