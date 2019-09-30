import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from 'expo-font'

import HomeScreen from './src/HomeScreen'
import SignUpForm from './src/User/SignUp';
import BiometricsAuth from './src/User/BiometricAuth';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
    });
    this.setState({ isReady: true });
  }
  render() {
    const HomeScreenRouter = createAppContainer(
      createDrawerNavigator(
      {
        home: {screen: HomeScreen},
        signUp: {screen: SignUpForm},
        biometrics: {screen: BiometricsAuth},
      },
      {
      initialRouteName: 'home',
    }
    )
  );
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <HomeScreenRouter />;
 }
}
