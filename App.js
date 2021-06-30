import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import WelcomeScreen from './Screens/Welcome';
import {createDrawerNavigator} from 'react-navigation-drawer';
import LoginScreen from './Screens/login';
import { AppDrawerNavigator } from './Components.js/AppDrawerNavigator'
import {AppTabNavigator} from './Components.js/AppTabNavigator';
import {customSidebarMenu} from './Components.js/CustomSidebar';

export default function App() {
  return (
    <AppContainer/>
);
}

const SwitchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  Drawer:{screen: AppDrawerNavigator},  
    
 })

 

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
