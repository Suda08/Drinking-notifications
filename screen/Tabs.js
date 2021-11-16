import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from './History';
import HomePage from './HomePage';
import settings from './Settings';
import Statis from './Statis';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    paddingHorizontal: 5,
                    paddingTop: 0,
                    backgroundColor: '#003357',
                    position: 'absolute',
                    borderTopWidth: 0,
                },
            })}
            tabBarOptions={{
                showLabel: false,
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={35} />
                    ),
                }}
            />
            <Tab.Screen
                name="History"
                component={History}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="calendar-text" color={color} size={35} />
                    ),
                }}
            />
            <Tab.Screen
                name="Statis"
                component={Statis}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chart-bar" color={color} size={35} />
                    ),
                }}
            />
            <Tab.Screen
                name="settings"
                component={settings}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="md-settings-sharp" color={color} size={35} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}