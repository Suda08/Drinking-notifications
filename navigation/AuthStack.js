import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { GoogleSignin } from '@react-native-community/google-signin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen'
import MainScreen from '../screens/MainScreen';
import InputPage1 from '../screens/InputPage1';
import InputPage2 from '../screens/InputPage2';
import InputPage3 from '../screens/InputPage3';
import AppStack from '../navigation/AppStack';




const Stack = createStackNavigator();


const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  

    GoogleSignin.configure({
      webClientId: '616312335614-vh3ms2uhf5db264fv1ij1npanbkn135s.apps.googleusercontent.com',
    });

  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'Login';
  } else {
    routeName = 'MainScreen';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#003357',
            shadowColor: '#003357',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Ionicons.Button 
                name="chevron-back"
                size={35}
                backgroundColor="#003357"
                color="#fff"
                onPress={() => navigation.navigate('MainScreen')}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#003357',
            shadowColor: '#003357',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Ionicons.Button 
                name="chevron-back"
                size={35}
                backgroundColor="#003357"
                color="#fff"
                onPress={() => navigation.navigate('MainScreen')}
              />
            </View>
          ),
        })}
      />
     
    </Stack.Navigator>
  );
      };
export default AuthStack;




