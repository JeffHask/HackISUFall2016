import React, { Component } from 'react';
import Home from './../component/Home.js';
import ImagePicker from 'react-native-image-picker';
import { StyleSheet } from 'react-native';


export default class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
    imageSource:'https://community.clarifai.com/uploads/default/_emoji/clarifai.png',
      tagText: '',
    };
    this.selectImage = this.selectImage.bind(this);
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
        this.setState({imageSource: response.path});
        Clarifai.getTagsByImageBytes(response.data).then(
          (res) => {
            this.setState({tagText:res.results[0].result.tag.classes.toString()});
            console.log(res);
          },
          (error)=>{
            console.log(error);
          });

      }
    });
  }


  render() {
    return <Home
      styles={styles}
      selectImage={this.selectImage}
      imageSource={this.state.imageSource}
      tagText={this.state.tagText}
      />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: 200,
    height:200
  }
});

const options = {
  title: 'Select an Image',
  storageOptions: {
    skipBackup: true,
  },
  maxWidth: 480
};