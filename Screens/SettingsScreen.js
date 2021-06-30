import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert} from 'react-native';

import db from '../Config'
import firebase from 'firebase'

export default class SettingScreen extends React.Component{
  constructor(){
    super();
    this.state={
      emailId   : '',
      firstName : '',
      lastName  : '',
      address   : '',
      contact   : '',
      docId     : ''
    }
  }

  getUserDetails=()=>{
    var email = firebase.auth().currentUser.email;
    db.collection('users').where('email_id','==',email).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
      var data = doc.data()
        this.setState({
          emailId   : data.email_id,
          firstName : data.first_name,
          lastName  : data.last_name,
          address   : data.address,
          contact   : data.contact,
          docId     : doc.id
        })
      });
    })
  }

  updateUserDetails=()=>{
    db.collection('users').doc(this.state.docId)
    .update({
      "first_name": this.state.firstName,
      "last_name" : this.state.lastName,
      "address"   : this.state.address,
      "contact"   : this.state.contact,
    })

    alert("Your Profile has been updated successfully.")

  }

  componentDidMount(){
    this.getUserDetails()
  }


  render(){
    return(
      <View style={styles.container} >
        
        <View style={styles.formContainer}>
        <Image
          source={require('../assets/FINIFI.jpg')}
          style={{width: 350, height: 150,marginTop: 40,marginLeft:30 }}
        />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"First Name"}
              maxLength ={15}
              onChangeText={(text)=>{
                this.setState({
                  firstName: text
                })
              }}
              value ={this.state.firstName}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Last Name"}
              maxLength ={15}
              onChangeText={(text)=>{
                this.setState({
                  lastName: text
                })
              }}
                value ={this.state.lastName}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Contact"}
              maxLength ={10}
              keyboardType={'numeric'}
              onChangeText={(text)=>{
                this.setState({
                  contact: text
                })
              }}
                value ={this.state.contact}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Address"}
              multiline = {true}
              onChangeText={(text)=>{
                this.setState({
                  address: text
                })
              }}
                value ={this.state.address}
            />
            <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.updateUserDetails()
              }}>
              <Text style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ff0050'
  },
  formContainer:{
    flex:1,
    width:'100%',
    alignItems: 'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    marginTop:20,
    padding:10,
    backgroundColor:'#ffc4d5',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#ffc700",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20,  
  },
  buttonText:{
    fontSize:25,
    fontWeight:"bold",
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    padding: 5,
    backgroundColor: '#ffc700',
    margin: 5,
    width:'90%'
  },
})