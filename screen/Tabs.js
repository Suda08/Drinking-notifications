import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import History from './History';
import HomePage from './HomePage';
import settings from './Settings';
import Statis from './Statis';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomePage" component={HomePage} />
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Statis" component={Statis} />
            <Tab.Screen name="settings" component={settings} />
        </Tab.Navigator>
    );
}