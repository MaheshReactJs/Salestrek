
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Screen1 from '../screens/screen1'
import Screen2 from '../screens/screen2'
import Screen3 from '../screens/screen3'
import Screen4 from '../screens/screen4'
import Screen5 from '../screens/screen5'
import Screen6 from '../screens/screen6'
import Screen7 from '../screens/screen7'
import Screen8 from '../screens/screen8'



const HomeStack = createStackNavigator();

function Homescreen(){
  return(
<HomeStack.Navigator
 screenOptions={{
  headerShown: false,
 }}
>
    <HomeStack.Screen name={'Screen1'} component={Screen1} />
    <HomeStack.Screen name={'Screen2'} component={Screen2} />
    <HomeStack.Screen name={'Screen3'} component={Screen3} />
    <HomeStack.Screen name={'Screen4'} component={Screen4} />
    <HomeStack.Screen name={'Screen5'} component={Screen5} />
    <HomeStack.Screen name={'Screen6'} component={Screen6} />
    <HomeStack.Screen name={'Screen7'} component={Screen7} />
    <HomeStack.Screen name={'Screen8'} component={Screen8} />
 
 
   

  </HomeStack.Navigator>
  // </NavigationContainer>
  );
}


export default Homescreen;