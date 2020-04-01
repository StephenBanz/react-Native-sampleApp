import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PolygonCreator from './screens/PolygonCreator'
import Home from './screens/Home'
import Notifications from './screens/Notifications'
import Settings from './screens/Settings'
import Input from './screens/Input'
import ConfirmCode from './screens/ConfirmCode'

function HomeScreen({ navigation }) {
  return (
    <Home />
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <Notifications />
  );
}

function SettingsScreen({ navigation }) {
  return (
    <Settings />
  );
}

function PolygonCreatorScreen({ navigation }) {
  return (
    <PolygonCreator />
  );
}


function InputScreen({ navigation }) {
  return (
      <Input />
  );
}

function ConfirmCodeScreen({ navigation }) {
  return (
    <ConfirmCode />
  );
}


const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="PolygonCreator" component={PolygonCreatorScreen} />
        <Drawer.Screen name="Input" component={InputScreen} />
        <Drawer.Screen name="ConfirmCode" component={ConfirmCodeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}