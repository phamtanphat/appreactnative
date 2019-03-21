import React, { Component } from 'react'
import { Text, View  } from 'react-native'
import Login from './Login';
import Profile from './Profile';
import Loading from './Loading';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const MyDrawerNavigator = createStackNavigator({
    Loading:{screen : Loading},
    Login: {screen: Login},
    Profile: {screen: Profile}
},{headerMode : 'none'});
  
const Stack = createAppContainer(MyDrawerNavigator);
export default Stack;
