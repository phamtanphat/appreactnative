import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , StatusBar} from 'react-native';
import Login from './components/Login';
import Stack from './components/Stack';
import Singer from './components/Singer';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return (
      <Singer/>
    );
  }
}
