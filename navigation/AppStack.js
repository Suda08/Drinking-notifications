import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme, Avatar} from 'react-native-paper';

import HomePage from '../screens/HomePage';
import History from '../screens/History';
import Data from '../screens/Data';
import Settings from '../screens/Settings';
import EdtiProfile from '../screens/EditProfile';
import PostScreen from '../screens/PostScreen';
import InputPage1 from '../screens/InputPage1';

const HomeStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const DataStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator 
  screenOptions={{
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: '#003357',
      height: 60,
      position: 'absolute',
    },
}}>
  
    <Tab.Screen
      name="HomeStackScreen"
      component={HomeStackScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Icon name="home" color={focused ? '#47BBFA' : '#D4D3D3'} size={35}   />
           ),
      }}
    />
    <Tab.Screen
      name="HistoryStackScreen"
      component={HistoryStackScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Icon name="md-today-sharp" color={focused ? '#47BBFA' : '#D4D3D3'} size={35} />
           ),
      }}
    />
    <Tab.Screen
      name="DataStackScreen"
      component={DataStackScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Icon name="md-stats-chart" color={focused ? '#47BBFA' : '#D4D3D3'} size={35} />
           ),
      }}
    />
    <Tab.Screen
      name="SettingsStackScreen"
      component={SettingsStackScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <Icon name="settings-sharp" color={focused ? '#47BBFA' : '#D4D3D3'} size={35} />
           ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;



   

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomePage}
        options={{
          headerTitle: 'Home',
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#003357',
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
      />

      <HomeStack.Screen 
      name="PostScreen"
      component={PostScreen}
      options={({navigation}) => ({
        headerTitle: 'การดื่มน้ำอย่างถูกวิธี',
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#003357',
            shadowColor: '#fff',
            elevation: 0,
          },
      })}
      />
      <HomeStack.Screen 
        name="InputPage1"
        component={InputPage1}
        options={({route}) => ({
          // title: route.params.title,
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: '#fff'
        })}
      />
    </HomeStack.Navigator>
  );
};

const HistoryStackScreen = ({navigation}) => (
  <HistoryStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff'
      
    }}>
    <HistoryStack.Screen
      name="History"
      component={History}
      options={{
      headerTitle: 'ประวัติการดื่มน้ำ',
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#003357',
        shadowColor: '#fff',
        elevation: 0,
      },
        
      }}
    />
  </HistoryStack.Navigator>
);

const DataStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <DataStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}>
      <DataStack.Screen
        name="Data"
        component={Data}
        options={{
          headerTitle: 'สถิติ',
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#003357',
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
      />
      <DataStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EdtiProfile}
      />
    </DataStack.Navigator>
  );
};

const SettingsStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}>
      <SettingsStack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: 'ตั้งค่า',
          headerTintColor: '#fff',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#003357',
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
      />
      
    </SettingsStack.Navigator>
  );
};