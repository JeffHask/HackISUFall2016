import React, { Component } from 'react';
import Captioned from './../component/Captioned';
import { StyleSheet, Image } from 'react-native';
import Sound from 'react-native-sound';

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
        console.log(res);
        let request = new Request('https://captionserver.herokuapp.com/api/captions', {method: 'GET'});
        airhorn.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
        fetch(request).then(function (response) {
          console.log(response);
        });
      },
      (error)=>{
        console.log(error);
      });
  }

  render() {
    console.log('TAG TEXT: ' + this.state.tagText);
    return <Captioned tagText={this.state.tagText} styles={styles}/>;
  }
}

let airhorn = new Sound('./airhorn.mp3', Sound.MAIN_BUNDLE);

const styles = StyleSheet.create({
  spinner : {
    width: 33,
    height: 33
  }
});

