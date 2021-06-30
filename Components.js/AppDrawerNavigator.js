import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSidebar';
import SettingScreen from '../Screens/SettingsScreen';
import MyFeedback from '../Screens/FeedBack';

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,    
    }, 
    'My Feedback':{
      screen: MyFeedback,
    },  
    Setting: {
      screen: SettingScreen,
    },
    
  },
  {
    contentComponent: CustomSideBarMenu,
  },
  {
    initialRouteName: 'Home',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);
