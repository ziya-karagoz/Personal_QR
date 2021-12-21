import * as React from 'react';
import {} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from '../../navigation/StackNavigator';
import AccountSettingScreen from '../../screens/AccountSettingScreen';




const Drawer = createDrawerNavigator();

function NavBar() {
  return (
      <Drawer.Navigator  >
        <Drawer.Screen name="Hesap Ayarları" component={AccountSettingScreen} options={{headerShown : false}}/>
        <Drawer.Screen name="Close" component={StackNavigator} options={{headerShown : false}}/>
      </Drawer.Navigator>
  );
} export default NavBar