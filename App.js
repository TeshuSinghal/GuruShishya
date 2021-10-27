import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import TeacherLoginScreen from './screens/TeacherLoginScreen';
import StudentLoginScreen from './screens/StudentLoginScreen';


export default class App extends Component{
  render(){
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
}

var AppNavigator= createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  TeacherLoginScreen: TeacherLoginScreen,
  StudentLoginScreen: StudentLoginScreen
})

const AppContainer= createAppContainer(AppNavigator);
