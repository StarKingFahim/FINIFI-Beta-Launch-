import React, { Component} from 'react';
import {View, Text,TouchableOpacity,  StyleSheet} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'

import firebase from 'firebase';

export default class customSidebarMenu extends Component{
  render(){
    return(
      <View style={{flex:1}}>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('LoginScreen')
              firebase.auth().signOut()
          }}>
            <Text style = {styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8,
    fontFamily:'footlight mt'
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logOutText:{
    fontSize: 20,
    fontWeight:'bold',
    fontFamily:'footlight mt'
  }
})