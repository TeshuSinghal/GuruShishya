import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView} from 'react-native';
import TeacherLoginScreen from './TeacherLoginScreen';
import StudentLoginScreen from './StudentLoginScreen';


export default class WelcomeScreen extends React.Component{

  goToNextScreen=(user)=>{
    if(user==="teacher"){
      this.props.navigation.navigate("TeacherLoginScreen")
    }
    else if(user==="student"){
      this.props.navigation.navigate("StudentLoginScreen")
    }
  }
  render(){
    return(
      <View style={styles.container}>
      <SafeAreaView>
        <ImageBackground source={require('../assets/board.png')} style= {styles.backgroundimage}>
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>GURU SHISHYA APP</Text>
        </View>
        
          <TouchableOpacity style={styles.button} 
          onPress={()=>{this.goToNextScreen("teacher")}}>
            <Text style={styles.buttonText}>Teacher</Text>
          </TouchableOpacity>
       
          <TouchableOpacity style={styles.button} 
          onPress={()=>{this.goToNextScreen("student")}}>
            <Text style={styles.buttonText}>Student</Text>
          </TouchableOpacity>
       
        </ImageBackground>
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    borderRadius: 25,
    marginTop: 70,
    width: 200,
    alignItems: 'center',
    marginLeft: 60,
    height: 40,
    padding: 40
  },
  buttonText:{
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    marginBottom: 50
    
  },
  backgroundimage:{
    flex: 1,
    resizeMode: 'cover',
    height: 500,
  },
  container:{
    flex: 1

  },
  titleBar:{
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 80
  
  }
})