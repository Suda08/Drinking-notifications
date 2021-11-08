import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Proptypes from 'prop-types'
import { weatherConditions } from '../../utils/WeatherCondition'
import Ionicons from 'react-native-vector-icons/Ionicons';




const Weahter = ({ weather, temperature }) => {
    return (
        <View >
            <View style={styles.headerContainer}>
            
            <Ionicons style={styles.Icons} name={weatherConditions[weather].iconName} color="white" size={35}  />
            <Text style={styles.tempText}>{temperature}°C</Text>
            </View>
           
        </View>
    )
};

Weahter.Proptypes = {
    temperature: Proptypes.number.isRequired,
    weather: Proptypes.string
}


const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        
    },
    headerContainer: {
        top:-65,
        paddingLeft: 300,
        marginBottom: 10
    },
    tempText: {
        fontSize: 19,
        paddingLeft: 50,
        color: '#fff'
    },
    
    Icons: {
        paddingLeft: 50,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#000'
    }
})
export default Weahter;