import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import db from '../config';
import firebase from 'firebase';

export default class  Queries extends Component{
  render(){
    return(
      <View>
        <Text>Queries Screen</Text>
      </View>
    )
  }
}