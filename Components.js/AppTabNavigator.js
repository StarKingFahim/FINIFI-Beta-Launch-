import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../Screens/Welcome';
import DoctorScreen from '../Screens/DoctorScreen';
import HospitalScreen from '../Screens/Hospital Screen';
import VirtualBank from '../Screens/VirtualBank';

export const AppTabNavigator = createBottomTabNavigator({
   'Home' : {
    screen: HomeScreen,
    navigationOptions :{
      tabBarIcon : <Image source={{uri:'https://s3fs.paintnite.com/yaymaker-images/venue/original/m0bix-10014150-virtual-event-create-from-home.jpg'}} style={{width:40, height:40}}/>,
      tabBarLabel : "Home",
    }
  },
  'My Doc' : {
    screen: DoctorScreen,
    navigationOptions :{
      tabBarIcon : <Image source={{uri:'https://banner2.cleanpng.com/20200926/hv/transparent-avatar-icon-doctor-icon-5f6f51c8b83822.2620882016011309527546.jpg'}} style={{width:40, height:40}}/>,
      tabBarLabel : "Doc",
    }
  },
  'My Hospital': {
    screen: HospitalScreen,
    navigationOptions :{
      tabBarIcon : <Image source={{uri:'https://cdn.icon-icons.com/icons2/1465/PNG/512/588hospital_100778.png'}} style={{width:40, height:40}}/>,
      tabBarLabel : "Hospital",
    }
  },
   'V Bank' : {
    screen: VirtualBank,
    navigationOptions :{
      tabBarIcon : <Image source={{uri:'https://img.favpng.com/0/18/11/bank-icon-design-finance-icon-png-favpng-0DQYshd6eesyHNLvXMrqqzMTg.jpg'}} style={{width:40, height:40}}/>,
      tabBarLabel : "V Bank",
    }
  },
});