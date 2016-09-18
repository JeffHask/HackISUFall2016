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
import Clarifai from 'clarifai';
import HomeContainer from './js/container/HomeContainer';
import NavbarContainer from './js/container/NavbarContainer';
import CaptionContainer from './js/container/CaptionContainer';
import Router from 'react-native-simple-router';

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
    this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    this.props.toRoute({
      name: "Here Do Be Meme",
      component: CaptionContainer
    });
  }

  render() {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        titleStyle={styles.title}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#7E57C2',
  },
  title: {
    alignSelf: 'center'
  }
});

const firstRoute = {
  name: 'Aye Aye Caption',
  component: HomeContainer,
};

AppRegistry.registerComponent('HackISUFall2016', () => HackISUFall2016);
