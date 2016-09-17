/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import Clarifai from 'clarifai';
import HomeContainer from './js/container/HomeContainer';
import NavbarContainer from './js/container/NavbarContainer';

var options = {
  title: 'Select an Image',
  storageOptions: {
    skipBackup: true,
  },
  maxWidth: 480
};

class HackISUFall2016 extends Component {
  constructor() {
    super();
    // Get Clarifai API client ready before user choose any image
    Clarifai.initialize({
      'clientId': 'tku4bZfynYXXz7EFGlYX3_rYkFxrA3A929X9Gl2l',
      'clientSecret': 'zpMXJQ50UQL9adbDD-ddQlu-QXaS2F_yzeY7lc91'
    });
  }

  render() {
    return (
      <View>
        <NavbarContainer />
        <HomeContainer />
      </View>
    );
  }
}

AppRegistry.registerComponent('HackISUFall2016', () => HackISUFall2016);
