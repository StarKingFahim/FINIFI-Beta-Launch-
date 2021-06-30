import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,

} from 'react-native';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
          userId:'',
          userName:'',
        }
      }


   render() {
    return (
      <KeyboardAvoidingView style={styles.allText} behavior="padding" enabled>
        
        <Image
          source={require('../assets/FINIFI.jpg')}
          style={{width: 350, height: 150,marginTop: 40,marginLeft:30 }}
        />
        
        
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#0ff" }}>


            
          
          
          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              backgroundColor:'red',
              width: 275,
              textAlign: 'center',
            }}
            onPress={this.pressed}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
            HELP !
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              margin: 10,
              padding: 10,
              backgroundColor:'red',
              width: 275,
              textAlign: 'center',
            }}
            onPress={this.pressed}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
            Call Your Doctor!
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#123456',
    flex: 1,
  },
  header: {
    
    backgroundColor: '#ffffff',
  },
  quesText: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    padding: 20,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: '#8a9bcd',
    width: '50%',
    height: 40,
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
  },
});